#######################################
############### Imports ###############
#######################################

# import ecpy utilities
from ecpy.curves import Curve, Point
from ecpy.keys import ECPublicKey, ECPrivateKey

# import other utilities
import secrets
from utils import *

# import PublicParams
from params import *

# import crypto schemes
import ishe
import nizk
from ishe import Ciphertext, Signature


#######################################
############### Classes ###############
#######################################

class Wallet:

    def __init__(self, name: str, pk, sk, info: str, pp: PublicParams) -> None:

        self.name = name
        self.pk = pk
        self.sk = sk

        self.balance = 0  # in plaintext
        self.info = info  # description for co-wallet
        self.state = 0  # state

    def printWallet(self):
        print()
        print("~ ~ ~ Wallet ~ ~ ~")
        print("Name: ", self.name)
        print()
        print("Public key:")
        print(" ", self.pk)
        print()
        print("Secret key:")
        print(" ", self.sk)
        print()
        print("Balance: ", self.balance)
        print()
        print("State: ", self.state)


class CTx:  # confidential transaction

    def __init__(self, pks: ECPublicKey, pkr: ECPublicKey, Cs: Ciphertext, Cr: Ciphertext, Ca: Ciphertext, state: int, memo: str, proof: str, sigma: Signature) -> None:

        self.pks = pks  # sender pk
        self.pkr = pkr  # receiver pk

        self.Cs = Cs  # tx amount encrypted under sender pk
        self.Cr = Cr  # tx amount encrypted under receiver pk
        self.Ca = Ca  # tx amount encrypted under auditor pk

        self.state = state  # state of the sender wallet
        self.memo = memo  # tx memo

        self.sigma = sigma  # signature for integrity
        self.proof = proof  # validty proof


#########################################
############### Functions ###############
#########################################

def Setup(MAX_BAL: int) -> PublicParams:
    return PublicParams(MAX_BAL)


def CreateWallet(name: str, info: str, pp: PublicParams) -> Wallet:  # ran by users
    # if it is a personal wallet, just pass an empty string to info
    (pk, sk) = ishe.KeyGen(pp)
    return Wallet(name, pk, sk, info, pp)


def RevealBalance(wallet: Wallet, cloud_balance: Ciphertext, cipher_dict: dict, pp: PublicParams):  # ran by users
    # for precision
    return ishe.Dec(wallet.sk, cloud_balance, cipher_dict, pp) / 100


def CreateCTx(wallet: Wallet, pkr: ECPublicKey, v: float, memo: str, pp: PublicParams) -> CTx:  # ran by sender

    v = int(v*100)  # for precision
    r = secrets.randbelow(pp.field)
    # tx amount encrypted under sender pk; pks^r, g^r h^v
    Cs = ishe.Enc(wallet.pk, v, pp, r)
    # tx amount encrypted under receiver pk; pkr^r, g^r h^v
    Cr = ishe.Enc(pkr, v, pp, r)
    # tx amount encrypted under supervisor pk; pka^r, g^r h^v
    Ca = ishe.Enc(pp.pka, v, pp, r)

    Bs = ishe.Enc(wallet.pk, wallet.balance, pp, secrets.randbelow(pp.field))

    # validity proof
    proof = nizk.Prove(wallet.pk, pkr, pp.pka, Cs, Cr, Ca, Bs)

    # sign the pre-ctx
    message = str(wallet.state)+str(wallet.pk) + \
        str(pkr)+str(pp.pka)+str(Cs)+str(Cr)+str(Ca)+str(proof)
    sigma = ishe.Sign(wallet.sk, secure_hash(message), pp)

    return CTx(wallet.pk, pkr, Cs, Cr, Ca, wallet.state, memo, proof, sigma)


def VerifyCTx(ctx: CTx, pp: PublicParams) -> bool:  # ran by Cloud
    message = str(ctx.state)+str(ctx.pks) + \
        str(ctx.pkr)+str(pp.pka)+str(ctx.Cs) + \
        str(ctx.Cr)+str(ctx.Ca)+str(ctx.proof)
    verify_sig = ishe.Verify(ctx.pks, ctx.sigma, secure_hash(message), pp)
    verify_proof = nizk.Verify(
        ctx.pks, ctx.pkr, pp.pka, ctx.Cs, ctx.Cr, ctx.Ca, ctx.proof, pp)
    return verify_sig and verify_proof


def UpdateCTx(Bs: Ciphertext, Br: Ciphertext, ctx: CTx, pp: PublicParams) -> tuple:  # ran by Cloud
    Bs_new = ishe.homoSub(Bs, ctx.Cs, pp)
    Br_new = ishe.homoAdd(Br, ctx.Cr, pp)
    return (Bs_new, Br_new)


# ran by supervisor for global supervision
def OpenCTx(ska: ECPrivateKey, ctx: CTx, cipher_dict: dict, pp: PublicParams):
    return ishe.Dec(ska, ctx.Ca, cipher_dict, pp) / 100  # for precision

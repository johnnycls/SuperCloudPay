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

#######################################
############### Classes ###############
#######################################


class Ciphertext:

    def __init__(self, X: Point, Y: Point):
        self.X: Point = X  # X = pk^r
        self.Y: Point = Y  # Y = g^m h^r

    def printCT(self):
        print()
        print("~ ~ ~ Ciphertext ~ ~ ~")
        print("X: ("+str(self.X.x)+", "+str(self.X.y)+")")
        print("Y: ("+str(self.Y.x)+", "+str(self.Y.y)+")")


class Signature:
    def __init__(self, A: Point, z: int):
        self.A: Point = A
        self.z: int = z

    def printSig(self):
        print()
        print("~ ~ ~ Signature ~ ~ ~")
        print("A: ("+str(self.A.x)+", "+str(self.A.y)+")")
        print("z:", self.z)


######################################
############### KeyGen ###############
######################################


def KeyGen(pp: PublicParams) -> tuple:
    sk = ECPrivateKey(secrets.randbelow(pp.field), pp.cv)
    pk = sk.get_public_key()
    return (pk, sk)


##########################################
############### Encryption ###############
##########################################


def Enc(pk: ECPublicKey, m: int, pp: PublicParams, r: int) -> Ciphertext:
    X = pp.cv.mul_point(r, pk.W)
    Y = pp.cv.add_point(pp.cv.mul_point(r, pp.g), pp.cv.mul_point(m, pp.h))
    return Ciphertext(X, Y)


def Dec(sk: ECPrivateKey, C: Ciphertext, cipher_dict: dict, pp: PublicParams) -> int:
    X, Y = C.X, C.Y
    Z = pp.cv.mul_point(pow(sk.d, -1, pp.cv.order), X)
    if Y == Z:  # error if m = 0
        return 0
    M = pp.cv.sub_point(Y, Z)  # h^m; mH
    m = cipher_dict[str(M)]
    return m


######################################################
############### Homomorphic Operations ###############
######################################################

def homoAdd(C_1: Ciphertext, C_2: Ciphertext, pp: PublicParams) -> Ciphertext:
    C_x = pp.cv.add_point(C_1.X, C_2.X)
    C_y = pp.cv.add_point(C_1.Y, C_2.Y)
    return Ciphertext(C_x, C_y)


def homoSub(C_1: Ciphertext, C_2: Ciphertext, pp: PublicParams) -> Ciphertext:
    C_x = pp.cv.sub_point(C_1.X, C_2.X)
    C_y = pp.cv.sub_point(C_1.Y, C_2.Y)
    return Ciphertext(C_x, C_y)


##################################################
############### Schnorr Signatures ###############
##################################################
def Sign(sk: ECPrivateKey, m: int, pp: PublicParams) -> Signature:
    r = secrets.randbelow(pp.field)
    A = pp.cv.mul_point(r, pp.g)
    e = secure_hash(str(m)+str(A))
    z = (r + sk.d * e) % (pp.cv.order)  # z = (r+sk*e) mod order
    return Signature(A, z)


def Verify(pk: ECPublicKey, sigma: Signature, m: int, pp: PublicParams) -> bool:
    e = secure_hash(str(m)+str(sigma.A))
    left = pp.cv.mul_point(sigma.z, pp.g)  # LEFT = g ^ z
    right = pp.cv.add_point(pp.cv.mul_point(
        e, pk.W), sigma.A)  # RIGHT = pk ^ e + A
    return compare_points(left, right)

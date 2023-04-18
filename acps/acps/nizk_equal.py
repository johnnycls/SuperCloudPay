'''
NIZK Proof for testing (actually it just consists of equality proof)
Version: v0
Date: 2023-03-01
'''


# import ecpy utilities
from ecpy.curves import Curve, Point
from ecpy.keys import ECPublicKey, ECPrivateKey

# import other utilities
import secrets
from utils import *

# import PublicParams
from params import *


class Instance:

    def __init__(self, pks: ECPublicKey, pkr: ECPublicKey, pka: ECPublicKey, Xs: Point, Xr: Point, Xa: Point, Y: Point) -> None:
        self.pks: ECPublicKey = pks
        self.pkr: ECPublicKey = pkr
        self.pka: ECPublicKey = pka
        self.Xs: Point = Xs
        self.Xr: Point = Xr
        self.Xa: Point = Xa
        self.Y: Point = Y


class Witness:

    def __init__(self, r: int, v: int) -> None:
        self.r: int = r
        self.v: int = v


class Proof:  # define structure of DLOG_EQ_Proof

    def __init__(self, As: Point, Ar: Point, Aa: Point, B: Point, z: int, t: int) -> None:
        self.As: Point = As  # P's first round message
        self.Ar: Point = Ar  # P's first round message
        self.Aa: Point = Aa  # P's first round message
        self.B: Point = B  # P's first round message
        self.z: int = z  # V's response
        self.t: int = t  # V's response


# generate NIZK proof for Ci = Enc(pki, v; r) i={1,2,3} the witness is (r, v)
def Prove(instance: Instance, witness: Witness, pp: PublicParams) -> Proof:

    # initialize transcript with instances
    transcript = str(instance.pks) + str(instance.pkr) + str(instance.pka) + \
        str(instance.Xs) + str(instance.Xr) + \
        str(instance.Xa) + str(instance.Y)

    a = secrets.randbelow(pp.field)
    As = pp.cv.mul_point(a, instance.pks.W)  # As = pks^a
    Ar = pp.cv.mul_point(a, instance.pkr.W)  # Ar = pkr^a
    Aa = pp.cv.mul_point(a, instance.pka.W)  # Aa = pka^a

    b = secrets.randbelow(pp.field)
    B = pp.cv.add_point(pp.cv.mul_point(a, pp.g),
                        pp.cv.mul_point(b, pp.h))  # B=g^a h^b

    # update the transcript with the first round message
    transcript += str(As) + str(Ar) + str(Aa) + str(B)

    # compute the challenge
    e: int = secure_hash(transcript)  # V's challenge in Zq

    # compute the response
    z = (a + e * witness.r) % pp.cv.order  # z = a+e*r mod q
    t = (b + e * witness.v) % pp.cv.order  # t = a+e*v mod q

    return Proof(As, Ar, Aa, B, z, t)


# check NIZK proof PI for Ci = Enc(pki, m; r) the witness is (r1, r2, m)
def Verify(instance: Instance, proof: Proof, pp: PublicParams) -> bool:

    # initialize transcript with instances
    transcript = str(instance.pks) + str(instance.pkr) + str(instance.pka) + \
        str(instance.Xs) + str(instance.Xr) + \
        str(instance.Xa) + str(instance.Y)

    # update the transcript with first round messages stated in proof
    transcript += str(proof.As) + str(proof.Ar) + str(proof.Aa) + str(proof.B)

    # compute the challenge
    # apply FS-transform to generate the challenge
    e: int = secure_hash(transcript)

    LEFT_s: Point = pp.cv.mul_point(proof.z, instance.pks.W)
    RIGHT_s: Point = pp.cv.add_point(proof.As, pp.cv.mul_point(e, instance.Xs))
    condition_s: bool = compare_points(LEFT_s, RIGHT_s)

    LEFT_r: Point = pp.cv.mul_point(proof.z, instance.pkr.W)
    RIGHT_r: Point = pp.cv.add_point(proof.Ar, pp.cv.mul_point(e, instance.Xr))
    condition_r: bool = compare_points(LEFT_r, RIGHT_r)

    LEFT_a: Point = pp.cv.mul_point(proof.z, instance.pka.W)
    RIGHT_a: Point = pp.cv.add_point(proof.Aa, pp.cv.mul_point(e, instance.Xa))
    condition_a: bool = compare_points(LEFT_a, RIGHT_a)

    LEFT_sra: Point = pp.cv.add_point(pp.cv.mul_point(
        proof.z, pp.g), pp.cv.mul_point(proof.t, pp.h))  # g^z h^t
    RIGHT_sra: Point = pp.cv.add_point(proof.B, pp.cv.mul_point(e, instance.Y))
    condition_sra: bool = compare_points(LEFT_sra, RIGHT_sra)

    Validity: bool = condition_s and condition_r and condition_a and condition_sra

    return Validity

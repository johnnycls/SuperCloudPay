
from ecpy.curves import Curve, Point
from ecpy.keys import ECPublicKey, ECPrivateKey
from utils import *
from params import *
from ishe import homoSub
import nizk_equal
import bulletproofs
import math


class Proof:

    def __init__(self, equality, positive, solvent) -> None:
        self.equality = equality
        self.positive = positive
        self.solvent = solvent


def Prove(pks, pkr, pka, Cs, Cr, Ca, Bs, r, v, pp):
    equality = nizk_equal.Prove(nizk_equal.Instance(
        pks, pkr, pka, Cs.X, Cr.X, Ca.X, Cs.Y), nizk_equal.Witness(r, v))
    # since equality checked, just check Cs suffices
    positive = bulletproofs.NIRangeProver(
        v, math.log(pp.MAX_BAL, 2), pp.g, pp.h, Cs).prove()
    solvent = bulletproofs.NIRangeProver(v, math.log(
        pp.MAX_BAL, 2), pp.g, pp.h, homoSub(Cs, Bs)).prove()
    return Proof(equality, positive, solvent)


def Verify(pks, pkr, pka, Cs, Cr, Ca, proof, pp):
    equality: bool = nizk_equal.Verify(nizk_equal.Instance(
        pks, pkr, pka, Cs.X, Cr.X, Ca.X, Cs.Y), proof.equality, pp)
    positive = bulletproofs.NIRangeVerifier(
        proof.positive).prove()
    solvent = bulletproofs.NIRangeVerifier(proof.solvent).prove()
    validity: bool = equality and positive and solvent
    return validity

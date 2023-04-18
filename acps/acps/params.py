import time
from ecpy.curves import Curve, Point
from ecpy.keys import ECPublicKey, ECPrivateKey

import secrets
from utils import *


class PublicParams:

    def __init__(self, MAX_BAL: int) -> None:

        self.MAX_BAL = MAX_BAL  # Max balance supported
        self.MAX_MSG = MAX_BAL * 100  # max account balance * 100 for precision

        self.cv = Curve.get_curve('Curve448')  # complies with HK regulation

        self.field = self.cv.field

        self.g = self.cv.generator

        self.h = ECPrivateKey(secrets.randbelow(  # h should be coprime with g
            self.field), self.cv).get_public_key().W
        while gcd(self.h.x, self.g.x) != 1 or gcd(self.h.y, self.g.y) != 1:
            self.h = ECPrivateKey(secrets.randbelow(
                self.field), self.cv).get_public_key().W

        self.pka = None  # supervisor's public key for global supervision

  # Pre-compute small_dlog table for faster decryption
    def fastDecryption(self):
        cipher_dict = {str(self.cv.mul_point(
            i, self.h)): i for i in range(1, self.MAX_MSG+1)}
        save_json('ciphertext_space.json', cipher_dict)
        print("Initialization for fast decryption finished")

    def printPP(self):
        print()
        print("~ ~ ~ Public Parameters ~ ~ ~")
        print("Max balance supported:", self.MAX_BAL)
        print()
        print("Curve information:")
        print(" ", self.cv)
        print()
        print("g:")
        print(" ", self.g)
        print("h:")
        print(" ", self.h)
        print("Supervisor public key:")
        print(" ", self.pka)

#########################################
############### Utilities ###############
#########################################

from ecpy.curves import Curve, Point
import hashlib
import json


def compare_points(p1: Point, p2: Point) -> bool:
    return (p1.x == p2.x) and (p1.y == p2.y)


def gcd(a: int, b: int) -> int:
    if a < b:
        return gcd(b, a)
    elif a % b == 0:
        return b
    else:
        return gcd(b, a % b)


def secure_hash(m: str):  # do i hv to mod it to Zp?
    return int(hashlib.sha256(bytes(m, 'utf-8')).hexdigest(), 16)


def save_json(file_name: str, cipher_dict: dict):  # load json table to dictionary
    with open(file_name, 'w') as json_file:
        json.dump(cipher_dict, json_file)
    return


def load_json(file_name: str) -> dict:  # load json table to dictionary
    with open(file_name) as json_file:
        data = json.load(json_file)
        return data


def small_dlog(h: Point, M: Point, cv: Curve, message_space: list) -> int:
    i = 1
    for m in message_space:
        if m == M:
            return i
        i += 1
    return -1

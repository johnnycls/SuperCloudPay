import json
import requests
import random

BASE_URL = "http://127.0.0.1:8000"


def createUser(username, password, first_name, last_name, phone):
    return requests.post(
        f"{BASE_URL}/user/create/",
        data=json.dumps({
            "username": username,
            "password": password,
            "first_name": first_name,
            "last_name": last_name,
            "phone": phone,
        }),
    )


def getToken(username, password):
    return requests.post(
        f"{BASE_URL}/user/login/", data={"username": username, "password": password}
    )


def getUserInfo(token):
    return requests.get(f"{BASE_URL}/user/retrieve/", headers={"Authorization": token})


def createCurrency(currency, token):
    return requests.post(f"{BASE_URL}/api/currency/", data=currency, headers={"Authorization": token})


def getCurrencies(token):
    return requests.get(f"{BASE_URL}/api/currency/", headers={"Authorization": token})


def createConversion(conversion, token):
    return requests.post(f"{BASE_URL}/api/conversion/", data=conversion, headers={"Authorization": token})


def getConversions(token):
    return requests.get(f"{BASE_URL}/api/conversion/", headers={"Authorization": token})


def createWallet(wallet, token):
    return requests.post(f"{BASE_URL}/api/wallet/", data=wallet, headers={"Authorization": token})


def getWallets(token):
    return requests.get(f"{BASE_URL}/api/wallet/", headers={"Authorization": token})


def createAsset(asset, token):
    return requests.post(f"{BASE_URL}/api/asset/", data=asset, headers={"Authorization": token})


def getAssets(token):
    return requests.get(f"{BASE_URL}/api/asset/", headers={"Authorization": token})


def makeTransaction(transaction, token):
    return requests.post(f"{BASE_URL}/api/transaction/", data=transaction, headers={"Authorization": token})


def getTransactions(token):
    return requests.get(f"{BASE_URL}/api/transaction/", headers={"Authorization": token})


# python -m pip install requests
def main():
    # print(createUser("sender", "sender", "sender", "", "51197033"))
    # print(createUser("receiver", "receiver", "receiver", "", "66280034"))

    token = getToken("sender", "sender").json()
    token = f"Token {token['token']}"
    # print(getUserInfo(token).json())

    # currencies = [
    #     {"code": "HKD", "name": "Hong Kong Dollar"},
    #     {"code": "USD", "name": "US Dollar"},
    #     {"code": "EHKD", "name": "E Hong Kong Dollar"}
    # ]
    # for currency in currencies:
    #     print(createCurrency(currency, token).json())
    # print(getCurrencies(token).json())

    # conversions = [
    #     {"fromCurrency": "HKD", "toCurrency": "USD", "rate": 1/8},
    #     {"fromCurrency": "HKD", "toCurrency": "EHKD", "rate": 1/10},
    #     {"fromCurrency": "USD", "toCurrency": "HKD", "rate": 8},
    #     {"fromCurrency": "USD", "toCurrency": "EHKD", "rate": 8/10},
    #     {"fromCurrency": "EHKD", "toCurrency": "HKD", "rate": 10},
    #     {"fromCurrency": "EHKD", "toCurrency": "USD", "rate": 10/8},
    # ]
    # for conversion in conversions:
    #     print(createConversion(conversion, token).json())
    # print(getConversions(token).json())

    # wallets = [
    #     {"category": "P"},
    # {"category": "S"},
    # {"category": "O"},
    # ]
    # for wallet in wallets:
    #     res = createWallet(json.dumps(wallet), token).json()
    #     print(res)
    #     currency = "HKD"
    #     asset = {"wallet": res['address'], "currency": currency,
    #              "amount": 0}
    #     createAsset(asset, token)
    #     for currency in ["USD", "EHKD"]:
    #         asset = {"wallet": res['address'], "currency": currency,
    #                  "amount": 0}
    #         createAsset(asset, token)

    # wallets = getWallets(token).json()
    # print(wallets)
    # print(getAssets(token).json())

    transactions = [
        {"fromWallet": "0d55fcfb4be1425d95bee4f614cf9f97", "toWallet": "b004364f7825475fb908995c39f987df",
            "currency": "HKD", "amount": 20, "transactionType": "p2p"},
        # {"fromWallet": wallets[0]["address"], "toWallet": wallets[1]["address"],
        #     "currency": "HKD", "amount": 300, "transactionType": "p2p"}
    ]
    for transaction in transactions:
        makeTransaction(json.dumps(transaction), token)
    print(getTransactions(token).json())
    print(getAssets(token).json())


main()

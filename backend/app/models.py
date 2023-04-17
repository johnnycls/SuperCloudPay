from django.db import models
import uuid


class Currency(models.Model):
    code = models.CharField(max_length=20, primary_key=True)
    name = models.CharField(max_length=100)
    convert = models.ManyToManyField("self", through="Conversion")

    def __str__(self) -> str:
        return self.code


class Conversion(models.Model):
    fromCurrency = models.ForeignKey(
        Currency, related_name="fromCurrency", on_delete=models.CASCADE
    )
    toCurrency = models.ForeignKey(
        Currency, related_name="toCurrency", on_delete=models.CASCADE
    )
    rate = models.FloatField()


class Wallet(models.Model):
    categoryChoices = [
        ("P", "Personal Wallet"),
        ("S", "Shared Wallet"),
        ("O", "Organization Wallet"),
    ]
    address = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False)
    category = models.CharField(max_length=1, choices=categoryChoices)
    currency = models.ManyToManyField(Currency, through="Asset")
    # bankAccount = models.ManyToManyField()

    def __str__(self) -> str:
        return self.address


class Asset(models.Model):
    wallet = models.ForeignKey(Wallet, on_delete=models.CASCADE)
    currency = models.ForeignKey(Currency, on_delete=models.CASCADE)
    amount = models.FloatField()


class Transaction(models.Model):
    typeChoices = [("bill", "bill"), ("p2p", "p2p"), ("topup", "topup")]

    fromWallet = models.ForeignKey(
        Wallet, related_name="transactionFromWallet", on_delete=models.CASCADE
    )
    toWallet = models.ForeignKey(
        Wallet, related_name="transactionToWallet", on_delete=models.CASCADE
    )
    currency = models.ForeignKey(Currency, on_delete=models.CASCADE)
    amount = models.FloatField()
    transactionType = models.CharField(max_length=5, choices=typeChoices)
    datetime = models.DateTimeField(auto_now_add=True)


class Condition(models.Model):
    fromWallet = models.ForeignKey(
        Wallet, related_name="conditionFromWallet", on_delete=models.CASCADE
    )
    toWallet = models.ForeignKey(
        Wallet, related_name="conditionToWallet", on_delete=models.CASCADE
    )
    currency = models.ForeignKey(Currency, on_delete=models.CASCADE)
    amount = models.FloatField()
    beforeDate = models.DateTimeField()


class Promise(models.Model):
    fromWallet = models.ForeignKey(
        Wallet, related_name="promiseFromWallet", on_delete=models.CASCADE
    )
    toWallet = models.ForeignKey(
        Wallet, related_name="promiseToWallet", on_delete=models.CASCADE
    )
    currency = models.ForeignKey(Currency, on_delete=models.CASCADE)
    amount = models.FloatField()
    datetime = models.DateTimeField()
    condition = models.ManyToManyField(Condition)

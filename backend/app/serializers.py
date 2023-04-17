from rest_framework import serializers
from .models import (
    Currency,
    Conversion,
    Wallet,
    Asset,
    Transaction,
    Condition,
    Promise,
)


class CurrencySerializer(serializers.ModelSerializer):
    class Meta:
        model = Currency
        fields = ["code", "name"]


class ConversionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conversion
        fields = ["fromCurrency", "toCurrency", "rate"]


class WalletSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wallet
        fields = ["address", "paymentCode", "category", "currency"]


class AssetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Asset
        fields = ["wallet", "currency", "amount"]


class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = [
            "fromWallet",
            "toWallet",
            "currency",
            "amount",
            "transactionType",
            "datetime",
        ]


class ConditionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Condition
        fields = ["fromWallet", "toWallet", "currency", "amount", "beforeDate"]


class PromiseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Promise
        fields = [
            "fromWallet",
            "toWallet",
            "currency",
            "amount",
            "datetime",
            "condition",
        ]


class WalletSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wallet
        fields = ["address", "category", "currency"]

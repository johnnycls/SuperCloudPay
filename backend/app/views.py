import json
from rest_framework.response import Response
from rest_framework import generics, status
from rest_framework.views import APIView
from .models import (
    Currency,
    Conversion,
    Wallet,
    Asset,
    Transaction,
    Condition,
    Promise,
)
from .serializers import (
    CurrencySerializer,
    ConversionSerializer,
    WalletSerializer,
    AssetSerializer,
    TransactionSerializer,
    ConditionSerializer,
    PromiseSerializer,
)
from user.models import (
    CustomUser
)
from user.serializers import (
    CustomUserSerializer
)


class CurrencyListCreateView(generics.ListCreateAPIView):
    queryset = Currency.objects.all()
    serializer_class = CurrencySerializer


class CurrencyRetreiveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Currency.objects.all()
    serializer_class = CurrencySerializer


class ConversionListCreateView(generics.ListCreateAPIView):
    queryset = Conversion.objects.all()
    serializer_class = ConversionSerializer


class ConversionRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Conversion.objects.all()
    serializer_class = ConversionSerializer


class WalletListCreateView(APIView):
    def post(self, request):
        wallet = json.loads(request.body)
        walletSerializer = WalletSerializer(data=wallet)
        if walletSerializer.is_valid():
            wallet = walletSerializer.save()
        else:
            return Response(walletSerializer.errors, status=status.HTTP_400_BAD_REQUEST)

        user = CustomUser.objects.get(pk=request.user.id)
        user.wallets.add(wallet.address)
        user.save()

        return Response(walletSerializer.data)

    def get(self, request):
        wallets = Wallet.objects.all()
        serializer = WalletSerializer(wallets, many=True)
        return Response(serializer.data)


class WalletRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Wallet.objects.all()
    serializer_class = WalletSerializer


class AssetListCreateView(generics.ListCreateAPIView):
    queryset = Asset.objects.all()
    serializer_class = AssetSerializer


class AssetRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Asset.objects.all()
    serializer_class = AssetSerializer


class TransactionListCreateView(APIView):
    def post(self, request):
        requestBody = json.loads(request.body)

        transactionSerializer = TransactionSerializer(data=requestBody)
        if transactionSerializer.is_valid():
            transactionSerializer.save()
        else:
            return Response(transactionSerializer.errors, status=status.HTTP_400_BAD_REQUEST)

        fromAsset = Asset.objects.get(
            wallet=requestBody["fromWallet"], currency=requestBody["currency"])
        fromAsset.amount = fromAsset.amount - requestBody["amount"]
        fromAsset.save()

        toAsset = Asset.objects.get(
            wallet=requestBody["toWallet"], currency=requestBody["currency"])
        toAsset.amount = toAsset.amount + requestBody["amount"]
        toAsset.save()

        return Response(transactionSerializer.data)

    def get(self, request):
        transactions = Transaction.objects.all()
        serializer = TransactionSerializer(transactions, many=True)
        return Response(serializer.data)


class TransactionRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer


class ConditionListCreateView(generics.ListCreateAPIView):
    queryset = Condition.objects.all()
    serializer_class = ConditionSerializer


class ConditionRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Condition.objects.all()
    serializer_class = ConditionSerializer


class PromiseListCreateView(generics.ListCreateAPIView):
    queryset = Promise.objects.all()
    serializer_class = PromiseSerializer


class PromiseRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Promise.objects.all()
    serializer_class = PromiseSerializer

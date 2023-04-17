from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from app import views


urlpatterns = [
    path("currency/", views.CurrencyListCreateView.as_view()),
    path("currency/<str:pk>/", views.CurrencyRetreiveUpdateDestroyView.as_view()),
    path("conversion/", views.ConversionListCreateView.as_view()),
    path("conversion/<int:pk>/", views.ConversionRetrieveUpdateDestroyView.as_view()),
    path("wallet/", views.WalletListCreateView.as_view()),
    path("wallet/<int:pk>/", views.WalletRetrieveUpdateDestroyView.as_view()),
    path("asset/", views.AssetListCreateView.as_view()),
    path("asset/<int:pk>/", views.AssetRetrieveUpdateDestroyView.as_view()),
    path("transaction/", views.TransactionListCreateView.as_view()),
    path("transaction/<int:pk>/",
         views.TransactionRetrieveUpdateDestroyView.as_view()),
    path("condition/", views.ConditionListCreateView.as_view()),
    path("condition/<int:pk>/", views.ConditionRetrieveUpdateDestroyView.as_view()),
    path("promise/", views.PromiseListCreateView.as_view()),
    path("promise/<int:pk>/", views.PromiseRetrieveUpdateDestroyView.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)

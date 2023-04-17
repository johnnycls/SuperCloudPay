from django.urls import path
from rest_framework import urls
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework.authtoken import views as tokenViews
from user import views as userViews


urlpatterns = [
	path('create/', userViews.CreatingUserView.as_view()),
	path('reset/', userViews.ResetPasswordView.as_view()),
	path('login/', tokenViews.obtain_auth_token),
	path('retrieve/', userViews.RetrieveUserView.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
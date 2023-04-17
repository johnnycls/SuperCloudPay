from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import CustomUser
from .serializers import CustomUserSerializer
import json


class CreatingUserView(APIView):
    def post(self, request):
        requestBody = json.loads(request.body)
        customUser = CustomUser.objects.create_user(
            username=requestBody["username"],
            password=requestBody["password"],
            first_name=requestBody["first_name"],
            last_name=requestBody["last_name"],
            phone=requestBody["phone"],
        )

        customUser.save()
        return Response(status=status.HTTP_201_CREATED)


class ResetPasswordView(APIView):
    def post(self, request):
        requestBody = json.loads(request.body)
        customUser = CustomUser.objects.get(username=requestBody["username"])
        customUser.set_password(request.body.password)

        customUser.save()
        return Response(status=status.HTTP_201_CREATED)


class RetrieveUserView(APIView):
    def get(self, request):
        user = request.user
        serializer = CustomUserSerializer(user)
        return Response(serializer.data)

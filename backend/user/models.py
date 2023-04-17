from django.db import models
import uuid
from django.contrib.auth.models import AbstractUser
from django.dispatch import receiver
from django.conf import settings
from django.db.models.signals import post_save
from rest_framework.authtoken.models import Token
from app.models import Wallet


class CustomUser(AbstractUser):
    # id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    phone = models.CharField(max_length=15)
    wallets = models.ManyToManyField(Wallet, related_name="wallets")
    contacts = models.ManyToManyField(Wallet, related_name="contacts")

    def __str__(self):
        return self.username


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)

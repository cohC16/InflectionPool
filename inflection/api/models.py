
from django.db import models

class InflectionUser(models.Model):
    id = models.IntegerField(primary_key=True, )
    username = models.CharField(max_length=20, unique=True)
    nickname = models.CharField(max_length=20)
    email = models.EmailField(max_length=250, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
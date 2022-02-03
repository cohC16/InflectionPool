from .serializers import InflectionUserSerializer
from django.shortcuts import render
from rest_framework import generics

from .models import InflectionUser

class InflectionUserView(generics.ListAPIView):
    queryset = InflectionUser.objects.all()
    serializer_class = InflectionUserSerializer


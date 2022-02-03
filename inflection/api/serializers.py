from rest_framework import serializers
from .models import InflectionUser

class InflectionUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = InflectionUser 
        fields = ('id','username','nickname','email','created_at')
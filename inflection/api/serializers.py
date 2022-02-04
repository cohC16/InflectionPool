from rest_framework import serializers
from .models import InflectionUser

class InflectionUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = InflectionUser 
        fields = ('userid','username','password','nickname','email','created_at')

class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = InflectionUser
        fields = ('userid','username','password','nickname','email')
 

"""
add check password decorator

Create Journal model to include dicts
    Short term:
    userid (fk), entryid, date, body, tag1, tag2, tag3, tag1val, tag2val, tag3val

    ideally:
    userid (foreign key), entryid, date, body, tags - [emotion:value, emotion:value], 

Create User stats model
    userid (fk),  stats - {emotion, [{entryid (fk), value, date}]
    autofilled from journal (update? or in db?)
sessions?


get user/pass
Create journal
get journal list
delete journal
update journal
"""

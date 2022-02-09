from rest_framework import serializers
from .models import InflectionUser, JournalEntry

class InflectionUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = InflectionUser 
        fields = ('_id','username','password','nickname','email','created_at')

class UserLookupSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=22)
    password = serializers.CharField(max_length=22)

class EntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = JournalEntry 
        fields = ('_id','entry', 'userid', 'entryname', 'username', 'created_at', 'emotion1', 'emotionvalue1', 'emotion2', 'emotionvalue2', 'emotion3', 'emotionvalue3')

class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = InflectionUser
        fields = ('_id','username','password','nickname','email')

class CreateEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = JournalEntry
        fields = ('_id', 'entry','userid', 'entryname', 'username', 'created_at', 'emotion1', 'emotionvalue1', 'emotion2', 'emotionvalue2', 'emotion3', 'emotionvalue3')
 

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

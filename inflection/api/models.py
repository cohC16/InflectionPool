
from operator import mod
from pyexpat import model
from django.db import models

class InflectionUser(models.Model):
    userid = models.IntegerField(primary_key=True)
    username = models.CharField(max_length=20, unique=True)
    password = models.CharField(max_length=20, unique=True)
    nickname = models.CharField(max_length=20)
    email = models.EmailField(max_length=250, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

# id, userid (fk), date, body, tag1, tag2, tag3, tag1val, tag2val, tag3val
#  'id', 'userid', 'entryname', 'username', 'created_at', 'emotion1', 'emotionvalue1', 'emotion2', 'emotionvalue2', 'emotion3', 'emotionvalue3'

class JournalEntry(models.Model):
    journalid = models.AutoField(primary_key=True)
    userid = models.ForeignKey(InflectionUser, on_delete=models.CASCADE)
    entryname = models.CharField(max_length=20)
    username = models.CharField(max_length=20, unique=True)
    created_at = models.DateField(auto_now_add=True)
    emotion1 = models.CharField(max_length=20)
    emotion2 = models.CharField(max_length=20)
    emotion3 = models.CharField(max_length=20)
    emotionvalue1 = models.CharField(max_length=1)
    emotionvalue2 = models.CharField(max_length=1)
    emotionvalue3 = models.CharField(max_length=1)

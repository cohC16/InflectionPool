
from operator import mod
from pyexpat import model
from django.db import models
import random


def increment_inflection_user():
    last_user = InflectionUser.objects.all().order_by('userid').last()
    if not last_user:
        return 10000 + random.randint(1,100)
    return last_user.userid + random.randint(1,100)

def increment_journal_entry():
    last_entry = JournalEntry.objects.filter(userid='userid').order_by('userid').last()
    if not last_entry:
        return 1
    return last_entry + 1

class InflectionUser(models.Model):
    userid = models.AutoField(default=increment_inflection_user, primary_key=True, db_index=True, unique=True)
    username = models.CharField(max_length=20, unique=True)
    password = models.CharField(max_length=20)
    nickname = models.CharField(max_length=20)
    email = models.EmailField(max_length=250, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

# id, userid (fk), date, body, tag1, tag2, tag3, tag1val, tag2val, tag3val
#  'id', 'userid', 'entryname', 'username', 'created_at', 'emotion1', 'emotionvalue1', 'emotion2', 'emotionvalue2', 'emotion3', 'emotionvalue3'

class JournalEntry(models.Model):
    journalid = models.AutoField(primary_key=True, db_index=True, unique=True)
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

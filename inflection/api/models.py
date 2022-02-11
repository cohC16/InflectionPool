
from operator import mod
from pyexpat import model
from django.db import models
import random


def increment_inflection_user():
    last_user = InflectionUser.objects.all().order_by('_id').last()
    if not last_user:
        return 10000 + random.randint(1,100)
    return last_user._id + random.randint(1,100)

def increment_journal_entry():
    last_entry = JournalEntry.objects.all().order_by('_id').last()
    if not last_entry:
        return 100000 + random.randint(1,200)
    return last_entry._id + random.randint(1,200)

class InflectionUser(models.Model):
    _id = models.AutoField(default=increment_inflection_user, primary_key=True, db_index=True, unique=True)
    username = models.CharField(max_length=20, unique=True)
    password = models.CharField(max_length=22)
    nickname = models.CharField(max_length=20)
    email = models.EmailField(max_length=250, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)


class JournalEntry(models.Model):
    _id = models.AutoField(default=increment_journal_entry, primary_key=True, db_index=True, unique=True)
    # userid = models.ForeignKey(InflectionUser, on_delete=models.CASCADE)
    userid = models.IntegerField()
    entryname = models.CharField(max_length=20)
    entry = models.TextField()
    username = models.CharField(max_length=20)
    created_at = models.DateField(auto_now_add=True)
    emotion1 = models.CharField(max_length=20, blank=True, default='')
    emotion2 = models.CharField(max_length=20, blank=True, default='')
    emotion3 = models.CharField(max_length=20, blank=True, default='')
    emotionvalue1 = models.IntegerField(blank=True,null=True)
    emotionvalue2 = models.IntegerField(blank=True,null=True)
    emotionvalue3 = models.IntegerField(blank=True,null=True)

    
# id, userid (fk), date, body, tag1, tag2, tag3, tag1val, tag2val, tag3val
#  '_id', 'userid', 'entryname', 'username', 'created_at', 'emotion1', 'emotionvalue1', 'emotion2', 'emotionvalue2', 'emotion3', 'emotionvalue3'

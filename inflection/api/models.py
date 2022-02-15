
from operator import mod
from pyexpat import model
from django.db import models
import random






class InflectionUser(models.Model):
    def increment_inflection_user(self, *args, **kwargs):
        last_user = InflectionUser.objects.all().order_by('_id').last()
        if not last_user:
            return 10000 + random.randint(1,100)
        return int(last_user._id) + random.randint(1,100)    

    _id = models.AutoField(default=increment_inflection_user, primary_key=True, db_index=True, unique=True)
    username = models.CharField(max_length=20, unique=True)
    password = models.CharField(max_length=22)
    nickname = models.CharField(max_length=20)
    email = models.EmailField(max_length=250, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)


class JournalEntry(models.Model):
    def increment_journal_entry(self, *args, **kwargs):
        last_entry = JournalEntry.objects.all().order_by('entry_id').last()
        if not last_entry:
            return 100000 + random.randint(1,200)
        return int(last_entry.entry_id) + random.randint(1,200)   
        
    entry_id = models.AutoField(primary_key=True, db_index=True, unique=True)
    # userid = models.ForeignKey(InflectionUser, on_delete=models.CASCADE)
    userid = models.IntegerField()
    entryname = models.CharField(max_length=20)
    entry = models.TextField()
    username = models.CharField(max_length=20)
    created_at = models.DateField(auto_now_add=True)
    Angry = models.IntegerField(blank=True,null=True)
    Ashamed = models.IntegerField(blank=True,null=True)
    Betrayed = models.IntegerField(blank=True,null=True)
    Bitter = models.IntegerField(blank=True,null=True)
    Brain_Foggy = models.IntegerField(blank=True,null=True)
    Confused = models.IntegerField(blank=True,null=True)
    Content = models.IntegerField(blank=True,null=True)
    Curious = models.IntegerField(blank=True,null=True)
    Disappointed = models.IntegerField(blank=True,null=True)
    Disgusted = models.IntegerField(blank=True,null=True)
    Dissociated = models.IntegerField(blank=True,null=True)
    Embarrassed = models.IntegerField(blank=True,null=True)
    Excited = models.IntegerField(blank=True,null=True)
    Focused = models.IntegerField(blank=True,null=True)
    Frustrated = models.IntegerField(blank=True,null=True)
    Grateful = models.IntegerField(blank=True,null=True)
    Guilty = models.IntegerField(blank=True,null=True)
    Happy = models.IntegerField(blank=True,null=True)
    Hopeful = models.IntegerField(blank=True,null=True)
    Hurt = models.IntegerField(blank=True,null=True)
    Hysterical = models.IntegerField(blank=True,null=True)
    Incredulous = models.IntegerField(blank=True,null=True)
    Jealous = models.IntegerField(blank=True,null=True)
    Lonely = models.IntegerField(blank=True,null=True)
    Moody = models.IntegerField(blank=True,null=True)
    Nauseated = models.IntegerField(blank=True,null=True)
    Numb = models.IntegerField(blank=True,null=True)
    Overwhelmed = models.IntegerField(blank=True,null=True)
    Panicked = models.IntegerField(blank=True,null=True)
    Proud = models.IntegerField(blank=True,null=True)
    Rattled = models.IntegerField(blank=True,null=True)
    Relieved = models.IntegerField(blank=True,null=True)
    Sad = models.IntegerField(blank=True,null=True)
    Scared = models.IntegerField(blank=True,null=True)
    Stressed = models.IntegerField(blank=True,null=True)
    Stuck = models.IntegerField(blank=True,null=True)
    Surprised = models.IntegerField(blank=True,null=True)
    Tired = models.IntegerField(blank=True,null=True)
    Uneasy = models.IntegerField(blank=True,null=True)
    Uncomfortable = models.IntegerField(blank=True,null=True)
    Upset = models.IntegerField(blank=True,null=True)
    Vulnerable = models.IntegerField(blank=True,null=True)

    # emotion1 = models.CharField(max_length=20, blank=True, default='')
    # emotion2 = models.CharField(max_length=20, blank=True, default='')
    # emotion3 = models.CharField(max_length=20, blank=True, default='')
    # emotionvalue1 = models.IntegerField(blank=True,null=True)
    # emotionvalue2 = models.IntegerField(blank=True,null=True)
    # emotionvalue3 = models.IntegerField(blank=True,null=True)




    
# id, userid (fk), date, body, tag1, tag2, tag3, tag1val, tag2val, tag3val
#  '_id', 'userid', 'entryname', 'username', 'created_at', 'emotion1', 'emotionvalue1', 'emotion2', 'emotionvalue2', 'emotion3', 'emotionvalue3'

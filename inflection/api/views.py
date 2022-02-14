from os import stat
from .serializers import EntrySerializer, EntryViewbyUserSerializer, InflectionUserSerializer, CreateUserSerializer, CreateEntrySerializer, ReturnEntrySerializer, UserLookupSerializer
from .models import InflectionUser, JournalEntry
from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response 
from rest_framework.request import Request



class InflectionUserView(generics.ListAPIView):
    queryset = InflectionUser.objects.all()
    serializer_class = InflectionUserSerializer

class InflectionUserLookup(APIView):
    serializer_class = UserLookupSerializer

    def post(self, request, format=None):
        serializer =  self.serializer_class(data=request.data)
        userinput =  request.GET.get('username')
        userpassword =  request.GET.get('password')
        if serializer.is_valid():
            username = serializer.data.get('username')
            password = serializer.data.get('password')
            query = InflectionUser.objects.filter(username=username, password=password).last()
            if not query:
                return (Response({"Message":"Incorrect Username/Password"}, status=status.HTTP_400_BAD_REQUEST))
            else:
                return (Response({"_id":query._id, "nickname":query.nickname
                }, status=status.HTTP_202_ACCEPTED))

        return (Response({"Message":"Invalid serializer"}, status=status.HTTP_400_BAD_REQUEST))



class EntryView(generics.ListAPIView):
    queryset = JournalEntry.objects.all()
    serializer_class = EntrySerializer

class EntryViewbyUser(APIView):
    serializer_class = EntryViewbyUserSerializer
    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        serializer =  self.serializer_class(data=request.data)
        if serializer.is_valid():
            userid = serializer.data.get('_id')
            username = serializer.data.get('username')
            queryset =  JournalEntry.objects.filter(username=username, userid=userid).all()
            if not queryset.exists():
                return (Response({"Message":"No entries found"}, status=status.HTTP_204_NO_CONTENT))
            else:
                entry_array = []
                for entry in queryset:
                    entry_array.append(((ReturnEntrySerializer(entry).data)))
                return (Response(entry_array, status=status.HTTP_200_OK))

        return (Response({"Message":"Invalid serializer"}, status=status.HTTP_400_BAD_REQUEST))

class CreateEntryView(APIView):
    
    serializer_class = CreateEntrySerializer
    
    def post(self, request, format=None):
        from .models import JournalEntry
        # if not self.request.session.exists(self.request.session.session_key):
        #     self.request.session.create()
        #  '_id', 'userid', 'entryname', 'username', 'created_at', 'emotion1', 'emotionvalue1', 'emotion2', 'emotionvalue2', 'emotion3', 'emotionvalue3'
        serializer =  self.serializer_class(data=request.data)
        if serializer.is_valid():
            _id = serializer.data.get('_id')
            userid = serializer.data.get('userid')
            entry = serializer.data.get('entry')
            entryname = serializer.data.get('entryname')
            username = serializer.data.get('username')
            Angry=request.data["Angry"]
            Ashamed=request.data["Ashamed"]
            Betrayed=request.data["Betrayed"]
            Bitter=request.data["Bitter"]
            Brain_Foggy=request.data["Brain_Foggy"]
            Confused=request.data["Confused"]
            Content=request.data["Content"]
            Curious=request.data["Curious"]
            Disappointed=request.data["Disappointed"]
            Disgusted=request.data["Disgusted"]
            Dissociated=request.data["Dissociated"]
            Embarrassed=request.data["Embarrassed"]
            Excited=request.data["Excited"]
            Focused=request.data["Focused"]
            Frustrated=request.data["Frustrated"]
            Grateful=request.data["Grateful"]
            Guilty=request.data["Guilty"]
            Happy=request.data["Happy"]
            Hopeful=request.data["Hopeful"]
            Hurt=request.data["Hurt"]
            Hysterical=request.data["Hysterical"]
            Incredulous=request.data["Incredulous"]
            Jealous=request.data["Jealous"]
            Lonely=request.data["Lonely"]
            Moody=request.data["Moody"]
            Nauseated=request.data["Nauseated"]
            Numb=request.data["Numb"]
            Overwhelmed=request.data["Overwhelmed"]
            Panicked=request.data["Panicked"]
            Proud=request.data["Proud"]
            Rattled=request.data["Rattled"]
            Relieved=request.data["Relieved"]
            Sad=request.data["Sad"]
            Scared=request.data["Scared"]
            Stressed=request.data["Stressed"]
            Stuck=request.data["Stuck"]
            Surprised=request.data["Surprised"]
            Tired=request.data["Tired"]
            Uneasy=request.data["Uneasy"]
            Uncomfortable=request.data["Uncomfortable"]
            Upset=request.data["Upset"]
            Vulnerable=request.data["Vulnerable"]

            queryset = JournalEntry.objects.filter(username=username).last()
            # if queryset.exists():
            #     # inflectionUser = queryset[0]
            #     if queryset.userid != userid:
            #         return (Response({"Message":"User does not exists"}, status=status.HTTP_400_BAD_REQUEST))
            # else:
            JournalEntry = JournalEntry(userid=userid, entryname=entryname, entry=entry, username=username, Angry=Angry, Ashamed=Ashamed,Betrayed=Betrayed,Bitter=Bitter,Brain_Foggy=Brain_Foggy,Confused=Confused,Content=Content,Curious=Curious,Disappointed=Disappointed,Disgusted=Disgusted,Dissociated=Dissociated,Embarrassed=Embarrassed,Excited=Excited,Focused=Focused,Frustrated=Frustrated,Grateful=Grateful,Guilty=Guilty,Happy=Happy,Hopeful=Hopeful,Hurt=Hurt,Hysterical=Hysterical,Incredulous=Incredulous,Jealous=Jealous,Lonely=Lonely,Moody=Moody,Nauseated=Nauseated,Numb=Numb,Overwhelmed=Overwhelmed,Panicked=Panicked,Proud=Proud,Rattled=Rattled,Relieved=Relieved,Sad=Sad,Scared=Scared,Stressed=Stressed,Stuck=Stuck,Surprised=Surprised,Tired=Tired,Uneasy=Uneasy,Uncomfortable=Uncomfortable,Upset=Upset,Vulnerable=Vulnerable)
            JournalEntry.save()
            return (Response(ReturnEntrySerializer(JournalEntry).data, status=status.HTTP_201_CREATED))

        return (Response({"Message":"Invalid serializer"}, status=status.HTTP_400_BAD_REQUEST))

 
class CreateInflectionUserView(APIView):
    serializer_class = CreateUserSerializer
    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        serializer =  self.serializer_class(data=request.data)
        # if True:
        #     userid = request.data.get('userid')
        #     username = request.data.get('username')
        #     nickname = request.data.get('nickname')
        #     email = request.data.get('email')
        #     password = request.data.get('password')
        if serializer.is_valid():
            _id = serializer.data.get('_id')
            username = serializer.data.get('username')
            nickname = serializer.data.get('nickname')
            email = serializer.data.get('email')
            password = serializer.data.get('password')
            queryset =  InflectionUser.objects.filter(username=username)
            if queryset.exists():
                inflectionUser = queryset[0]
                return (Response({"Message":"username already exists"}, status=status.HTTP_400_BAD_REQUEST))
            else:
                inflectionUser = InflectionUser(_id=_id, username=username, nickname=nickname, email=email, password=password)
                inflectionUser.save()
                return (Response(InflectionUserSerializer(inflectionUser).data, status=status.HTTP_201_CREATED))

        return (Response({"Message":"Invalid serializer"}, status=status.HTTP_400_BAD_REQUEST))

# class CreateEntryView(APIView):
    
#     serializer_class = CreateEntrySerializer
    
#     def post(self, request, format=None):
#         from .models import JournalEntry
#         # if not self.request.session.exists(self.request.session.session_key):
#         #     self.request.session.create()
#         #  '_id', 'userid', 'entryname', 'username', 'created_at', 'emotion1', 'emotionvalue1', 'emotion2', 'emotionvalue2', 'emotion3', 'emotionvalue3'
#         serializer =  self.serializer_class(data=request.data)
#         if serializer.is_valid():
#             # _id = serializer.data.get('_id')
#             userid = serializer.data.get('userid')
#             entry = serializer.data.get('entry')
#             entryname = serializer.data.get('entryname')
#             username = serializer.data.get('username')
#             Angry=serializer.data.get('Angry')
#             Ashamed=serializer.data.get('Ashamed')
#             Betrayed=serializer.data.get('Betrayed')
#             Bitter=serializer.data.get('Bitter')
#             Brain_Foggy=serializer.data.get('Brain_Foggy')
#             Confused=serializer.data.get('Confused')
#             Content=serializer.data.get('Content')
#             Curious=serializer.data.get('Curious')
#             Disappointed=serializer.data.get('Disappointed')
#             Disgusted=serializer.data.get('Disgusted')
#             Dissociated=serializer.data.get('Dissociated')
#             Embarrassed=serializer.data.get('Embarrassed')
#             Excited=serializer.data.get('Excited')
#             Focused=serializer.data.get('Focused')
#             Frustrated=serializer.data.get('Frustrated')
#             Grateful=serializer.data.get('Grateful')
#             Guilty=serializer.data.get('Guilty')
#             Happy=serializer.data.get('Happy')
#             Hopeful=serializer.data.get('Hopeful')
#             Hurt=serializer.data.get('Hurt')
#             Hysterical=serializer.data.get('Hysterical')
#             Incredulous=serializer.data.get('Incredulous')
#             Jealous=serializer.data.get('Jealous')
#             Lonely=serializer.data.get('Lonely')
#             Moody=serializer.data.get('Moody')
#             Nauseated=serializer.data.get('Nauseated')
#             Numb=serializer.data.get('Numb')
#             Overwhelmed=serializer.data.get('Overwhelmed')
#             Panicked=serializer.data.get('Panicked')
#             Proud=serializer.data.get('Proud')
#             Rattled=serializer.data.get('Rattled')
#             Relieved=serializer.data.get('Relieved')
#             Sad=serializer.data.get('Sad')
#             Scared=serializer.data.get('Scared')
#             Stressed=serializer.data.get('Stressed')
#             Stuck=serializer.data.get('Stuck')
#             Surprised=serializer.data.get('Surprised')
#             Tired=serializer.data.get('Tired')
#             Uneasy=serializer.data.get('Uneasy')
#             Uncomfortable=serializer.data.get('Uncomfortable')
#             Upset=serializer.data.get('Upset')
#             Vulnerable=serializer.data.get('Vulnerable')
#             # emotion1 = serializer.data.get('emotion1')
#             # emotion2 = serializer.data.get('emotion2')
#             # emotion3 = serializer.data.get('emotion3')
#             # emotionvalue1 = serializer.data.get('emotionvalue1')
#             # emotionvalue2 = serializer.data.get('emotionvalue2')
#             # emotionvalue3 = serializer.data.get('emotionvalue3')
#             queryset = JournalEntry.objects.filter(username=username).last()
#             # if queryset.exists():
#             #     # inflectionUser = queryset[0]
#             #     if queryset.userid != userid:
#             #         return (Response({"Message":"User does not exists"}, status=status.HTTP_400_BAD_REQUEST))
#             # else:
#             JournalEntry = JournalEntry(userid=userid, entryname=entryname, entry=entry, username=username, Angry=Angry, Ashamed=Ashamed,Betrayed=Betrayed,Bitter=Bitter,Brain_Foggy=Brain_Foggy,Confused=Confused,Content=Content,Curious=Curious,Disappointed=Disappointed,Disgusted=Disgusted,Dissociated=Dissociated,Embarrassed=Embarrassed,Excited=Excited,Focused=Focused,Frustrated=Frustrated,Grateful=Grateful,Guilty=Guilty,Happy=Happy,Hopeful=Hopeful,Hurt=Hurt,Hysterical=Hysterical,Incredulous=Incredulous,Jealous=Jealous,Lonely=Lonely,Moody=Moody,Nauseated=Nauseated,Numb=Numb,Overwhelmed=Overwhelmed,Panicked=Panicked,Proud=Proud,Rattled=Rattled,Relieved=Relieved,Sad=Sad,Scared=Scared,Stressed=Stressed,Stuck=Stuck,Surprised=Surprised,Tired=Tired,Uneasy=Uneasy,Uncomfortable=Uncomfortable,Upset=Upset,Vulnerable=Vulnerable)
#             # emotion1=emotion1, emotion2=emotion2,emotion3=emotion3,emotionvalue1=emotionvalue1,emotionvalue2=emotionvalue2,emotionvalue3=emotionvalue3,


#             JournalEntry.save()
#             return (Response(CreateEntrySerializer(JournalEntry).data, status=status.HTTP_201_CREATED))

#         return (Response({"Message":"Invalid serializer"}, status=status.HTTP_400_BAD_REQUEST))



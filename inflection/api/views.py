from os import stat
from .serializers import EntrySerializer, InflectionUserSerializer, CreateUserSerializer, CreateEntrySerializer, UserLookupSerializer
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
                return (Response({"_id":query._id}, status=status.HTTP_202_ACCEPTED))

        return (Response({"Message":"Invalid serializer"}, status=status.HTTP_400_BAD_REQUEST))



class EntryView(generics.ListAPIView):
    queryset = JournalEntry.objects.all()
    serializer_class = EntrySerializer


 
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
            emotion1 = serializer.data.get('emotion1')
            emotion2 = serializer.data.get('emotion2')
            emotion3 = serializer.data.get('emotion3')
            emotionvalue1 = serializer.data.get('emotionvalue1')
            emotionvalue2 = serializer.data.get('emotionvalue2')
            emotionvalue3 = serializer.data.get('emotionvalue3')
            queryset = JournalEntry.objects.filter(username=username).last()
            # if queryset.exists():
            #     # inflectionUser = queryset[0]
            #     if queryset.userid != userid:
            #         return (Response({"Message":"User does not exists"}, status=status.HTTP_400_BAD_REQUEST))
            # else:
            JournalEntry = JournalEntry(_id=_id, userid=userid, entryname=entryname, emotion1=emotion1, emotion2=emotion2,emotion3=emotion3,username=username, emotionvalue1=emotionvalue1,emotionvalue2=emotionvalue2,emotionvalue3=emotionvalue3,entry=entry)
            JournalEntry.save()
            return (Response(CreateEntrySerializer(JournalEntry).data, status=status.HTTP_201_CREATED))

        return (Response({"Message":"Invalid serializer"}, status=status.HTTP_400_BAD_REQUEST))



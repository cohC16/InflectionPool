from os import stat
from .serializers import InflectionUserSerializer, CreateUserSerializer
from .models import InflectionUser 
from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response 


from .models import InflectionUser

class InflectionUserView(generics.ListAPIView):
    queryset = InflectionUser.objects.all()
    serializer_class = InflectionUserSerializer
 
class CreateInflectionUserView(APIView):
    serializer_class = CreateUserSerializer
    
    # 'id', 'userid', 'entryname', 'username', 'created_at', 'emotion1', 'emotionvalue1', 'emotion2', 'emotionvalue2', 'emotion3', 'emotionvalue3'


    # create user
    # fields = ('userid','username','nickname','email','created_at')
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
            userid = serializer.data.get('userid')
            username = serializer.data.get('username')
            nickname = serializer.data.get('nickname')
            email = serializer.data.get('email')
            password = serializer.data.get('password')
            queryset =  InflectionUser.objects.filter(username=username)
            if queryset.exists():
                inflectionUser = queryset[0]
                return (Response({"Message":"username already exists"}, status=status.HTTP_400_BAD_REQUEST))
                pass
            else:
                inflectionUser = InflectionUser(userid=userid, username=username, nickname=nickname, email=email, password=password)
                inflectionUser.save()
                return (Response(InflectionUserSerializer(inflectionUser).data, status=status.HTTP_201_CREATED))

        return (Response({"Message":"Invalid serializer"}, status=status.HTTP_400_BAD_REQUEST))



from django.urls import path
from .views import ViewEntryByID, UpdateEntryView, EntryViewbyUser, InflectionUserLookup, InflectionUserView, CreateEntryView, CreateInflectionUserView, EntryView
urlpatterns = [
    path('users', InflectionUserView.as_view()),
    path('user', InflectionUserLookup.as_view()),
    path('entry/all', EntryView.as_view()),
    path('entry/user/all', EntryViewbyUser.as_view()),
    path('users/create', CreateInflectionUserView.as_view()),
    path('entry/create', CreateEntryView.as_view()),
    path('entrybyid/<str:id>', ViewEntryByID.as_view()),
    path('entry/update', UpdateEntryView.as_view())
]
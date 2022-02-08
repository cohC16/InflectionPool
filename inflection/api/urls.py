from django.urls import path
from .views import InflectionUserView, CreateEntryView, CreateInflectionUserView, EntryView
urlpatterns = [
    path('users', InflectionUserView.as_view()),
    path('entry/all', EntryView.as_view()),
    path('users/create', CreateInflectionUserView.as_view()),
    path('entry/create', CreateEntryView.as_view())
]
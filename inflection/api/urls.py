from django.urls import path
from .views import InflectionUserView, CreateInflectionUserView

urlpatterns = [
    path('users', InflectionUserView.as_view()),
    path('users/create', CreateInflectionUserView.as_view())
]
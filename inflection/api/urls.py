from django.urls import path
from .views import InflectionUserView

urlpatterns = [
    path('users', InflectionUserView.as_view())
]
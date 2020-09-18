from django.urls import path
from . import views

urlpatterns = [
    path('retro-menu/', views.menu_retro, name='retro-menu'),
]
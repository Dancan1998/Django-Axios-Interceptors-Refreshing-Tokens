from django.urls import path
from .views import ListPostView

urlpatterns = [
    path('posts/', ListPostView.as_view()),
]

from django.urls import path
from api import views

urlpatterns = [
    path('primary/',views.Primaryview),
    path('primary/<int:pk>/',views.Primaryview),
    path('social/',views.Socilaview),
    path('social/<int:pk>/',views.Socilaview),
    path('promotion/',views.Promotionviews),
    path('promotion/<int:pk>/',views.Promotionviews),
    path('sent/',views.Sentviews),
    path('sent/<int:pk>/',views.Sentviews),
    path('snooz/',views.Snoozedviews),
    path('snooz/<int:pk>/',views.Snoozedviews),
    path('star/',views.Starviews),
    path('star/<int:pk>/',views.Starviews),
    path('spam/',views.Spamviews),
    path('spam/<int:pk>/',views.Spamviews),
    path('allmails/',views.Allmailsviews),
    path('allmails/<int:pk>/',views.Allmailsviews),
]

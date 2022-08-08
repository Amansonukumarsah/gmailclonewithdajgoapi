from dataclasses import fields
from pyexpat import model
from rest_framework import serializers
from .models import Primary, Promotion,Social,Snoozed,Sent,Spam,Star,Allmails

class PrimarySerializers(serializers.ModelSerializer):
    class Meta:
        model=Primary
        fields=['id','Company','Title','Data']


class SocialSerializers(serializers.ModelSerializer):
    class Meta:
        model=Social
        fields=['id','Company','Title','Data']

    

class PromotionSerializers(serializers.ModelSerializer):
    class Meta:
        model=Promotion
        fields=['id','Company','Title','Data']


class SnoozedSerializers(serializers.ModelSerializer):
    class Meta:
        model=Snoozed
        fields=['id','Company','Title','Data']

class SpamSerializers(serializers.ModelSerializer):
    class Meta:
        model=Spam
        fields=['id','Company','Title','Data']


class StarSerializers(serializers.ModelSerializer):
    class Meta:
        model=Star
        fields=['id','Company','Title','Data']

class SentSerializers(serializers.ModelSerializer):
    class Meta:
        model=Sent
        fields=['id','Company','Title','Data']


class AllmailsSerializers(serializers.ModelSerializer):
    class Meta:
        model=Allmails
        fields=['id','Company','Title','Data']

    
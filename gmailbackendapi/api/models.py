from statistics import mode
from django.db import models

# Create your models here.

class Primary(models.Model):
    id=models.IntegerField(primary_key=True)
    Company=models.CharField(max_length=40)
    Title=models.CharField(max_length=100)
    Data=models.CharField(max_length=10000)


class Social(models.Model):
    id=models.IntegerField(primary_key=True)
    Company=models.CharField(max_length=40)
    Title=models.CharField(max_length=100)
    Data=models.CharField(max_length=10000)

class Promotion(models.Model):
    id=models.IntegerField(primary_key=True)
    Company=models.CharField(max_length=40)
    Title=models.CharField(max_length=100)
    Data=models.CharField(max_length=10000)


class Sent(models.Model):
    id=models.AutoField(primary_key=True)
    Company=models.CharField(max_length=40)
    Title=models.CharField(max_length=100)
    Data=models.CharField(max_length=10000)


class Star(models.Model):
    id=models.IntegerField(primary_key=True)
    Company=models.CharField(max_length=40)
    Title=models.CharField(max_length=100)
    Data=models.CharField(max_length=10000)



class Snoozed(models.Model):
    id=models.AutoField(primary_key=True)
    Company=models.CharField(max_length=40)
    Title=models.CharField(max_length=100)
    Data=models.CharField(max_length=10000)


class Spam(models.Model):
    id=models.IntegerField(primary_key=True)
    Company=models.CharField(max_length=40)
    Title=models.CharField(max_length=100)
    Data=models.CharField(max_length=10000)


class Allmails(models.Model):
    id=models.IntegerField(primary_key=True)
    Company=models.CharField(max_length=40)
    Title=models.CharField(max_length=100)
    Data=models.CharField(max_length=10000)

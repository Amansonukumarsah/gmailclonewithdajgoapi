from functools import partial
from re import S
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Primary, Promotion,Social,Snoozed,Sent,Spam,Star,Allmails
from .serializers import PrimarySerializers,SentSerializers,SnoozedSerializers,SpamSerializers,SocialSerializers,AllmailsSerializers,StarSerializers,PromotionSerializers
# Create your views here.

@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def Primaryview(request, pk=None):
    if request.method == 'GET':
        id = pk
        # print(id)
        if id is not None:
            print("id...",id)
            primary = Primary.objects.get(id=id)
            # print(primary.Name)
            serializer = PrimarySerializers(primary)
            return Response(serializer.data)

        primary = Primary.objects.all()
        serializer = PrimarySerializers(primary, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = PrimarySerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg': 'Data Created'})
        return Response(serializer.errors)

    if request.method == 'PUT':
        id = pk
        primary = Primary.objects.get(pk=id)
        serializer = PrimarySerializers(Primary, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg': 'Data Updated'})
        return Response(serializer.errors)

    if request.method == 'DELETE':
        id = pk
        # id = request.data.get('id')
        primary =Primary.objects.get(pk=id)
        primary.delete()
        return Response({'msg': 'Data Deleted'})




@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def Socilaview(request,pk=None):
    if request.method=='GET':
        id=pk
        if id is not None:
            social=Social.objects.get(id=id)
            seralizer=SocialSerializers(social)
            return Response(seralizer.data)
        social=Social.objects.all()
        seralizer=SocialSerializers(social,many=True)
        return Response(seralizer.data)
    

    if request.method=='POST':
        seralizer=SocialSerializers(request.data)
        if seralizer.is_valid():
            seralizer.save()
            return Response({'msg': 'Data Updated'})
        return Response(seralizer.errors)

    if request.method=='PUT':
        id=pk
        social=Social.objects.get(id=id)
        seralizer=SocialSerializers(social,data=request.data,partial=True)
        if seralizer.is_valid():
            seralizer.save()
            return Response({'msg': 'Data Updated'})
        return Response(seralizer.errors)

    if request.metho=='DELETE':
        id=pk
        social=Social.objects.get(id=id)
        social.delete()
        return Response({'msg': 'Data Deleted'})





@api_view(['GET','POST','PUT','DELETE'])
def Promotionviews(request,pk=None):
    if request.method=='GET':
        id=pk
        if id is not None:
            promotion=Promotion.objects.get(id=id)
            serializer=PromotionSerializers(promotion)
            return Response(serializer.data)
        
        promotion=Promotion.objects.all()
        serializer=PromotionSerializers(promotion,many=True)
        return Response(serializer.data)
    
    if request.method=='POST':
        serializer=PromotionSerializers(request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg': 'Data Updated'})
        return Response(serializer.errors)
    

    if request.method=='PUT':
        id=pk
        promotion=Promotion.objects.get(id=id)
        seralizer=PromotionSerializers(promotion,data=request.data,partial=True)
        if seralizer.is_valid():
            seralizer.save()
            return Response({'msg': 'Data Updated'})
        return Response(seralizer.errors)

    if request.method=='DELETE':
        id=pk
        promotion=Promotion.objects.get(id=id)
        promotion.delete()
        return Response({'msg': 'Data Deleted'})





@api_view(['GET','POST','PUT','DELETE'])
def Sentviews(request,pk=None):
    if request.method=='GET':
        id=pk
        if id is not None:
            sent=Sent.objects.get(id=id)
            serializer=SentSerializers(sent)
            return Response(serializer.data)

        sent=Sent.objects.all()
        serializer=SentSerializers(sent,many=True)
        return Response(serializer.data)
    
    if request.method=='POST':
        serializer=SentSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg': 'Data Updated'})
        return Response(serializer.errors)
    
    if request.method=='PUT':
        id=pk
        sent=Sent.objects.get(id=id)
        serializer=SentSerializers(sent,data=request.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'MSG':'Update Data'})
        return Response(serializer.errrors)

    if request.method=='DELETE':
        id=pk
        sent=Sent.objects.get(id=id)
        sent.delete()
        return Response({'MSG':'Data Deleted'})




@api_view(['GET','POST','PUT','DELETE'])
def Snoozedviews(request,pk=None):
    if request.method=='GET':
        id=pk
        if id is not None:
            snooz=Snoozed.objects.get(id=id)
            serializer=SnoozedSerializers(snooz)
            return Response(serializer.data)
        
        snooz=Snoozed.objects.all()
        serializer=SnoozedSerializers(snooz,many=True)
        return Response(serializer.data)

    if request.method=='POST':
        serializer=SnoozedSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'data sent'})
        return Response(serializer.errors)
    
    if request.method=='PUT':
        id=pk
        snooz=Snoozed.objects.get(id=id)
        serializer=SnoozedSerializers(snooz,data=request.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'Data Updated'})
        return Response(serializer.errors)

    if request.method=='DELETE':
        id=pk
        snooz=Snoozed.objects.get(id=id)
        snooz.delete()
        return Response({'msg':'data Deleted'})
    



@api_view(['GET','POST','PUT','DELETE'])
def Spamviews(request,pk=None):
    if request.method=='GET':
        id=pk
        if id is not None:
            spam=Spam.objects.get(id=id)
            serializer=SpamSerializers(spam)
            return Response(serializer.data)
        
        spam=Spam.objects.all()
        serializer=SpamSerializers(spam,many=True)
        return Response(serializer.data)


    if request.method=='POST':
        serializer=SpamSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'data update'})
        return Response(serializer.errors)
    


    if request.method=='PUT':
        id=pk
        spam=Spam.objects.get(id=id)
        serializer=SpamSerializers(spam,data=request.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'data update'})
        return Response(serializer.errors)

    if request.method=='DELETE':
        id=pk
        spam=Spam.objects.get(id=id)
        spam.delete()
        return Response({'msg':'Data Deleted'})




    
@api_view(['GET','POST','PUT','DELETE'])
def Starviews(request,pk=None):
    if request.method=='GET':
        id=pk
        if id is not None:
            star=Star.objects.get(id=id)
            serializer=StarSerializers(star)
            return Response(serializer.data)
        
        star=Star.objects.all()
        serializer=StarSerializers(star,many=True)
        return Response(serializer.data)


    if request.method=='POST':
        serializer=StarSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'data update'})
        return Response(serializer.errors)
    


    if request.method=='PUT':
        id=pk
        star=Star.objects.get(id=id)
        serializer=StarSerializers(star,data=request.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'data update'})
        return Response(serializer.errors)

    if request.method=='DELETE':
        id=pk
        star=Star.objects.get(id=id)
        star.delete()
        return Response({'msg':'Data Deleted'})





@api_view(['GET','POST','PUT','DELETE'])
def Allmailsviews(request,pk=None):
    if request.method=='GET':
        id=pk
        if id is not None:
            allmails=Allmails.objects.get(id=id)
            serializer=AllmailsSerializers(allmails)
            return Response(serializer.data)
        
        allmails=Allmails.objects.all()
        serializer=Allmails(allmails,many=True)
        return Response(serializer.data)


    if request.method=='POST':
        serializer=AllmailsSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'data update'})
        return Response(serializer.errors)
    


    if request.method=='PUT':
        id=pk
        allmails=Allmails.objects.get(id=id)
        serializer=StarSerializers(allmails,data=request.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'data update'})
        return Response(serializer.errors)



    if request.method=='DELETE':
        id=pk
        allmails=Allmails.objects.get(id=id)
        allmails.delete()
        return Response({'msg':'Data Deleted'})

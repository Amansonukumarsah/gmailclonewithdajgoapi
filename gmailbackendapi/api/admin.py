from django.contrib import admin

# Register your models here.
from .models import Primary, Promotion,Social,Snoozed,Sent,Spam,Star,Allmails

@admin.register(Primary)
class Prmaryadmin(admin.ModelAdmin):
    list_display=['id','Company','Title','Data']


@admin.register(Social)
class Prmaryadmin(admin.ModelAdmin):
    list_display=['id','Company','Title','Data']

@admin.register(Promotion)
class Prmaryadmin(admin.ModelAdmin):
    list_display=['id','Company','Title','Data']

@admin.register(Snoozed)
class Prmaryadmin(admin.ModelAdmin):
    list_display=['id','Company','Title','Data']

@admin.register(Sent)
class Prmaryadmin(admin.ModelAdmin):
    list_display=['id','Company','Title','Data']


@admin.register(Spam)
class Prmaryadmin(admin.ModelAdmin):
    list_display=['id','Company','Title','Data']


@admin.register(Star)
class Prmaryadmin(admin.ModelAdmin):
    list_display=['id','Company','Title','Data']


@admin.register(Allmails)
class Prmaryadmin(admin.ModelAdmin):
    list_display=['id','Company','Title','Data']
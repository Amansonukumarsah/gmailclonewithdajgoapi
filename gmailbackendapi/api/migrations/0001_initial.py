# Generated by Django 4.0.5 on 2022-07-17 18:48

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Allmails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Company', models.CharField(max_length=40)),
                ('Title', models.CharField(max_length=100)),
                ('Data', models.CharField(max_length=10000)),
            ],
        ),
        migrations.CreateModel(
            name='Primary',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Company', models.CharField(max_length=40)),
                ('Title', models.CharField(max_length=100)),
                ('Data', models.CharField(max_length=10000)),
            ],
        ),
        migrations.CreateModel(
            name='Promotion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Company', models.CharField(max_length=40)),
                ('Title', models.CharField(max_length=100)),
                ('Data', models.CharField(max_length=10000)),
            ],
        ),
        migrations.CreateModel(
            name='Sent',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Company', models.CharField(max_length=40)),
                ('Title', models.CharField(max_length=100)),
                ('Data', models.CharField(max_length=10000)),
            ],
        ),
        migrations.CreateModel(
            name='Snoozed',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Company', models.CharField(max_length=40)),
                ('Title', models.CharField(max_length=100)),
                ('Data', models.CharField(max_length=10000)),
            ],
        ),
        migrations.CreateModel(
            name='Social',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Company', models.CharField(max_length=40)),
                ('Title', models.CharField(max_length=100)),
                ('Data', models.CharField(max_length=10000)),
            ],
        ),
        migrations.CreateModel(
            name='Spam',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Company', models.CharField(max_length=40)),
                ('Title', models.CharField(max_length=100)),
                ('Data', models.CharField(max_length=10000)),
            ],
        ),
        migrations.CreateModel(
            name='Star',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Company', models.CharField(max_length=40)),
                ('Title', models.CharField(max_length=100)),
                ('Data', models.CharField(max_length=10000)),
            ],
        ),
    ]
# Generated by Django 4.0.5 on 2022-07-23 14:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_snoozed_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sent',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]

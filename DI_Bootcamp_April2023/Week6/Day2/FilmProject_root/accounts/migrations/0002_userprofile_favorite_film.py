# Generated by Django 4.2.1 on 2023-06-06 12:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('films', '0001_initial'),
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='favorite_film',
            field=models.ManyToManyField(to='films.film'),
        ),
    ]
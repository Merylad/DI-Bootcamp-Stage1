# Generated by Django 4.2.1 on 2023-05-31 17:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0006_remove_todo_date_completion'),
    ]

    operations = [
        migrations.AddField(
            model_name='todo',
            name='date_completion',
            field=models.DateTimeField(default=None),
        ),
    ]

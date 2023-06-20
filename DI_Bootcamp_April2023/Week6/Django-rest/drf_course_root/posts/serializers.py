from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Post
        fields = (
            'title',
            'category',
            'publish_date',
            'last_updated',
            'author'
        )
        
        
# from rest_framework import serializers
# from .models import Post
# class PostSerializer(serializers.ModelSerializer) :
#     class Meta :
#         model = Post
#         fields = ('title', 'category', 'publish_date', 'last_updated')
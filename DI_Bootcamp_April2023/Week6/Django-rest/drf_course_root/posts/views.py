from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
from .models import Post
from .serializers import PostSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, mixins, permissions
from .permissions import IsOwner

# Create your views here.

# @csrf_exempt
# def post_view(request):
#     #GET
#     queryset = Post.objects.all()
#     serializer = PostSerializer(queryset, many=True)
#     return JsonResponse(data = serializer.data, safe = False)

class PostView (APIView):
    
    def get(self, resquest, *args, **kwargs):
        
        if 'pk' in kwargs:
            post = Post.objects.get (id = kwargs['pk'])
            serializer = PostSerializer(post)
            return Response (serializer.data)
            
        else:
            queryset = Post.objects.all()
            serializer = PostSerializer(queryset, many=True)
            return Response (serializer.data)
        
    def post (self, request, *args, **kwargs):
        serializer = PostSerializer(data = request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response (data = serializer.data)
        return Response (serializer.errors)
    
    def delete (self, request, pk, *args, **kwargs):
        post = Post.objects.get(id = pk)
        post.delete()
        return Response()
    
    def put (self, request, pk, *args, **kwargs):
        post = Post.objects.get(id = pk)
        serializer = PostSerializer (post, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response (serializer.errors)
    
    
# class PostListView (mixins.CreateModelMixin, mixins.ListModelMixin, generics.GenericAPIView):
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer
    
#     def get(self, request, *args, **kwargs):
#         return self.list(request, *args, **kwargs)
    
#     def post(self, request, *args, **kwargs):
#         return self.create(request, *args, **kwargs)

class PostListView (generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    
class PostDetailView (generics.RetrieveDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwner)
    
    
        


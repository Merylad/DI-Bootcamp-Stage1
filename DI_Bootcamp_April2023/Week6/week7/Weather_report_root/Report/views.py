from django.shortcuts import render
from rest_framework import generics, mixins
from .serializers import ReportSerializer
from .models import Report

# Create your views here.

class ReportListView (generics.ListCreateAPIView):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer
    
class ReportDetailView (generics.RetrieveAPIView):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer
    
class ReportDeleteView(generics.DestroyAPIView):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer

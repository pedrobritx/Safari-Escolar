from rest_framework import serializers
from .models import Classroom

class ClassroomSerializer(serializers.ModelSerializer):
    student_count = serializers.IntegerField(source='students.count', read_only=True)

    class Meta:
        model = Classroom
        fields = ['id', 'school_id', 'name', 'grade_level', 'teacher', 'academic_year', 'student_count', 'created_at']
        read_only_fields = ['id', 'teacher', 'created_at', 'school_id'] 

    def create(self, validated_data):
        # Automatically assign the teacher from the request context
        validated_data['teacher'] = self.context['request'].user
        return super().create(validated_data)

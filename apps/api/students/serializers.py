from rest_framework import serializers
from .models import Student

class StudentSerializer(serializers.ModelSerializer):
    classroom_name = serializers.CharField(source='classroom.name', read_only=True)

    class Meta:
        model = Student
        fields = ['id', 'school_id', 'classroom', 'classroom_name', 'display_name', 'preferred_name', 'animal_id', 'color_hex', 'status', 'created_at']
        read_only_fields = ['id', 'created_at', 'school_id']

    def create(self, validated_data):
        # Ensure user can only create students for classrooms they own?
        # For now, basic creation.
        return super().create(validated_data)

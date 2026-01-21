from rest_framework import serializers
from .models import Feedback

class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = '__all__'
        read_only_fields = ('id', 'created_at', 'updated_at', 'teacher')

    def create(self, validated_data):
        # Assign teacher from request context if available
        request = self.context.get('request')
        if request and request.user.is_authenticated:
            validated_data['teacher'] = request.user
        return super().create(validated_data)

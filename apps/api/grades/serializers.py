from rest_framework import serializers
from .models import GradeCategory, GradeItem, GradeEntry

class GradeCategorySerializer(serializers.ModelSerializer):
    school_id = serializers.UUIDField(read_only=True)
    
    class Meta:
        model = GradeCategory
        fields = '__all__'
        read_only_fields = ('id', 'created_at', 'updated_at')

class GradeItemSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True)

    class Meta:
        model = GradeItem
        fields = '__all__'
        read_only_fields = ('id', 'created_at', 'updated_at')

class GradeEntrySerializer(serializers.ModelSerializer):
    student_name = serializers.CharField(source='student.display_name', read_only=True)
    
    class Meta:
        model = GradeEntry
        fields = '__all__'
        read_only_fields = ('id', 'graded_by_user', 'graded_at')

    def validate(self, data):
        """
        Check that the score is not greater than the max_score of the item.
        """
        # If this is an update, we might not have grade_item in data, search instance
        item = data.get('grade_item') or (self.instance.grade_item if self.instance else None)
        student = data.get('student') or (self.instance.student if self.instance else None)
            
        score = data.get('score')
        
        if item and score is not None:
            if score > item.max_score:
                raise serializers.ValidationError(
                    f"Score ({score}) cannot exceed max score ({item.max_score}) for this item."
                )
            if score < 0:
                raise serializers.ValidationError("Score cannot be negative.")

        if item and student:
            if item.classroom_id != student.classroom_id:
                raise serializers.ValidationError("Student must belong to the same classroom as the grade item.")
                 
        return data

class GradebookViewSerializer(serializers.Serializer):
    """
    Serializer for the flat gradebook grid view.
    """
    categories = GradeCategorySerializer(many=True)
    items = GradeItemSerializer(many=True)
    entries = GradeEntrySerializer(many=True)

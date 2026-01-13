from django import forms
from .models import BehaviorEvent


class BehaviorEventForm(forms.ModelForm):
    class Meta:
        model = BehaviorEvent
        fields = ["student", "points", "event_type", "note"]

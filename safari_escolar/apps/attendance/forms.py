from django import forms


class AttendanceForm(forms.Form):
    date = forms.DateField()

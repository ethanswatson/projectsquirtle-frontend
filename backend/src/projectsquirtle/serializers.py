from django.contrib.auth.models import User
from .models import Quiz, Question, Answer
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'url', 'username', 'email', 'quiz_set']


class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz
        fields = ['id', 'owner', 'quizName',
                  'quizDescription', 'dateCreated', 'question_set']


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ['id', 'questionText', 'answer_set']
        model = Question


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ['id', 'text', 'correct', 'pointValue']
        model = Answer

from django.db import models
from django.contrib.auth.models import User


class Quiz(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    quizName = models.CharField(max_length=60)
    quizDescription = models.TextField(null=True, default=None)
    dateCreated = models.DateTimeField(auto_now_add=True)

    def getOwner(self):
        return self.owner

    def getQuizName(self):
        return self.quizName

    def getQuizDescription(self):
        return self.quizDescription

    def getDateCreated(self):
        return self.dateCreated

    def getQuestions(self):
        return self.question_set.all()

    def setOwner(self, newOwner):
        self._owner = newOwner

    def setQuizName(self, newName):
        self._quizName = newName

    def setQuizDescription(self, newDescription):
        self._quizDescription = newDescription

    def __str__(self):
        return self.quizName + ' - ' + self.owner.username


class Question(models.Model):
    _quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    questionText = models.CharField(max_length=200)

    def getQuestionText(self):
        return self.questionText

    def setQuestionText(self, newText):
        self._questionText = newText

    def getAnswers(self):
        return self.answer_set.all()

    def addAnswer(self, text, correct, pointValue):
        answer = Answer(question=self, text=text,
                        correct=correct, pointValue=pointValue)
        answer.save()

    def __str__(self):
        return self.questionText


class Answer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    text = models.CharField(max_length=50)
    correct = models.BooleanField()
    pointValue = models.IntegerField(default=0)
    votes = models.IntegerField(default=0)
    # voters = models.ManyToManyField(AnonymousUser)

    def getQuestion(self):
        return self.question

    def getText(self):
        return self.text

    def isCorrect(self):
        return self.correct

    def getPointValue(self):
        return self.pointValue

    def getVotes(self):
        return self.votes

    def getVoters(self):
        return self.voters.all()

    def setText(self, newText):
        self.text = newText

    def setCorrect(self, correct):
        self.correct = correct

    def setPointValue(self, newPointValue):
        self.pointValue = newPointValue

    def vote(self, user):
        self.votes += 1
        self.save()

    def __str__(self):
        return self.text

    def clear(self):
        self.votes = 0
        self.save()

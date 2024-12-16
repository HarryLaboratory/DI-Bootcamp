const express = require('express');
const app = express();
const router = require('express').Router();
const triviaQuestions = require('./triviaQuestions');

app.use(express.json());

let userScore = 0;
let currentQuestionIndex = 0;

router.get('/quiz', (req, res) => {
  if (currentQuestionIndex < triviaQuestions.length) {
    const currentQuestion = triviaQuestions[currentQuestionIndex];
    res.json({
      question: currentQuestion.question,
    });
  } else {
    res.json({ message: 'Quiz over! Please submit your answers to see your score.' });
  }
});

router.post('/quiz', (req, res) => {
  const { answer } = req.body;

  if (currentQuestionIndex < triviaQuestions.length) {
    const correctAnswer = triviaQuestions[currentQuestionIndex].answer;

    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
      userScore++;
      res.json({
        message: 'Correct answer!',
      });
    } else {
      res.json({
        message: `Wrong answer! The correct answer is ${correctAnswer}.`,
      });
    }

    currentQuestionIndex++;
  } else {
    res.json({ message: 'Quiz over! Please visit /quiz/score to see your score.' });
  }
});

router.get('/quiz/score', (req, res) => {
  res.json({ score: `Your final score is: ${userScore} out of ${triviaQuestions.length}` });
});

app.use(router);

const port = 3000;
app.listen(port, () => {
  console.log(`Trivia quiz app is running on http://localhost:${port}`);
});

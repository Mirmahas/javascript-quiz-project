class Quiz {
  // YOUR CODE HERE:
  //
  //1.constructor (questions, timeLimit, timeRemaining)

  // 2. getQuestion()

  // 3. moveToNextQuestion()

  // 4. shuffleQuestions()

  // 5. checkAnswer(answer)

  // 6. hasEnded()
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }
  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }
  moveToNextQuestion() {
    return this.currentQuestionIndex++;
  }
  shuffleQuestions() {
    for (let i = this.questions.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = this.questions[i];
      this.questions[i] = this.questions[j];
      this.questions[j] = temp;
    }
  }
  checkAnswer(answer) {
    this.correctAnswers++;

    if (this.questions[this.currentQuestionIndex].correctAnswer === answer) {
    }
  }
  hasEnded() {
    if (this.currentQuestionIndex >= this.questions.length) {
      return true;
    } else {
      return false;
    }
  }
}

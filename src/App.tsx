import flashcards from "./data.js";
import { useState } from "react";
import AnswerOption from "./components/AnswerOption.js";

function App() {
  const [cardIndex, setCardIndex] = useState(0);

  const currentCard = flashcards[cardIndex];

  const [score, setScore] = useState(0);

  function handleAnswer(selectedAnswer) {
    if (selectedAnswer === currentCard.back) {
      setScore(score + 1);
    } else {
      setScore(0);
    }

    const randomIndex = Math.floor(Math.random() * flashcards.length);
    setCardIndex(randomIndex);
  }

  return (
    <main className="App">
      <header>
        <h1>Quizconst</h1>
        <span>
          Score <strong>{score}</strong>
        </span>
      </header>
      <div className="flashcard">
        <h2>{currentCard.front}</h2>
      </div>
      <div className="answers">
        {currentCard.options.map((option) => (
          <AnswerOption key={option} option={option} onAnswer={handleAnswer} />
        ))}
      </div>
      <p className="game-hint">Quak</p>
    </main>
  );
}

export default App;

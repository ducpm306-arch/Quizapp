function AnswerOption({ option, onAnswer }) {
  return <button onClick={() => onAnswer(option)}>{option}</button>;
}

export default AnswerOption;

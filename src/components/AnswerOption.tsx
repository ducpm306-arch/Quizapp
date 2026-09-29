function AnswerOption({ option, onAnswer, correctAnswer, selectedOption }) {
  let resultClass = "";

  if (selectedOption !== null) {
    if (option === correctAnswer) {
      resultClass = "correct";
    } else if (option === selectedOption) {
      resultClass = "incorrect";
    }
  }

  return (
    <button className={resultClass} disabled onClick={() => onAnswer(option)}>
      {option}
    </button>
  );
}

export default AnswerOption;

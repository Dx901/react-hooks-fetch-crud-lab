import React, {useState, useEffect} from "react";


function QuestionItem({ question, onDeleteQuestion }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete() {
    fetch(`http://localhost:4000/questions/${QuestionItem.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => onDeleteQuestion(question))
  }
{/*}
  function handleChangeAnswer() {
    fetch(`http://localhost:4000/questions/${id}`), {
      method: "PATCH",
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify({
        //"correctIndex": selectedQuestionId,
      })
      .then((res) => res.json())
      .then(() => handleDelete(question))
    }
  }
*/}
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button>Delete Question</button>
    </li>
  );
}

export default QuestionItem;

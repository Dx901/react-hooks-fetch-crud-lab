import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {

  const [questions, setQuestions] = useState([])
  const [page, setPage] = useState("List");

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data))
  }, [])

  //Set state witha a new array that has a new question at the end
  function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion])
  }

  //function handleDeletedQuestion() {
    //setQuestions(questions.filter(question => question.id !== deletedQuestionId))
  //}


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList questions={questions}/>}
    </main>
  );
}

export default App;

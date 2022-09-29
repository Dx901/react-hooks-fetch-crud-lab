import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

// import Question from "./QuestionItem"

function QuestionList({questions}) {

    return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{
        questions.map((question) => (
          <QuestionItem key={question.id} question={question}/>
        ))
        }</ul>
    </section>
  )
}
  //const questionsToDisplay = questions.filter(question) => {
    
  //}

 
  



{/*This is what I tried out*
function QuestionList() {
  //const [selectedanswers, setSelectedAnswers] = useState("All")
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((questions) => setQuestions(questions))
  }, [])



function handleDelete(deletedQuestion) {
  const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id)
  setQuestions(updatedQuestions)
}


  return (
  <div className="QuestionList">
    
    <Filter
      answers={selectedanswers}
      onAnswersChange={handleAddQuestion}
    />
    <ul className="QQuestionItem">
      {questionsToDisplay.map((questionItem) => (
        <question
          key={questionItem.id}
          questions={questionItem}
          onUpdateQuestion={handleUpdatedQuestion}
          onDeleteQuestion={handleDelete}
        />
      ))}
    </ul>
  </div>
 )
      }*/}











{/** 
function QuestionList() {

  const [questions, setQuestions] = useState([])
  const [selectedQuestions, setselectedQuestions] = useState("All")


  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((questions) => setQuestions(questions))
  }, [])

  //const questionsToDisplay = questions.filter(question) => {
    
  //}
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>there was a comment here</ul>
    </section>
  );
}
*/}

export default QuestionList;

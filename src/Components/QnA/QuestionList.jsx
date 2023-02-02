import React from 'react';
import Question from './Question.jsx';
import {useState} from 'react';
import AddQuestion from './AddQuestion.jsx'

const QuestionList = ({qs, prodId, prodName}) => {

  let [questionsLength, setQuestionsLength] = useState (1);

  let sortedQs = qs.sort((a,b) => {return b.question_helpfulness - a.question_helpfulness});

  const clickHandler = () => {
    setQuestionsLength(questionsLength + 2)
  }

  return (
    <div className="container">
      {sortedQs.map((q, index) => {
        return <Question q={q} key={q.question_id} index={index} length={questionsLength} prodId={prodId} prodName={prodName}/>
      })}
      {sortedQs.length < questionsLength ? null : <button onClick={() => clickHandler()}>MORE ANSWERED QUESTIONS</button> }
      <AddQuestion prodId={prodId} prodName={prodName}/>
    </div>
  )
}

export default QuestionList;
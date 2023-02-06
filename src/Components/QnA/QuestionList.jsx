import React from 'react';
import Question from './Question.jsx';
import {useState, useEffect} from 'react';
import AddQuestion from './AddQuestion.jsx'

const QuestionList = ({qs, prodId, prodName}) => {

  const [questionsLength, setQuestionsLength] = useState (1);
  const[finalQuestionList, setFinalQuestionList] = useState([])

  useEffect(() => {
    setFinalQuestionList(qs)
  },[qs])

  const clickHandler = () => {
    setQuestionsLength(questionsLength + 2)
  }

  return (
    <div className="container">
      {qs.map((q, index) => {
        return <Question q={q} key={q.question_id} index={index} length={questionsLength} prodId={prodId} prodName={prodName}/>
      })}
      {qs.length - 1 <= questionsLength ? null : <button className="qnabtn" onClick={() => clickHandler()}>MORE ANSWERED QUESTIONS</button> }
      <AddQuestion prodId={prodId} prodName={prodName} addQ={setFinalQuestionList} finalList={finalQuestionList}/>
    </div>
  )
}

export default QuestionList;
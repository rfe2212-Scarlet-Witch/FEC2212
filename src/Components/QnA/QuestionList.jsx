import React from 'react';
import Question from './Question.jsx';
import {useState} from 'react';
import AddQuestion from './AddQuestion.jsx'

const QuestionList = ({qs}) => {
  let [questionsLength, setQuestionsLength] = useState (1);
  let sortedQs = qs.sort((a,b) => {return b.question_helpfulness - a.question_helpfulness});
  const clickHandler = () => {
    setQuestionsLength(questionsLength + 2)
  }
  //console.log(sortedQs)
  return (
    <div className="container">
      {sortedQs.map((q, index) => {
        return <Question q={q} key={q.question_id} index={index} length={questionsLength}/>
      })}
      {sortedQs.length < questionsLength ? null : <button onClick={() => clickHandler()}>MORE ANSWERED QUESTIONS</button> }
      <AddQuestion />
    </div>
  )
}

export default QuestionList;
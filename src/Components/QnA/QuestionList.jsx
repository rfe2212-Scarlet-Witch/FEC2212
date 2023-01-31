import React from 'react';
import Question from './Question.jsx';
import {useState} from 'react';

const QuestionList = ({qs}) => {
  let [questionsLength, setQuestionsLength] = useState (3);

  let sortedQs = qs.sort((a,b) => {return b.question_helpfulness - a.question_helpfulness})

  return (
    <div>
      {sortedQs.map((q, index) => {
        return <Question q={q} key={q.question_id} index={index} length={questionsLength}/>
      })}
    </div>
  )
}

export default QuestionList;
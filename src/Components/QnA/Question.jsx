import React from 'react';
import AnswerList from './AnswerList.jsx';
import Helpful from '../SharedComponents/Helpful.jsx';

const Question = ({q}) => {
  //console.log(Object.values(q.answers))
  return (
    <div>
      <p className="question">Q: {q.question_body} <Helpful id={q.question_id} count={q.question_helpfulness} type="questions"/> </p>
      <AnswerList ansList={Object.values(q.answers)}/>
    </div>
  )
}

export default Question;
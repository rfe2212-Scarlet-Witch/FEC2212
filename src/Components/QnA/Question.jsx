import React, {useState} from 'react';
import AnswerList from './AnswerList.jsx';
import Helpful from '../SharedComponents/Helpful.jsx';
import AddAnswer from './AddAnswer.jsx'

const Question = ({q, index, length, prodName, prodId}) => {

  return index > length ? null : (
    <div>
      <div className="question"> <span className="title" >Q: {q.question_body} </span>
        <span className="text-muted2" >
          <Helpful id={q.question_id}
          count={q.question_helpfulness} type="questions"/> | <AddAnswer prodId={prodId} prodName={prodName} question={q.question_body} questionId={q.question_id}/>
        </span>
      </div>
      <AnswerList ansList={Object.values(q.answers)}/>
    </div>
  )
}

export default Question;
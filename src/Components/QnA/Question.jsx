import React from 'react';
import AnswerList from './AnswerList.jsx';
import Helpful from '../SharedComponents/Helpful.jsx';
import AddAnswer from './AddAnswer.jsx'

const Question = ({q, index, length}) => {
  // console.log('is true', Object.values(q.answers).length > 0, 'how many', Object.values(q.answers), "index" , index , index > length)
  //  let test = (((index < length) && (Object.values(q.answers).length > 0)));
  //  console.log(test)
  return index > length ? null : (
    <div>
      <p className="question">Q: {q.question_body}
      <Helpful id={q.question_id}
      count={q.question_helpfulness} type="questions"/> | <AddAnswer /> </p>
      <AnswerList ansList={Object.values(q.answers)}/>
    </div>
  )
}

export default Question;
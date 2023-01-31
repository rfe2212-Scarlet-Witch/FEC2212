import React from 'react';
import Question from './Question.jsx'

const QuestionList = ({qs}) => {
  console.log(qs)
  let sortedQs = qs.sort((a,b) => {return b.question_helpfulness - a.question_helpfulness})
  console.log(sortedQs)
  return (
    <div>
      {sortedQs.map((q) => {
        return <Question q={q} key={q.question_id} />
      })}
    </div>
  )
}

export default QuestionList;
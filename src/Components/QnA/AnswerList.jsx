import React from 'react';
import Answer from './Answer.jsx';
import {useState} from 'react';
// Parameter	Type	Description
// question_id	integer	Required ID of the question for wich answers are needed
// Query Parameters

// Parameter	Type	Description
// page	integer	Selects the page of results to return. Default 1.
// count	integer	Specifies how many results per page to return. Default 5.

// sort answer list here ?
// should be sorted to have seller on top and then sorted by helpfulness
const AnswerList = ({ansList}) => {

  let [ansLength, setAnsLength] = useState(2);

  let sortedList = ansList.sort((a,b) => {return b.helpfulness - a.helpfulness});

  const clickHandler = () => {
    setAnsLength(ansLength + 3);
  }
  return (
    <span>
      A:  {sortedList.map((item, index) => {
        return <Answer ans={item} key={item.id} index={index} className="answer" length={ansLength}/>
      })}
      { ansLength >= sortedList.length ? null : <button onClick={() => {clickHandler()}}>LOAD MORE ANSWERS</button>}
    </span>
  )
}

export default AnswerList;
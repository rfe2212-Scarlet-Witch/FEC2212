import React, {useState, useEffect}from 'react';
import QuestionList from './QuestionList.jsx';
import Search from './Search.jsx';

const QnA = ({currQuestions, currProd}) => {

  let filter = currQuestions.filter((question) => {
    return Object.keys(question.answers).length > 0;
  })

  const [list, setList] = useState([]);

  useEffect(() => {
    setList(filter)
  }, [currQuestions])

  return (
    <div>
      <h3>Questions & Answers</h3>
      <Search qs={list} setter={setList} sort={filter} all={currQuestions}/>
      <QuestionList qs={list} prodId={currProd.id} prodName={currProd.name}/>
    </div>
  )
};

export default QnA;
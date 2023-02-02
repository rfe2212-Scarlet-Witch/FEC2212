import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import QuestionList from './QuestionList.jsx';
import Search from './Search.jsx';

const QnA = ({currQuestions, currProd}) => {

  const filter = currQuestions.filter( (question) => {
    return Object.keys(question.answers).length > 0;
  })

  console.log(currProd.id, currProd.name)

  return (
    <div>
      <h3>Questions & Answers</h3>
      <Search />
      <QuestionList qs={filter} prodId={currProd.id} prodName={currProd.name}/>
    </div>
  )
};

export default QnA;
import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import QuestionList from './QuestionList.jsx';
import Search from './Search.jsx';

const QnA = ({currQuestions}) => {

  //console.log(currQuestions)
  //todo: add search bar
  return (
    <div>
      <h3>Questions & Answers</h3>
      <Search />
      <QuestionList qs={currQuestions}/>
    </div>
  )
};

export default QnA;
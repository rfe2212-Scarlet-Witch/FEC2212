import React from 'react';
import {useState, useEffect} from 'react'
import axios from 'axios';
import QuestionList from './QuestionList.jsx'

const QnA = ({currQuestions}) => {

  //console.log(currQuestions)
  //todo: add search bar
  return (
    <div>
      <QuestionList qs={currQuestions}/>
    </div>
  )
};

export default QnA;
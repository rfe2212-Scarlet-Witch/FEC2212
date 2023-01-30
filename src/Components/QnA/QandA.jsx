import React from 'react';
import {useState, useEffect} from 'react'
import axios from 'axios';
import AnswerList from './AnswerList.jsx'
import QuestionList from './QuestionList.jsx'

const QnA = () => {



  return (
    <div>
      <QuestionList />
      <AnswerList />
    </div>
  )
};

export default QnA;
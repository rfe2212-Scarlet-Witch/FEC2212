import React from 'react';
import {useState, useEffect} from 'react'
const QnA = () => {

  const [count, setCount] = useState(0)

  return (
    <div onClick={() => {setCount(count + 1)}}> This is where QnA will go. {count} </div>
  )
};

export default QnA;
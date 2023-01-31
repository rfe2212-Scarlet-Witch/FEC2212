import React from 'react';
import {useState} from 'react';
import axios from 'axios';

let Report = ({id, type}) => {

  let [re, setRe] = useState('Report');
  let [clicked, setClick] = useState(false);

  let clickHandler = () => {
    // set axios request to report question
    if(!clicked) {
      setClick(true);
      setRe('Reported');
      axios.put('/puts', {
        term: type === 'answers' ? `/qa/${type}/${id}/report`: `/reviews/${id}/report`
      })
    }
  };

  return (
    <>
    <span onClick={clickHandler}> <u>{re}</u> </span>
    </>
  )
}

export default Report
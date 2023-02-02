import React from 'react';
import {useState} from 'react';
import axios from 'axios';

let Helpful = ({id, count, type}) => {

  let [help, setHelp] = useState(count);
  let [clicked, setClicked] = useState(true);

  let clickHandler = () => {
    if (clicked) {
    setClicked(false);
    setHelp(count + 1);
    axios.put('/puts', {
     term: (type === 'answers') || (type === 'questions') ? `/qa/${type}/${id}/helpful`: `/reviews/${id}/helpful`
    })
    .then((dat) => {
      // console.log(dat)
    })
    .catch((err) => {
      // console.log(err)
    })}
  };

  return (
    <>
    <span> Helpful?  <u onClick={() => clickHandler()}>Yes</u> ({help}) |</span>
    </>
  )
}

export default Helpful;
import React, {useEffect, useState} from 'react';
import config from '../../../config.js';
import {Rating} from 'react-simple-star-rating'
import ProgressBar from "@ramonak/react-progress-bar";
import LinearProgress from '@mui/material/LinearProgress'



var LoadedBars = (props) => {
  var five = props.five;
  var four = props.four;
  var three = props.three;
  var two = props.two;
  var one = props.one


  return (
    <>
    <span>
      <div>Five Stars</div>
        <LinearProgress value={five} variant={'determinate'}/>
      <div>{five}</div>
      <div>Four Stars</div>
      <LinearProgress value={four} variant={'determinate'}/>
      <div>{four}</div>
      <div>Three Stars</div>
      <LinearProgress value={three} variant={'determinate'}/>
      <div>{three}</div>
      <div>Two Stars</div>
      <LinearProgress value={two} variant={'determinate'}/>
      <div>{two}</div>
      <div>One Stars</div>
      <LinearProgress value={one} variant={'determinate'}/>
      <div>{one}</div>
      </span>
    </>
  )
}

export default LoadedBars;
import React, {useEffect, useState} from 'react';
import config from '../../../config.js';
import {Rating} from 'react-simple-star-rating'
import ProgressBar from "@ramonak/react-progress-bar";


var LoadedBars = () => {


  return (
    <>
    <span>Five Stars</span>
        <ProgressBar className={"fiveProgressBar"} completed={five} isLabelVisible={false} borderRadius={'0px'} bgColor={'#808080'} height={'20px'}/>
      <div>{five}</div>
      <span>Four Stars</span>
      <ProgressBar className={"fiveProgressBar"} completed={four} isLabelVisible={false} borderRadius={'0px'} bgColor={'#808080'} height={'20px'}/>
      <div>{four}</div>
      <span>Three Stars</span>
      <ProgressBar className={"fiveProgressBar"} completed={three} isLabelVisible={false} borderRadius={'0px'} bgColor={'#808080'} height={'20px'}/>
      <div>{three}</div>
      <span>Two Stars</span>
      <ProgressBar className={"fiveProgressBar"} completed={two} isLabelVisible={false} borderRadius={'0px'} bgColor={'#808080'} height={'20px'}/>
      <div>{two}</div>
      <span>One Stars</span>
      <ProgressBar className={"fiveProgressBar"} completed={one} isLabelVisible={false} borderRadius={'0px'} bgColor={'#808080'} height={'20px'}/>
      <div>{one}</div>
    </>
  )
}

export default LoadedBars;
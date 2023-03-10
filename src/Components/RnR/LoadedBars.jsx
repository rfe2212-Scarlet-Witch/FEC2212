import React, {useEffect, useState} from 'react';
import config from '../../../config.js';
import LinearProgress from '@mui/material/LinearProgress'



var LoadedBars = (props) => {
  var filters = props.filters;
  var setFilters = props.setFilters;
  var five = props.five || 0;
  var four = props.four || 0;
  var three = props.three || 0;
  var two = props.two || 0;
  var one = props.one || 0;
  var sum = props.sum || 1;

  var setFilter = (star) => {
    if (filters.includes(star)) {
      var removeFrom = [...filters];
      var ind = removeFrom.indexOf(star);
      removeFrom.splice(ind, 1);
      setFilters(removeFrom);
    } else {
      var currentFilters = [...filters];
      currentFilters.push(star);
      setFilters(currentFilters);
    }
  }

  var styles = {
    bar: {
      height: '15px',
      borderRadius: '5px'
      // background: 'black',
      // barColorPrimary: 'black'
    }
  }

  return (
    <>
    <span>
      <div onClick={() => {setFilter('Five Stars')}}>Five Stars</div>
        <div className='fiveBar'>
          <LinearProgress  style={styles.bar} value={(five/sum) * 100} variant={'determinate'} sx={{colorPrimary: 'black'}}/>
        </div>
      <div>{five}</div>
      <div onClick={() => {setFilter('Four Stars')}}>Four Stars</div>
      <LinearProgress style={styles.bar} value={(four/sum) * 100} variant={'determinate'}/>
      <div>{four}</div>
      <div onClick={() => {setFilter('Three Stars')}}>Three Stars</div>
      <LinearProgress style={styles.bar} value={(three/sum) * 100} variant={'determinate'}/>
      <div>{three}</div>
      <div onClick={() => {setFilter('Two Stars')}}>Two Stars</div>
      <LinearProgress style={styles.bar} value={(two/sum) * 100} variant={'determinate'}/>
      <div>{two}</div>
      <div onClick={() => {setFilter('One Stars')}}>One Stars</div>
      <LinearProgress style={styles.bar} value={(one/sum) * 100 } variant={'determinate'}/>
      <div>{one}</div>
      </span>
    </>
  )
}

export default LoadedBars;
import React from 'react';
import Helpful from '../SharedComponents/Helpful.jsx';
import Report from '../SharedComponents/Report.jsx';
import moment from 'moment';
import {useState} from 'react';
import Photo from './Photo.jsx';

const Answer = ({ans, index, length, seller}) => {


  let mo = moment(ans.date).format("MMMM Do YYYY");

  return index > length ? null : (
    <div className="anstile">
      {index === 0 ? <span className="firstanswer">A: {ans.body}</span> :
      <p className="answerBody" style={{"marginLeft": "25px"}}>{ans.body}</p>}
      <div className="text-muted2" style={{"marginLeft": "25px"}}>
        <div style={{"marginBottom": "10px", }}>
          {ans.photos.map((img, index) => {return <Photo img={img} key={index}/>})}
        </div>
        <span className="answerUser">
          by {seller ? <strong>Seller</strong> : ans.answerer_name},  {mo} |
        </span>
        <Helpful id={ans.id}
          count={ans.helpfulness}
          type="answers"/> |
        <Report id={ans.id} type="answers"/>
      </div>
    </div>
  )
}

export default Answer;
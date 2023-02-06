import React from 'react';
import Helpful from '../SharedComponents/Helpful.jsx';
import Report from '../SharedComponents/Report.jsx';
import moment from 'moment';
import {useState} from 'react';
import Photo from './Photo.jsx';

const Answer = ({ans, index, length, seller}) => {


  let mo = moment(ans.date).format("MMMM Do YYYY");

  return index > length ? null : (
    <>
      {index === 0 ? <span className="firstanswer">{ans.body}</span> :
      <p className="answerBody">{ans.body}</p>}
      <div>
        <div>
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
    </>
  )
}

export default Answer;
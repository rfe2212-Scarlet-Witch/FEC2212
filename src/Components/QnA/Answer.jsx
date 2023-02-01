import React from 'react';
import Helpful from '../SharedComponents/Helpful.jsx';
import Report from '../SharedComponents/Report.jsx';
import moment from 'moment';
import {useState} from 'react';

const Answer = ({ans, index, length}) => {

  let photosArray = (imgArray) => {
    let htl = imgArray.map((img, index) => {
      return  <img src={img} key={index}
      width="100px"
      height="80px"
      alt="User image upload"
      />
    })
    return htl;
  };

  let mo = moment(ans.date).format("MMMM Do YYYY");

  return index > length ? null : (
    <>
      {index === 0 ? <span className="answerBody">{ans.body}</span> :
      <p className="answerBody">{ans.body}</p>}
      <div>
        <span className="answerUser">
          by {ans.answerer_name},  {mo} |
        </span>
        <Helpful id={ans.id}
          count={ans.helpfulness}
          type="answers"/> |
        <Report id={ans.id} type="answers"/>
      </div>
          <div>
            {photosArray(ans.photos)}
          </div>
    </>
  )
}

export default Answer;
import React, {useEffect, useState} from 'react';
import config from '../../../config.js';
import Rating from '@mui/material/Rating'
import { format } from 'date-fns';


var ReviewTile = (props) => {

var renderThis = props.renderThis;
var today = new Date(renderThis.date);
today = format((today), 'MMMM dd, yyyy')
// console.log(today);



//
  return (
    <>
    <div>
      <div className="reviewTime">
          <Rating readOnly={true} precision={1/4} value={renderThis.rating} size={'small'}/>
          {<div>{renderThis.reviewer_name + ', '}{today.toString()}</div>}
      </div>
      <div>
        {renderThis.summary !== '' ? <div>{renderThis.summary}</div> : <div>Summary</div>}
        {<div>{renderThis.body}</div>}
        {renderThis.recommend ? <div>I Recommend This Product</div> : <div></div>}
        {renderThis.photos[0] ? <img id='image' className='reviewImage' src={renderThis.photos[0].url} ></img> : <div>No Photos</div>}
        {renderThis.response ? <div>{renderThis.response}</div> : <div>No Response</div>}
      </div>
      <div>Helpful? <>Yes {renderThis.helpfulness}</></div>
    </div>
    </>

  )

}

export default ReviewTile;
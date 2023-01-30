import React, {useEffect, useState} from 'react';
import config from '../../../config.js';
import Rating from '@mui/material/Rating'
import { format } from 'date-fns';


var ReviewTile = (props) => {

var renderThis = props.renderThis;
var today = renderThis.date;
// format(today, 'yyyy/MM/dd kk:mm:ss')
// console.log(today);


console.log(renderThis);
  return (
    <>
    <div>
      <div className="reviewTime">
          <Rating readOnly={true} precision={1/4} value={renderThis.rating} size={'small'}/>
          {renderThis.date}
      </div>
      <div>
        {renderThis.summary !== '' ? <div>{renderThis.summary}</div> : <div>Summary</div>}
        {<div>{renderThis.body}</div>}
        {renderThis.photos[0] ? <img id='image' className='reviewImage' src={renderThis.photos[0].url} ></img> : <div>No Photos</div>}
      </div>
    </div>
    </>

  )

}

export default ReviewTile;
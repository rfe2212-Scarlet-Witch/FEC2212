import React, {useEffect, useState} from 'react';
import config from '../../../config.js';
import Rating from '@mui/material/Rating'


var ReviewTile = (props) => {

var renderThis = props.renderThis;
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
        {/* {<div>{renderThis.photos[0].url}</div>} */}
      </div>
    </div>
    </>

  )

}

export default ReviewTile;
import React, {useEffect, useState} from 'react';
import config from '../../../config.js';
import Rating from '@mui/material/Rating'
import Card from '@mui/material/Card'
import { format } from 'date-fns';
import Helpful from '../SharedComponents/Helpful.jsx'
import Report from '../SharedComponents/Report.jsx'
import {IoIosCheckmark} from "react-icons/io"


var ReviewTile = (props) => {

var renderThis = props.renderThis;

var today = new Date(renderThis.date);
today = format((today), 'MMMM dd, yyyy')
// console.log(today);

var styles = {
  reviewTime : {
    // flex-direction: row;
    display: "flex",
    // border: "1px solid black",
    width: '100%',
    justifyContent: "space-between",
  },
  ReviewTileRating : {
    display: 'flex',
    justifyContent: "space-between",
    // border: "1px solid black"
  },
  ReviewerName : {
    display: 'flex',
    justifyContent: "space-between",
    // border: '1px solid black'
  },
  card : {
    // border: '1px solid black',
    width: "100%",
    paddingTop: "2.5%",
    paddingLeft: "2.5%",
    paddingRight: "2.5%",
    paddingBottom: "2.5%"
  },
  summary : {
    fontWeight: 'bold'
  },
  recFormat: {
    display: "flex",
    flexDirection: "row"
  },
  checkmark : {
    maxWidth: "20%",
    maxHeight: "20%",
    border: '1px solid red'
  },
  separator : {
    borderTop: "1px solid #333",
    width: "100%",
    height: "1px",
    display: "block",
}
}
const showMore = (wholeString) => {
  return (
    <div>{wholeString}</div>
  )
}
const twoFiftyLimit = () => {
  var limited;
  if (renderThis.body.length >= 250) {
    limited = renderThis.body.substring(0,255);
    return (
      <>
        <div>{limited}</div>
        <button onClick={() => {showMore(renderThis.body.length)}}>Show More</button>
      </>
    )
  }
  return <div>{renderThis.body}</div>
}

var renderPics = [];
  if (renderThis.photos.length > 0) {
    for (var i = 0; i < renderThis.photos.length; i ++) {
      renderPics.push(renderThis.photos[i].url);
    }

//
  return (
    <>
    <Card style={styles.card} raised={true}>
      <div style={styles.reviewTime}>
        <div style={styles.ReviewTileRating}>
          <Rating readOnly={true} precision={1/4} value={renderThis.rating} size={'small'}/>
        </div>
        <div style={styles.ReviewerName}>
          {renderThis.reviewer_name + ', '}{today.toString()}
        </div>
      </div>
      <div>
        {renderThis.summary !== '' ? <div style={styles.summary}>{renderThis.summary}</div> : <div>Summary</div>}
        <span style={styles.separator}></span>
        {twoFiftyLimit()}
        {renderThis.recommend ? <div style={styles.recFormat}><div>I Recommend This Product</div><IoIosCheckmark style={styles.checkmark}/></div> : <div></div>}
        {renderPics.length > 0 ? renderPics.map((pic) => (<img id='image' className='reviewImage' src={pic} ></img>)) : <div>No Photos</div>}
        {renderThis.response ? <div>Response From Seller: {renderThis.response}</div> : <div>No Response</div>}
      </div>
      {/* <div>Helpful? <>Yes {renderThis.helpfulness}</></div> */}
      <>
      <Helpful id={renderThis.review_id} count={renderThis.helpfulness} type="reviews"/>
      <Report id={renderThis.review_id}/>
      </>
    </Card>
    </>

  )

}
}

export default ReviewTile;
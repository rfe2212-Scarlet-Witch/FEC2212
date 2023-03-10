import React, {useEffect, useState} from 'react';
import config from '../../../config.js';
import Rating from '@mui/material/Rating'
import Card from '@mui/material/Card'
import { format } from 'date-fns';
import Helpful from '../SharedComponents/Helpful.jsx'
import Report from '../SharedComponents/Report.jsx'
import {IoIosCheckmark} from "react-icons/io"
import ImageHandler from "./ImageHandler.jsx"


var ReviewTile = (props) => {

var renderThis = props.renderThis;
// console.log('Rendering This', renderThis)
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
    paddingBottom: "2.5%",
    borderRadius: '10px'
  },
  summary : {
    fontWeight: 'bold'
  },
  recFormat: {
    display: "flex",
    flexDirection: "row"
  },
  checkmark : {
    width: "4%",
    height: "4%",
    // border: '1px solid red'
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
  }

var [showImage, setShowImage] = useState(false);
var fullScreenImage = () => {

}


//
  return (
    <>
    <Card id='reviewCard' style={styles.card} raised={true}>
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
        {/* {twoFiftyLimit()} */}
        <div>{renderThis.body}</div>
        {renderThis.recommend ? <div style={styles.recFormat}><div>I Recommend This Product</div><IoIosCheckmark style={styles.checkmark}/></div> : <div></div>}
        <ImageHandler renderPics={renderPics}/>
        {renderThis.response ? <Card><div>Response From Seller: {renderThis.response}</div></Card> : null}
      </div>
      {/* {console.log(renderThis.review_id)} */}
      <>
      <Helpful id={renderThis.review_id} count={renderThis.helpfulness} type="reviews"/>
      <Report id={renderThis.review_id}/>
      </>
    </Card>
    </>

  )


}

export default ReviewTile;
import React, {useEffect, useState} from 'react';
import config from '../../../config.js';
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import ReviewForm from './ReviewForm.jsx'


// import RnR from './RnR.jsx'



var AddReview = (props) => {
  var title = props.title;

  var [showReview, setShowReview] = useState(false);
  var [email, setEmail] = useState('');
  var [ynRecommend, setYnRecommend] = useState(false);

  var showModal = () => {
    setShowReview(!showReview);
  };

  var _setEmail = (email) => {
    setEmail(email);
    //works
    // console.log(email);
  }


  return (
    <>
      <button onClick={showModal}>{title}</button>
      <Dialog id='addReviewModal' open={showReview}>
        <DialogTitle>Review It!</DialogTitle>
        <ReviewForm setEmail={_setEmail} setYnRecommend={setYnRecommend}/>
        <DialogActions>
          <Button onClick={showModal}>Close Dialog</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AddReview;
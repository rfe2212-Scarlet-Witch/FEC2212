import React, {useEffect, useState} from 'react';
import config from '../../../config.js';
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Rating from '@mui/material/Rating'


var ReviewForm = (props) => {
  var _setEmail = props.setEmail;


  return (
    <>
      <Rating/>
      <TextField
        margin="dense"
        id="name"
        label="Email Address"
        type="email"
        onChange={(e) => {_setEmail(e.target.value)}}
      />


    </>
  )
}

export default ReviewForm;
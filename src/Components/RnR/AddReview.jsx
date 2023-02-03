import React, {useEffect, useState} from 'react';
import config from '../../../config.js';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import ReviewForm from './ReviewForm.jsx'
import Modal, { ModalBody, ModalFooter, ModalHeader } from '../SharedComponents/Modal.jsx'
import Rating from '@mui/material/Rating'




// import RnR from './RnR.jsx'



var AddReview = ({title, currentProduct}) => {

  const [showModal, setShowModal] = useState(false);
  const [inputs, setInputs] = useState({});
  const [hover, setHover] = useState(-1);
  const [size, setSize] = useState('')
  const [comfort, setComfort] = useState('')
  const [fit, setFit] = useState('')


  const handleSubmit = (event) => {
      //make axios request to post
      // term should be POST /qa/questions
      inputs.product_id = currentProduct.id
      event.preventDefault();
      console.log(inputs)
      setShowModal(false);

  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
    console.log('inputs', inputs)
  }

  const [isChecked, setIsChecked] = useState(false);

  const recommendHandler = () => {
    // console.log('inputs', inputs)
    const name = 'recommend';
    const value = !isChecked;
    setIsChecked(!isChecked)
    setInputs(values => ({...values, [name]: value}))
  }

  const labels = {
  1: 'Useless',
  2: 'Poor',
  3: 'Ok',
  4: 'Good',
  5: 'Excellent',
};

  var styles = {
    size_one : {
      display: "flex",
      flexDirection: "row",
      border: '1px solid black'
    }
  }

  var styles = {
    Modal : {
      width: '100%',
      height: '100%'
    }
  }

  var checkmark = true;
  return (
  <>
  <button onClick={() => setShowModal(true)}>
    Add Review +
  </button>
  <Modal show={showModal} setShow={setShowModal} style={styles.Modal}>
      <ModalHeader>
        <h2 style={{ "marginTop": "0px","marginBottom": "4px"}}>
          Write Your Review
        </h2>
        <h4 style={{"marginTop": "0px", "marginBottom": "0px"}}>
          About {currentProduct.name}
        </h4>
      </ModalHeader>
      <ModalBody >

        <form id="form1" onSubmit={handleSubmit}>

              {/* Star Rating */}
              <label> Leave a Star Rating </label>
              <div>
                <Rating name="rating" onChange={handleChange} onChangeActive={(e, val) => {setHover(val)}}/>
                <div>{hover !== -1 ? labels[hover]: null}</div>
              </div>
              <br/>
              {/* <label>About The {currentProduct.name}</label> */}
              <br/>

              <input type='checkbox' name="recommend"id="reco" onChange={recommendHandler}></input>
              <label for="reco">Do You Recommend This Product</label>
              <br/>

              <fieldset onChange={handleChange}>
                <div style={styles.size_one}>
                  Size
                  <div >
                    <input  type="radio" id="size_one" value="1" name="125035" onClick={(e) => {setSize(e.target.value)}}></input>
                    <label for="size_one" >A size too small</label>
                  </div>
                  <div>
                    <input  type="radio" id="size_two" value="2" name="125035" onClick={(e) => {setSize(e.target.value)}}></input>
                    <label for="size_two">1/2 a size too small</label>
                  </div>
                  <div>
                    <input  type="radio" id="size_three" value="3" name="125035" onClick={(e) => {setSize(e.target.value)}}></input>
                    <label for="size_three">Perfect</label>
                  </div>
                  <div>
                    <input  type="radio" id="size_four" value="4" name="125035" onClick={(e) => {setSize(e.target.value)}}></input>
                    <label for="size_four">1/2 a size too big</label>
                  </div>
                  <div>
                    <input  type="radio" id="size_five" value="5" name="125035" onClick={(e) => {setSize(e.target.value)}}></input>
                    <label for="size_five">A size too wide</label>
                  </div>
                </div>
                {/* {console.log(size)} */}
              </fieldset>

              <fieldset onChange={handleChange}>
                <div style={styles.size_one}>
                  Comfort
                  <div >
                    <input  type="radio" id="comfort_one" value="1" name="125075" onClick={(e) => {setSize(e.target.value)}}></input>
                    <label for="comfort_one" >Uncomfortable</label>
                  </div>
                  <div>
                    <input  type="radio" id="comfort_two" value="2" name="125075" onClick={(e) => {setSize(e.target.value)}}></input>
                    <label for="comfort_two">Slightly Uncomfortable</label>
                  </div>
                  <div>
                    <input  type="radio" id="comfort_three" value="3" name="125075" onClick={(e) => {setSize(e.target.value)}}></input>
                    <label for="comfort_three">Ok</label>
                  </div>
                  <div>
                    <input  type="radio" id="comfort_four" value="4" name="125075" onClick={(e) => {setSize(e.target.value)}}></input>
                    <label for="comfort_four">Comfortable</label>
                  </div>
                  <div>
                    <input  type="radio" id="size_five" value="5" name="125035" onClick={(e) => {setSize(e.target.value)}}></input>
                    <label for="size_five">Perfect</label>
                  </div>
                </div>
                {/* {console.log(size)} */}
              </fieldset>

              <fieldset onChange={handleChange}>
                <div style={styles.size_one}>
                  Fit
                  <div >
                    <input  type="radio" id="fit_one" value="1" name="125073" onClick={(e) => {setFit(e.target.value)}}></input>
                    <label for="fit_one" >Runs tight</label>
                  </div>
                  <div>
                    <input  type="radio" id="fit_two" value="2" name="125073" onClick={(e) => {setFit(e.target.value)}}></input>
                    <label for="fit_two">Runs slightly tight</label>
                  </div>
                  <div>
                    <input  type="radio" id="fit_three" value="3" name="125073" onClick={(e) => {setFit(e.target.value)}}></input>
                    <label for="fit_three">Perfect</label>
                  </div>
                  <div>
                    <input  type="radio" id="fit_four" value="4" name="125073" onClick={(e) => {setFit(e.target.value)}}></input>
                    <label for="fit_four">Runs slightly long</label>
                  </div>
                  <div>
                    <input  type="radio" id="fit_five" value="5" name="125073" onClick={(e) => {setSize(e.target.value)}}></input>
                    <label for="fit_five">Runs long</label>
                  </div>
                </div>
                {/* {console.log(size)} */}
              </fieldset>

              <label>Your Question</label><br/>
              <textarea
              rows="6" cols="50" maxLength="1000"
              name="body"
              value={inputs.body || ""}
              onChange={handleChange}
              required
              /><br/>

              <label>What is your nickname</label><br/>
              <input type="text"
               className="modal-input"
               name="name"
               value={inputs.name || ""}
               onChange={handleChange}
               maxLength="60"
               required
               placeholder="Example: jackson11!" /><br/>
              <span className="text-muted">
              For privacy reasons, do not use your full name or email address
              </span><br/>

              <label>Email address</label><br/>
              <input type="email"
               className="modal-input"
               name="email"
               value={inputs.email || ""}
               onChange={handleChange}
               required
               placeholder="Why did you like the product or not?" /><br/>
              <span className="text-muted">
                For authentication reasons, you will not be emailed
              </span>

        </form>
      </ModalBody>
      <ModalFooter>
          <button onClick={() => setShowModal(false)}>
              Close
          </button>
          <button variant="primary"
          type="submit" form="form1" value="Submit"
          onSubmit={handleSubmit} >Submit</button>
      </ModalFooter>
  </Modal>
</>
  )
}

export default AddReview;
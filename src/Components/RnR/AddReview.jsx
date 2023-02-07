import React, {useEffect, useState} from 'react';
import config from '../../../config.js';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import ReviewForm from './ReviewForm.jsx'
import Modal, { ModalBody, ModalFooter, ModalHeader } from '../SharedComponents/Modal.jsx'
import Rating from '@mui/material/Rating'
import AddReviewButtons from './AddReviewButtons.jsx'
import AddImages from './AddImages.jsx'
const axios = require('axios');





// import RnR from './RnR.jsx'



var AddReview = ({title, currentProduct, currMeta}) => {

  const [showModal, setShowModal] = useState(false);
  const [showPicturesModal, setShowPicturesModal] = useState(false);


  const [image_one, setImageOne] = useState(null);
  const [image_two, setImageTwo] = useState(null);
  const [image_three, setImageThree] = useState(null);
  const [image_four, setImageFour] = useState(null);
  const [image_five, setImageFive] = useState(null);

  const [rated, setRated] = useState(false);





  const [isChecked, setIsChecked] = useState(false);
  const [inputs, setInputs] = useState({});
  const [hover, setHover] = useState(-1);
  const [size, setSize] = useState('')
  const [comfort, setComfort] = useState('')
  const [fit, setFit] = useState('')
  const [images, setImages] = useState([]);
  const [minReached, setMinReached] = useState(false);
  const [starsRated, setStarsRated] = useState(false);

  var toSend = {}

  var preparePacket = (packet) => {
    toSend.product_id = packet.product_id;
    toSend.rating = packet.rating;
    toSend.summary = packet.summary;
    toSend.body = packet.body;
    toSend.recommend = packet.recommend;
    toSend.name = packet.name;
    toSend.email = packet.email;

    var pictures_arr = [];
    if (packet.picture_one) {
      pictures_arr.push(packet.picture_one);
    }
    if (packet.picture_two) {
      pictures_arr.push(packet.picture_two);
    }
    if (packet.picture_three) {
      pictures_arr.push(packet.picture_three);
    }
    if (packet.picture_four) {
      pictures_arr.push(packet.picture_four);
    }
    if (packet.picture_five) {
      pictures_arr.push(packet.picture_five);
    }
    toSend.photos = pictures_arr;

    var characteristicsObject = {};
    if (Object.keys(inputs)) {
      var allInputKeys = Object.keys(inputs);
      for (var i = 0; i < allInputKeys.length; i++) {
        var currKey = allInputKeys[i];
        if (currKey !== 'body' && currKey !== 'summary' && currKey !== 'rating' && currKey !== 'product_id'
        && currKey !== 'recommend' && currKey !== 'name' && currKey !== 'email' && currKey !=='picture_one'
        && currKey !== 'picture_two' && currKey !== 'picture_two' && currKey !== 'picture_three'
        && currKey !== 'picture_four' && currKey !== 'picture_five') {
          characteristicsObject[currKey] = parseInt(inputs[currKey]);
        }
      }
      toSend.characteristics = characteristicsObject;
    }
    // console.log(toSend);
  }

  const handleSubmit = (event) => {
      //make axios request to post
      // term should be POST /qa/questions
      inputs.product_id = currentProduct.id
      inputs.recommend = isChecked;
      event.preventDefault();
      preparePacket(inputs);
      // console.log('sending', toSend);
      //Post request to /reviews
      axios.post('/revPost', {
        packet: toSend
      })
      setShowModal(false);


  };

  const handleImageSubmit = (event) => {
    event.preventDefault();
    console.log('event from image submit', event);
    setShowPicturesModal(false);

    var imagesCopy = [...images];
    imagesCopy.push(event.target.value)
    setImages(imagesCopy)
    console.log(images);
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
    console.log('inputs', inputs)
  }

  const handleImageChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
    console.log('inputs', inputs)

  }


  const recommendHandler = () => {
    // console.log('inputs', inputs)
    const name = 'recommend';
    const value = !isChecked;
    setIsChecked(!isChecked)
    setInputs(values => ({...values, [name]: value}))
  }

  const addImage = (url) => {

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
    },
    Modal : {
      width: '100%',
      height: '100%'
    },
    Images: {
      width: '30%',
      height: '30%'
    },
    Red : {
      color: 'red'
    }
  }

  var [sumCharCounter, setSumCharCounter] = useState(0)





  var checkmark = true;
  return (
  <>
  <Button onClick={() => setShowModal(true)}>
    Add Review +
  </Button>
  <Modal show={showModal} setShow={setShowModal} style={styles.Modal}>
  <ModalHeader>
        <h2 style={{ "marginTop": "0px",
        "marginBottom": "4px"}}>Review This Product</h2>
        <h4 style={{"marginTop": "0px", "marginBottom": "0px"}}
        >About {currentProduct.name}</h4>
      </ModalHeader>
      <ModalBody>

        <form id="form3" onSubmit={handleSubmit}>

              <div>
                {sumCharCounter >= 50 ? <><div>Minimum Reached</div></> : <div>Minimum Required Characters Left: {50 - sumCharCounter}</div>}
              </div>

              <label>Your Review Body</label><br/>
              <textarea
              rows="20" cols="55" maxLength="1000" minLength="50"
              name="body"
              value={inputs.body || ""}
              onChange={(e) => {
                handleChange(e);
                setSumCharCounter(e.target.value.length)
                if (e.target.value.length >= 50) {
                  setMinReached(true);
                } else {
                  setMinReached(false);
                }
              }}
              required
              /><br/>

              <div>{!rated ? <div style={styles.Red}>Please Select a Rating</div> : null}</div>
              {/* Star Rating */}
              <label> Leave a Star Rating </label>
              <div>
                <Rating name="rating" onChange={handleChange} onChangeActive={(e, val) => {setHover(val)}} onClick={() => {setRated(true)}} required />
                <div>{hover !== -1 ? labels[hover]: null}</div>
              </div>
              {/* <br/> */}
              {/* <label>About The {currentProduct.name}</label> */}
              {/* <br/> */}

              <input type='checkbox' name="recommend"id="reco" onChange={recommendHandler}></input>
              <label htmlFor="reco">Do You Recommend This Product</label>
              <br/>

              <AddReviewButtons currentProduct={currentProduct} handleChange={handleChange} currMeta={currMeta}/>

              <label>Review Summary</label><br/>
              <textarea
              rows="2" cols="25" maxLength="60"
              name="summary"
              value={inputs.summary || ""}
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

              {(images.length !== 0) ? images.map((image) => ( <img src={image}></img> )) : null }


              <button type='button' onClick={() => {setShowPicturesModal(true)}}>
                Add Images
              </button>


              <AddImages
              show={showPicturesModal}
              setShow={setShowPicturesModal}
              style={styles.modal}
              setImageOne={setImageOne}
              setImageTwo={setImageTwo}
              setImageThree={setImageThree}
              setImageFour={setImageFour}
              setImageFive={setImageFive}
              handleChange={handleChange}
              image_one={image_one}
              image_two={image_two}
              image_three={image_three}
              image_four={image_four}
              image_five={image_five}
              />
              {/* {showPicturesModal ? */}


              {/* : null} */}
              <div>
              {inputs.picture_one !== undefined ? <img src={inputs.picture_one} style={styles.images}></img> : null}
              {inputs.picture_two !== undefined ? <img src={inputs.picture_two} style={styles.images}></img> : null}
              {inputs.picture_three !== undefined ? <img src={inputs.picture_three} style={styles.images}></img> : null}
              {inputs.picture_four !== undefined ? <img src={inputs.picture_four} style={styles.images}></img> : null}
              {inputs.picture_five !== undefined ? <img src={inputs.picture_five} style={styles.images}></img> : null}
              </div>
        </form>
      </ModalBody>
      <ModalFooter>
          <button onClick={() => setShowModal(false)}>
              Close
          </button>
          { minReached && starsRated ?
          <button variant="primary"
          type="submit" form="form3" value="Submit"
          onSubmit={handleSubmit}>Submit</button>
          : <div style={styles.Red}>Form Incomplete</div>
          }
      </ModalFooter>
  </Modal>
</>
  )
}

export default AddReview;
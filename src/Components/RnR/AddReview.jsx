import React, {useEffect, useState} from 'react';
import config from '../../../config.js';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import ReviewForm from './ReviewForm.jsx'
import Modal, { ModalBody, ModalFooter, ModalHeader } from '../SharedComponents/Modal.jsx'
import Rating from '@mui/material/Rating'
import AddReviewButtons from './AddReviewButtons.jsx'
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





  const [inputs, setInputs] = useState({});
  const [hover, setHover] = useState(-1);
  const [size, setSize] = useState('')
  const [comfort, setComfort] = useState('')
  const [fit, setFit] = useState('')
  const [images, setImages] = useState([]);

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
      event.preventDefault();
      preparePacket(inputs);
      console.log('sending', toSend);
      //Post request to /reviews
      axios.post('/revPost', {
        packet: toSend
      }).then(() => {
        console.log(inputs)
        setShowModal(false);

      })


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

  const [isChecked, setIsChecked] = useState(false);

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
      width: '50px',
      height: '50px'
    }
  }

  //125075 Comfort
  //125073 Fit
  //125074 Length
  //125076 Quality
  //125060 Size
  //125061 Width

  var checkmark = true;
  return (
  <>
  <button onClick={() => setShowModal(true)}>
    Add Review +
  </button>
  <Modal show={showModal} setShow={setShowModal} style={styles.Modal}>
  <ModalHeader>
        <h2 style={{ "marginTop": "0px",
        "marginBottom": "4px"}}>Ask Your Question</h2>
        <h4 style={{"marginTop": "0px", "marginBottom": "0px"}}
        >About {currentProduct.name}</h4>
      </ModalHeader>
      <ModalBody>

        <form id="form3" onSubmit={handleSubmit}>

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

              <AddReviewButtons currentProduct={currentProduct} handleChange={handleChange} currMeta={currMeta}/>

              <label>Review Summary</label><br/>
              <textarea
              rows="2" cols="25" maxLength="60"
              name="summary"
              value={inputs.summary || ""}
              onChange={handleChange}
              required
              /><br/>

              <label>Your Review Body</label><br/>
              <textarea
              rows="6" cols="50" maxlength="1000" minlength="50"
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

              {(images.length !== 0) ? images.map((image) => ( <img src={image}></img> )) : null }


              <button type='button' onClick={() => {setShowPicturesModal(true)}}>
                Add Images
              </button>

              {/* {showPicturesModal ? */}
              <>
              {/* <Modal show={showPicturesModal} setShow={setShowPicturesModal} style={styles.modal}>
              <ModalHeader>
              <h2 style={{ "marginTop": "0px",
              "marginBottom": "4px"}}>Add Images</h2>
              </ModalHeader>

                <ModalBody> */}
                  <form>
              <div>Add Image 1:<input type='text' name='picture_one' onChange={(e) => {
                setImageOne(e.target.value);
                handleChange(e);
                }}></input></div>
                <div>
              {/* {(image_one ? <img src={image_one}></img> : null)} */}
              </div>

              <div>Add Image 2:<input type='text' name='picture_two' onChange={(e) => {
                setImageTwo(e.target.value);
                handleChange(e);
                }}></input></div>
                <div>
              {/* {(image_two ? <img src={image_one}></img> : null)} */}
              </div>

              <div>Add Image 3:<input type='text' name='picture_three' onChange={(e) => {
                setImageThree(e.target.value);
                handleChange(e);
                }}></input></div>
                <div>
              {/* {(image_three ? <img src={image_three}></img> : null)} */}
              </div>

              <div>Add Image 4:<input type='text' name='picture_four' onChange={(e) => {
                setImageFour(e.target.value);
                handleChange(e);
                }}></input></div>
                <div>
              {/* {(image_four ? <img src={image_four}></img> : null)} */}
              </div>

              <div>Add Image 5:<input type='text' name='picture_five' onChange={(e) => {
                setImageFive(e.target.value);
                handleChange(e);
                }}></input></div>
                <div>
              {/* {(image_four ? <img src={image_five}></img> : null)} */}
              </div>

              <button type='button' onClick={() => {setShowPicturesModal(false)}}>Done</button>
              </form>
              {/* </ModalBody>
                </Modal> */}
                </>

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
          <button variant="primary"
          type="submit" form="form3" value="Submit"
          onSubmit={handleSubmit} >Submit</button>
      </ModalFooter>
  </Modal>
</>
  )
}

export default AddReview;
import React, {useEffect, useState} from 'react';
import config from '../../../config.js';
import Modal, { ModalBody, ModalFooter, ModalHeader } from '../SharedComponents/Modal.jsx'



var AddImages = ({show, setShow, style, setImageOne, setImageTwo, setImageThree, setImageFour, setImageFive, handleChange, image_one, image_two, image_three, image_four, image_five}) => {


  return (
    <>
    <Modal show={show} setShow={setShow} style={style} hidden={show}>
    <ModalHeader>
    <h2 style={{ "marginTop": "0px",
    "marginBottom": "4px"}}>Add Images</h2>
    </ModalHeader>

      <ModalBody>
        {/* <fxorm> */}
    <div>Add Image 1:
      <input
      type='text'
      name='picture_one'
      hidden={!show}
      onChange={(e) => {
      setImageOne(e.target.value);
      handleChange(e);
      }}>
      </input>
    </div>
    <div>
    {/* {(image_one ? <img src={image_one}></img> : null)} */}
    </div>

    <div>Add Image 2:<input type='text' name='picture_two' hidden={!show} onChange={(e) => {
      setImageTwo(e.target.value);
      handleChange(e);
      }}></input></div>
      <div>
    {/* {(image_two ? <img src={image_one}></img> : null)} */}
    </div>

    <div>Add Image 3:<input type='text' name='picture_three' hidden={!show} onChange={(e) => {
      setImageThree(e.target.value);
      handleChange(e);
      }}></input></div>
      <div>
    {/* {(image_three ? <img src={image_three}></img> : null)} */}
    </div>

    <div>Add Image 4:<input type='text' name='picture_four' hidden={!show} onChange={(e) => {
      setImageFour(e.target.value);
      handleChange(e);
      }}></input></div>
      <div>
    {/* {(image_four ? <img src={image_four}></img> : null)} */}
    </div>

    <div>Add Image 5:<input type='text' name='picture_five' hidden={!show} onChange={(e) => {
      setImageFive(e.target.value);
      handleChange(e);
      }}></input></div>
      <div>
    {/* {(image_four ? <img src={image_five}></img> : null)} */}
    </div>

    <button type='button' onClick={() => {setShow(false)}}>Done</button>
    {/* </form> */}
    </ModalBody>
      </Modal>
      </>
  )
}

export default AddImages;
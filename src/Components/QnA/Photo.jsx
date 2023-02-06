import React, {useState} from 'react';
import Modalpicture, { ModalBody, ModalFooter, ModalHeader } from '../SharedComponents/Modalpicture.jsx';

let Photo = ({img}) => {
  const [showModal, setShowModal] = useState(false);

  return (
  <>
    <img src={img}
    width="100px"
    height="80px"
    alt="User image upload"
    onClick={(e) => {e.preventDefault(); setShowModal(true)}}/>


    <Modalpicture
      show={showModal}
      setShow={setShowModal}
      hidden={showModal}
      >
        <img src={img}
          className="bigpic"
        />
    </Modalpicture>
  </>

  )
}

export default Photo
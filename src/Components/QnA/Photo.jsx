import React, {useState} from 'react';
import Modalpicture, { ModalBody, ModalFooter, ModalHeader } from '../SharedComponents/Modalpicture.jsx';

let Photo = ({img}) => {
  const [showModal, setShowModal] = useState(false);

  return (
  <>
    <img src={img}
    width="100px"
    height="80px"
    alt="User image failed to load"
    style={{"marginRight": "10px"}}
    onClick={(e) => {e.preventDefault(); setShowModal(true)}}/>


    <Modalpicture
      show={showModal}
      setShow={setShowModal}
      hidden
      >
        <img src={img}
          className="bigpic"
          onClick={() => setShowModal(!showModal)}
        />
    </Modalpicture>
  </>

  )
}

export default Photo
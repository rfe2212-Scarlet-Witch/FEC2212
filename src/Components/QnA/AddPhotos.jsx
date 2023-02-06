import React, { useState } from 'react';
import Modal, { ModalBody, ModalFooter, ModalHeader } from '../SharedComponents/Modal.jsx';

let AddPhotos = ({change, images}) =>{
  const [showModal, setShowModal] = useState(false);
  const [url, setUrl] = useState('')

  const handleChange = (e) => {
    setUrl(e.target.value)
  }
  const handleClick = (e) => {
    e.preventDefault();
    change((prevImages) => [...prevImages, url]);
    setShowModal(false);
    setUrl('');
  }

  return (
    <>
  <button onClick={(e) => {e.preventDefault(); setShowModal(true)}}>
        Add Photos
  </button>

  <Modal
      show={showModal}
      setShow={setShowModal}
      hidden={showModal}
  >
    <ModalBody>
      <label hidden={!showModal}>Please enter photo url</label><br/>
    <input
    type="url"
    value={url}
    onChange={handleChange}
    hidden={!showModal}
    >
    </input>
    <br/>
    <button hidden={!showModal}
    onClick={handleClick}> Add photo</button>
    </ModalBody>

  </Modal>
    </>
  )
}

export default AddPhotos;
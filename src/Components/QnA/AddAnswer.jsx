import React, { useState } from 'react';
import Modal, { ModalBody, ModalFooter, ModalHeader } from '../SharedComponents/Modal.jsx';

function AddAnswer({prodId, prodName, question}) {
  const [showModal, setShowModal] = useState(false);
  const [inputs, setInputs] = useState({});

  const handleSubmit = (event) => {
      //make axios request to post
      // term should be POST /qa/questions
      // inputs.product_id = prodId
      event.preventDefault();
      console.log(inputs)
      setShowModal(false);

  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  return (
  <>
  <button onClick={() => setShowModal(true)}>
  Add Answer
  </button>
  <Modal
      show={showModal}
      setShow={setShowModal}
  >
      <ModalHeader>
        <h2 style={{ "marginTop": "0px",
        "marginBottom": "4px"}}>Submit your Answer</h2>
        <h4 style={{"marginTop": "0px", "marginBottom": "0px"}}
        >{prodName}: {question}</h4>
      </ModalHeader>
      <ModalBody>
        <form id="form2" onSubmit={handleSubmit}>

              <label>Your Answer</label><br/>
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
               placeholder="Example: jack543!" /><br/>
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
               placeholder="Example: jack@email.com" /><br/>
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
          type="submit" form="form2" value="Submit"
          onSubmit={handleSubmit} >Submit</button>
      </ModalFooter>
  </Modal>
</>
);
}

export default AddAnswer
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
// import axios from 'axios';

function Addproduct(){
    // const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);
    // cosnt data={
    //     name:"mansi",
        
    // }

    const form = document.querySelector("#formElement");

    console.log(form) //This says Null

    const submitApplication = (e) => {
        e.preventDefault();
        const formData = new FormData(form);

        // axios.post('http://localhost:3001/stats', formData, {
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     }
        // }).then(() => {
        //     console.log("Successfully Sent!")
        // });
        console.log(formData)
    };

    const saveChangeValue = (event) => {
        //  const formData = new FormData(event.currentTarget);

        const data = {
             //name: event.target
            //  name: formData.get("name"),
            //  size: formData.get("size"),
            //  color: formData.get("color"),
            //  qty: formData.get("qty")
        }
        // console.log(formData)
    };


    const handleClose = () => setOpen(false);
    const handleShow = () => setOpen(true);
    
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add Product
        </Button>
  
        <Modal show={open} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <Form>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Tshirt"
                  autoFocus
                />
              </Form.Group> */}
              {/* <Form.Group className="mb-3" controlId="color">
                <Form.Label>Color</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Black"
                  autoFocus
                />
              </Form.Group> */}
              {/* TODO :: Convert into dropdown */}
              {/* <Form.Group className="mb-3" controlId="size">
                <Form.Label>Size</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="M"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="qty">
                <Form.Label>Qty</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="2"
                  autoFocus
                />
              </Form.Group> */}
              {/* <Form.Group
                className="mb-3"
                controlId="example"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group> */}
            {/* </Form> */}
            <form id="formElement" encType="multipart/form-data" method="post">
                <input type="text" placeholder="Full Name" name="fname" />
                <input type="file" name="uploaded_file" />
                <button onClick={submitApplication} >Submit for Review</button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={saveChangeValue}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}
export default Addproduct;
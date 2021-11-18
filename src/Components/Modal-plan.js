import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';
import { PlusCircleFill } from 'react-bootstrap-icons';
import { Form } from "react-bootstrap";



export default function PlanModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [red, setRed] = useState ('');

  const handleMess = () => {
    setRed (`Bummer! We can't create this planet right now. Probably a black hole in the way. Try later please.`)
   };
 






  return (
    <>
      <PlusCircleFill id="plus-create"  onClick={handleShow}/>
      

      <Modal show={show} onHide={handleClose} id="planet-modal">
        <Modal.Header closeButton>
          <Modal.Title className="mx-5" id="pm-title">Planet</Modal.Title>
        </Modal.Header>
        <Form className="mx-5">
        <Modal.Body>
          
            <Form.Group className="mb-3" controlId="formBasicImage">
                <Form.Label id="pm-ilabel">Image</Form.Label>
                <Form.Control type="url" id="modal-background" />
            
                <Form.Text className="text-muted" id="pm-ilabelt">
                  Paste the URL of a JPG or PNG of max 20 kb
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="floatingTextarea">
                <Form.Label id="pm-nlabel">Name</Form.Label>
                <Form.Control type="text" id="modal-background" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="floatingTextarea2">
                <Form.Label id="pm-dlabel">Description</Form.Label>   
                <Form.Control type="text"  style={{ height: '100px' }} id="modal-background" />
            </Form.Group>
        
            
            <p className="text-danger">{ red } </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} id="mcancel-btn" >
            Cancel
          </Button>
          <Button variant="primary" onClick={handleMess}  type="submit" id="mcreate-btn" >
            Create planet
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
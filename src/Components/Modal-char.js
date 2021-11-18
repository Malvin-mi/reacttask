import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';
import { PlusCircleFill } from 'react-bootstrap-icons';
import { Form } from "react-bootstrap";
import character6 from "../images/characters/character6.png"


export default function CharModal() {
  const [show, setShow] = useState(false);
 
  const handleShow = () => setShow(true);

  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
 

const handleClose = () => {
    setShow(false);
    let singCharacter = {
        image: character6,
        title: name,
        description,
        body: '23 Friends',
        id: 10
    }
    localStorage.setItem('singChar', JSON.stringify(singCharacter));
    console.log(singCharacter)
}

  return (
    <>
      <PlusCircleFill id="plus-create"  onClick={handleShow}/>
      

      <Modal show={show} onHide={handleClose} id="planet-modal" className="">
        <Modal.Header closeButton>
          <Modal.Title className="mx-5" id="pm-title">Character</Modal.Title>
        </Modal.Header>
        <Form className="mx-5">
        <Modal.Body>
          
            <Form.Group className="mb-3" controlId="formBasicImage">
                <Form.Label id="pm-ilabel">Image</Form.Label>
                <Form.Control type="url" id="modal-background" value= {image} onChange= {(e) => setImage(e.target.value)}/>
                <p>{image}</p>
                <Form.Text className="text-muted" id="pm-ilabelt">
                  Paste the URL of a JPG or PNG of max 20 kb
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="floatingTextarea">
                <Form.Label id="pm-nlabel">Name</Form.Label>
                <Form.Control type="text" id="modal-background" value= {name} onChange= {(e) => setName(e.target.value)}/>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="floatingTextarea2">
                <Form.Label id="pm-dlabel">Description</Form.Label>   
                <Form.Control type="text"  style={{ height: '100px' }} id="modal-background" value= {description} onChange= {(e) => setDescription(e.target.value)}/>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formSelect">
            <Form.Label id="pm-dlabel">Friends</Form.Label>
            <Form.Select aria-label="Default select example">
                
                <option>pick a friend</option>
                <option value="Jane Cooper">Jane Cooper</option>
                <option value="Eleanor Pena">Eleanor Pena</option>
                <option value="ristin Watson">Kristin Watson</option>
                <option value="Brooklyn Simmons">Brooklyn Simmons</option>
                <option value="Cody Fischer">Cody Fischer</option>
                <option value="Courtney Henry">Courtney Henry</option>
                <option value="Annette Black">Annette Black</option>
            </Form.Select>
            </Form.Group>
        
            
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} id="mcancel-btn">
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}  type="submit" id="mcreate-btn">
            Create character
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
import { useState } from "react";
import Rating from '@mui/material/Rating';
import { Modal,Button,Form } from "react-bootstrap";
const AddMovie=({movies,setMovies})=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [titleP,setTitleP] = useState('')
    const [description,setDescription] = useState('')
    const [posterURL,setPosterURL] = useState('')
    const [rating,setRating] = useState(0)
    const handleAdd =()=> setMovies([...movies,{title : titleP,description,posterURL,rating,id : Math.random()}])
    return(
        <>
        <Button variant="outline-success" onClick={handleShow}>
          Add Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control onChange={(e)=> setTitleP(e.target.value)} type="text" placeholder="Enter title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control onChange={(e)=> setDescription(e.target.value)} type="text" placeholder="Enter description" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Pic</Form.Label>
        <Form.Control onChange={(e)=> setPosterURL(e.target.value)} type="text" placeholder="Enter pic" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rating</Form.Label>
        <br/>
        <Rating name="simple-controlled" onChange={(e)=>setRating(e.target.value)}/>
      </Form.Group>

    </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{handleAdd();handleClose()}}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default AddMovie
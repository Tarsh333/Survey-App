import React, { useState } from 'react'
import { Modal, Button, Form, CloseButton } from 'react-bootstrap';

const ModalComponent = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => setShow(true);
    return (
        <div>
            <>
                <Button className="display-none" variant="primary" onClick={handleShow}>
                    Give Survey
                </Button>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    centered
                    animation={false}
                >
                    <Modal.Header >
                        <Modal.Title>{props.title}</Modal.Title>
                    <CloseButton onClick={()=>{props.changeIndex(-1);handleClose()}}/>
                    </Modal.Header>
                    <Modal.Body>
                        {props.question}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" className="mt-2">
                            <Form.Control as="textarea" rows={3} placeholder="Your Answer" value={props.state} onChange={(e)=>{props.changeModalState(e.target.value,props.index)}}/>
                        </Form.Group>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={()=>{handleClose();props.previous()}} >
                            Go Back
                        </Button>
                        <Button variant="primary" onClick={()=>{props.next();handleClose()}}>Save</Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    )
}

export default ModalComponent

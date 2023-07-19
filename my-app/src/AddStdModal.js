import React, {Component} from 'react';
import{Modal, Button, Row, Col, Form, Image} from 'react-bootstrap';

export class AddStdModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleFileSelected=this.handleFileSelected.bind(this);
    }

    stdphoto = "anonymous.png";
    imagesrc = process.env.REACT_APP_PHOTOPATH+this.stdphoto;

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'Student',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                StudentID:null,
                StudentFirstName:event.target.StudentFirstName.value,
                StudentLastName:event.target.StudentLastName.value,
                StudentPhoto:this.stdphoto,
                StudentNote:event.target.StudentNote.value,
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }

    handleFileSelected(event){
        event.preventDefault();
        this.stdphoto=event.target.files[0].name;
        const formData = new FormData();
        formData.append(
            "myFile",
            event.target.files[0],
            event.target.files[0].name
        );

        fetch(process.env.REACT_APP_API+'Student/SaveFile',{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then((result)=>{
            this.imagesrc=process.env.REACT_APP_PHOTOPATH+result;
        },
        (error)=>{
            alert('Failed');
        })
        
    }

    render(){
        return(
            <div className="container">
                <Modal {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                    <Modal.Header clooseButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Add Student
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}> 
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="StudentFirstName">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" name="StudentFirstName" required placeholder="Enter First Name"/>
                                    </Form.Group>

                                    <Form.Group controlId="StudentLastName">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" name="StudentLastName" required placeholder="Enter Last Name"/>
                                    </Form.Group>

                                    <Form.Group controlId="StudentNote">
                                        <Form.Label>Optional Note</Form.Label>
                                        <Form.Control type="text" name="StudentNote" placeholder="Optional Note"/>
                                    </Form.Group>                                

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Add Student
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>

                            <Col sm={6}>
                                <Image width="200px" height="200px" src={this.imagesrc}/>
                                <input onChange={this.handleFileSelected} type="File"/>
                            </Col>
                        </Row>
                        
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>

                </Modal>
            </div>
        )
    }
}
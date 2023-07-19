import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form, Image} from 'react-bootstrap';

export class EditStdModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    stdphoto = "anonymous.png";
    imagesrc = process.env.REACT_APP_PHOTOPATH+this.stdphoto;

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'Student',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                StudentID:event.target.StudentID.value,
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
        return (
            <div className="container">

                <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                    <Modal.Header clooseButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Edit Student
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="StudentID">
                                        <Form.Label>StudentID</Form.Label>
                                        <Form.Control type="text" name="StudentID" required
                                        disabled
                                        defaultValue={this.props.stdid} 
                                        placeholder="StudentFirstName"/>
                                    </Form.Group>

                                    <Form.Group controlId="StudentFirstName">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" name="StudentFirstName" required 
                                        defaultValue={this.props.stdfirst}
                                        placeholder="StudentFirstName"/>
                                    </Form.Group>

                                    <Form.Group controlId="StudentLastName">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" name="StudentLastName" required 
                                        defaultValue={this.props.stdlast}
                                        placeholder="StudentLastName"/>
                                    </Form.Group>

                                    <Form.Group controlId="StudentNote">
                                        <Form.Label>Optional Notes</Form.Label>
                                        <Form.Control type="text" name="StudentNote" required 
                                        defaultValue={this.props.stdnote}
                                        placeholder="StudentNote"/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update Student
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
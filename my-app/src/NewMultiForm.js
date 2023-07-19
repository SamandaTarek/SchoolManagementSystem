import React, { useState } from 'react'
import { Form, Col } from 'react-bootstrap'
import Row from "react-bootstrap/row"
import Container from "react-bootstrap/container"
import Button from "react-bootstrap/Button"

// constructor=(props)=>{
//     // super(props);
//     this.state={std:[] }
// }
// const refreshList=()=>{
//     fetch(process.env.REACT_APP_API+'Student')
//     .then(response=>response.json())
//     .then(data=>{
//         this.setState({stds:data})
//     });
//     }

//   const componentDidMount=()=>{
//         this.refreshList();
//     }

//  const componentDidUpdate=()=>{
//         this.refreshList();
//     }

const NewMulti = () => {

  
  const [stds, setStds] = useState([
    {
    StudentID: 1,
    StudentFirstName: "",
    StudentLastName: "",
    StudentPhoto:"",
    StudentNote:""
    }])

  

  const handleChangeInput = (i, e) => {
    console.log(e.target.value);
    const values = [...stds]
    values[i][e.target.name] = e.target.value
    setStds(values)
  }


  const handleAdd = (StudentID) => {
    setStds([...stds, { StudentID: StudentID + 2, StudentFirstName: '', StudentLastName: '',StudentPhoto:'',StudentNote:'' }])
  }

  const handleSubtract = (i) => {
    const values = [...stds]
    values.splice(i, 1)
    setStds([...values])
  }

  return (
    <div>
      <Container>
        <Row>
          <Form> 
            <Form.Group className="mb-3" controlId="formBasicEmail">
              {stds?.map((std, i) => (
                <div key={std.StudentID}>
                  <Row className="mt-5">
                    <Col md>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        required
                        placeholder="Enter First Name"
                        name="StudentFirstName"
                        value={std.StudentFirstName}
                        onChange={e => handleChangeInput(i, e)}
                      />
                    </Col>
                    <Col md>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        required
                        placeholder="Enter Last Name"
                        name="StudentLastName"
                        value={std.StudentLastName}
                        onChange={e => handleChangeInput(i, e)}
                      />
                    </Col>
                    <Col md>
                      <Form.Label>Optional Note</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Note"
                        name="StudentNote"
                        value={std.StudentNote}
                        onChange={e => handleChangeInput(i, e)}
                      />
                    </Col>
                    <Col md>
                      <Button onClick={() => handleAdd(i)} className="mt-4 mr-5" variant="success">
                        <i className="fas fa-plus"></i>
                        + 1
                      </Button>
                      <Button disabled={std.StudentID === 1} onClick={() => handleSubtract(i)} className="mt-4" variant="danger">
                        <i className="fas fa-minus"></i>
                        Del
                      </Button>
                    </Col>
                  </Row>
                </div>
              ))}
            </Form.Group>
            <Button type="submit" variant="dark" style={{ float: "left" }} >
              Send to Database
            </Button>
          </Form>

          {stds?.map(std =>
            <>
              <div className="m-5">
                <div>{std.StudentID}</div>
                <div>{std.StudentFirstName}</div>
                <div>{std.StudentLastName}</div>
                <div>{std.StudentNote}</div>
              </div>
            </>
          )}         
        </Row>
      </Container>
    </div>  
  )
}

export default NewMulti
import React,{Component} from 'react';

import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import { AddStdModal } from './AddStdModal';
import { EditStdModal } from './EditStdModal';

export class Student extends Component{

    constructor(props){
        super(props);
        this.state={std:[], addModalShow:false, editModalShow:false }
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'Student')
        .then(response=>response.json())
        .then(data=>{
            this.setState({stds:data})
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteStd(stdid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'Student/'+stdid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render(){
        const {stds, stdid, stdfirst, stdlast, stdphoto, stdnote}=this.state;
        let addModalClose=()=> this.setState({addModalShow:false});
        let editModalClose=()=> this.setState({editModalShow:false});
        return(    
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Student ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Photo</th>
                        <th>Note</th>
                        <th>Options</th>
                        </tr>

                    </thead>
                    <tbody>
                        {stds?.map(std=>
                            <tr key={std.StudentID}>
                                <td>{std.StudentID}</td>
                                <td>{std.StudentFirstName}</td>
                                <td>{std.StudentLastName}</td>
                                <td>{std.StudentPhoto}</td>
                                <td>{std.StudentNote}</td>
                                <td>
                                <ButtonToolbar>
                                    <Button className="mr-2" variant="info"
                                    onClick={()=>this.setState({editModalShow:true,
                                    stdid:std.StudentID, stdfirst:std.StudentFirstName, 
                                    stdlast:std.StudentLastName, stdphoto:std.StudentPhoto, 
                                    stdnote:std.StudentNote })}>
                                        Edit
                                    </Button>
                                    <Button className="mr-2" variant="danger"
                                    onClick={()=>this.deleteStd(std.StudentID)}>
                                        Delete
                                    </Button>
                                        <EditStdModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            stdid={stdid}
                                            stdfirst={stdfirst}
                                            stdlast={stdlast}
                                            stdphoto={stdphoto}
                                            stdnote={stdnote}/>
                                </ButtonToolbar>
                                </td>
                            </tr>)}
                    </tbody>
                </Table>

                <ButtonToolbar>
                    <tr>
                    <Button className="mr-2" variant='secondary'
                        onClick={()=>this.setState({addModalShow:true})}>
                            Add Student
                    </Button>
                    

                    <AddStdModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                    </tr>
                    <tr>
                    <Button className="mr-2" variant='dark'>
                            Export To Excel
                    </Button>
                    <AddStdModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                    </tr>
                </ButtonToolbar>
                
            </div>
        )
    }
}
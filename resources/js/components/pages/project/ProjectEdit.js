import React, { Component } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { updateProject } from '../../../services/ProjectService';

class CreateProject extends Component {
    state = { 
        isLoading: false,
        name:this.props.project.name,
        description:this.props.project.description,
        status:this.props.project.status,
        project_id:this.props.project.id,
        errors:{},
    };

    componentDidMount() {};

    changeInput  = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    submitForm = async(e) => {
        e.preventDefault();
        const { history } = this.props;

        this.setState({ isLoading: true });
        const postBody = {
            name: this.state.name,
            description: this.state.description,
            status: this.state.status,
        };
        const id = this.state.project_id;
        const submitDataStatus = await updateProject(id, postBody);
        if(submitDataStatus.success){
            this.setState({
                name:'',
                description:'',
                isLoading: false,
            });
            this.props.onCompleteEditProject(submitDataStatus.data);
        }else{
            this.setState({
                errors:submitDataStatus.errors,
                isLoading: false,
            }); 
        }
    };
     
    
    render() { 
        return ( 
            <>
            <div className="card mb-3">
                <div className="card-body">
                    <Form onSubmit={this.submitForm}>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group controlId="name">
                                    <Form.Label>Project Name</Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    placeholder="Enter project name"
                                    name="name"
                                    value={this.state.name}
                                    onChange={(e) => this.changeInput(e)}
                                    />
                                </Form.Group>
                                {
                                    this.state.errors && this.state.errors.name && 
                                    (
                                        <Alert variant="danger">{this.state.errors.name[0]}</Alert>
                                    )
                                }
                            </div>
                            <div className="col-md-6">
                                <Form.Group controlId="description">
                                    <Form.Label>Project Description</Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    placeholder="Enter project description" 
                                    as="textarea" rows={1}
                                    name="description"
                                    value={this.state.description}
                                    onChange={(e) => this.changeInput(e)}
                                    />
                                </Form.Group>
                                {
                                    this.state.errors && this.state.errors.description && 
                                    (
                                        <Alert variant="danger">{this.state.errors.description[0]}</Alert>
                                    )
                                }
                            </div>
                            <div className="col-md-6">
                                <Form.Group>
                                    <Form.Label>Project Status</Form.Label>
                                    <Form.Control as="select"
                                        name="status"
                                        value={this.state.status}
                                        onChange={(e) => this.changeInput(e)}
                                    >
                                        <option value={0}>Pending</option>
                                        <option value={1}>Complete</option>
                                    </Form.Control>
                                </Form.Group>
                                {
                                    this.state.errors && this.state.errors.status && 
                                    (
                                        <Alert variant="danger">{this.state.errors.status[0]}</Alert>
                                    )
                                }
                            </div>
                        </div>
                        
                            {
                                this.state.isLoading && 
                                (
                                    <Button variant="info">
                                    Project updating...
                                    </Button>
                                )
                            }
                            {
                                !this.state.isLoading && 
                                (
                                    <Button variant="primary" type="submit">
                                    Update Project
                                    </Button>
                                )
                            }
                    </Form>
                </div>
            </div>
            </>     
         );
    }
}
 
export default withRouter(CreateProject);


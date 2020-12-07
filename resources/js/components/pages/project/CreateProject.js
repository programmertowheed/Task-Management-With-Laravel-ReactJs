import React, { Component } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { storetProject } from '../../../services/ProjectService';
import { PUBLIC_URL } from '../../constants';

class CreateProject extends Component {
    state = { 
        isLoading: false,
        name:'',
        description:'',
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
        };
        const submitDataStatus = await storetProject(postBody);
        if(submitDataStatus.success){
            this.setState({
                name:'',
                description:'',
                isLoading: false,
            });
            history.push(`${PUBLIC_URL}projects`);
        }else{
            this.setState({
                errors:submitDataStatus.errors,
                isLoading: false,
            }); 
        }
    };
     
    
    render() { 
        return ( 
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="header-part mt-3 mb-3">
                            <div className="float-left">
                                <h2>
                                    New Project
                                </h2>
                            </div>
                            <div className="float-right">
                                <Link className="btn btn-info text-white" to={`${PUBLIC_URL}projects`}>
                                    See All Projects
                                </Link>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        
                        <div className="card mb-3">
                            <div className="card-body">
                                <Form onSubmit={this.submitForm}>
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

                                    <Form.Group controlId="description">
                                        <Form.Label>Project Description</Form.Label>
                                        <Form.Control 
                                        type="text" 
                                        placeholder="Enter project description" 
                                        as="textarea" rows={5}
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

                                {
                                    this.state.isLoading && 
                                    (
                                        <Button variant="info">
                                        Project saving...
                                        </Button>
                                    )
                                }
                                {
                                    !this.state.isLoading && 
                                    (
                                        <Button variant="primary" type="submit">
                                        Save Project
                                        </Button>
                                    )
                                }
                                </Form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
         );
    }
}
 
export default withRouter(CreateProject);



import React, { Component } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { storetTask } from '../../../services/TaskService';
import { PUBLIC_URL } from '../../constants';

class CreateTask extends Component {
    state = { 
        name: '',
        description: '',
        isLoading: false,
    };

    componentDidMount() {}

    changeInput  = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    submitForm = async(e) => {
        e.preventDefault();
        this.setState({ isLoading: true });
        const postBody = {
            name: this.state.name,
            description: this.state.description,
            project_id: this.props.project_id,
        };
        const submitDataStatus = await storetTask(postBody);
        if(submitDataStatus.success){
            this.setState({
                name:'',
                description:'',
                isLoading: false,
            });
            this.props.onCompleteTaskCreate(submitDataStatus.data);
        }else{
            this.setState({
                errors:submitDataStatus.errors,
                isLoading: false,
            }); 
        }
    };
     
    
    render() { 
        return ( 
            
            <div className="card mt-3 mb-3">
                <div className="card-header"><h2>New Task</h2></div>
                <div className="card-body">
                    <Form onSubmit={this.submitForm}>
                        <div className="col-md-6 float-left">
                            <Form.Group controlId="name">
                                <Form.Label>Task Name</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder="Enter task name"
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
                        <div className="col-md-6 float-right">
                            <Form.Group controlId="description">
                                <Form.Label>Task Description</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder="Enter task description" 
                                as="textarea" rows={3}
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
                        <div className="clearfix"></div>
                        <div className="col-md-12">
                            {
                                this.state.isLoading && 
                                (
                                    <Button variant="info">
                                    Task saving...
                                    </Button>
                                )
                            }
                            {
                                !this.state.isLoading && 
                                (
                                    <Button variant="primary" type="submit">
                                    Save Task
                                    </Button>
                                )
                            }
                        </div>
                    </Form>
                </div>
            </div>
         );
    }
}
 
export default CreateTask;


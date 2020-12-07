import React, { Component } from 'react';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { registerUser } from '../../../services/AuthService';
import { PUBLIC_URL } from '../../constants';

class Register extends Component {
    state = { 
        isLoading: false,
        name:'',
        email:'',
        password:'',
        password_confirmation:'',
        errors:{},
        message:'',
        validated:false,
    };

    componentDidMount() {};

    changeInput  = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    submitForm = async(e) => {
        const form = e.currentTarget;
        if(form.checkValidity() === false){
            e.preventDefault();
            e.stopPropagation();
        }
        this.setState({ validated: true });

        if(form.checkValidity() !== false){
            e.preventDefault();
            const { history } = this.props;

            this.setState({ isLoading: true });
            const postBody = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                password_confirmation: this.state.password_confirmation,
            };
            const submitDataStatus = await registerUser(postBody);
            if(submitDataStatus.success){
                this.setState({
                    name:'',
                    email:'',
                    password:'',
                    password_confirmation:'',
                    isLoading: false,
                    errors:{},
                    message:submitDataStatus.message,
                });
                localStorage.setItem("loginData",JSON.stringify(submitDataStatus));
                window.location.href = PUBLIC_URL;
            }else{
                this.setState({
                    errors:submitDataStatus.errors,
                    isLoading: false,
                    message:'',
                }); 
                localStorage.setItem("loginData",null);
            }
        }
        
    };
     
    
    render() { 
        return ( 
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="header-part mt-3 mb-3">
                            <div className="">
                                <h2>
                                   Sign Up
                                </h2>
                            </div>
                        </div>
                        
                        <div className="card mb-3">
                            <div className="card-body">
                                <Form noValidate validated={this.state.validated} onSubmit={this.submitForm}>
                                    <div className="row">
                                        <div className="col-12">
                                            {
                                                this.state.message && this.state.message.length > 0 &&
                                                (
                                                    <Alert variant="success">{this.state.message}</Alert>
                                                )
                                            }
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group controlId="name">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control 
                                                required
                                                type="text" 
                                                placeholder="Enter your name"
                                                name="name"
                                                value={this.state.name}
                                                onChange={(e) => this.changeInput(e)}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please enter your name.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            
                                            {
                                                this.state.errors && this.state.errors.name && 
                                                (
                                                    <Alert variant="danger">{this.state.errors.name[0]}</Alert>
                                                )
                                            }
                                        </div>

                                        <div className="col-md-6">
                                            <Form.Group controlId="email">
                                                <Form.Label>Email Address</Form.Label>
                                                <Form.Control 
                                                required
                                                type="email" 
                                                placeholder="Enter your email" 
                                                name="email"
                                                value={this.state.email}
                                                onChange={(e) => this.changeInput(e)}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please enter valid email address.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            
                                            {
                                                this.state.errors && this.state.errors.email && 
                                                (
                                                    <Alert variant="danger">{this.state.errors.email[0]}</Alert>
                                                )
                                            }
                                        </div>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group controlId="password">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control 
                                                required
                                                type="password" 
                                                placeholder="Enter your password"
                                                name="password"
                                                value={this.state.password}
                                                onChange={(e) => this.changeInput(e)}
                                                minLength={8}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please enter your password.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            
                                            {
                                                this.state.errors && this.state.errors.password && 
                                                (
                                                    <Alert variant="danger">{this.state.errors.password[0]}</Alert>
                                                )
                                            }
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group controlId="password_confirmation">
                                                <Form.Label>Re-enter password</Form.Label>
                                                <Form.Control 
                                                required
                                                type="password" 
                                                placeholder="Re-enter your password" 
                                                name="password_confirmation"
                                                value={this.state.password_confirmation}
                                                onChange={(e) => this.changeInput(e)}
                                                minLength={8}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please re-enter your password.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            
                                            {
                                                this.state.errors && this.state.errors.password_confirmation && 
                                                (
                                                    <Alert variant="danger">{this.state.errors.password_confirmation[0]}</Alert>
                                                )
                                            }
                                        </div>
                                    </div>
                                   
                                    

                                    


                                {
                                this.state.isLoading && 
                                    (
                                        <div className="text-center">
                                            <Spinner animation="border" role="status">
                                                <span className="sr-only">Signing Up...</span>
                                            </Spinner>
                                        </div>
                                    )
                                }

                                {
                                    this.state.isLoading && 
                                    (
                                        <Button variant="info" disabled>
                                            Signing Up...
                                        </Button>
                                    )
                                }
                                {
                                    !this.state.isLoading && 
                                    (
                                        <Button variant="primary" type="submit">
                                            Sing Up
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
 
export default withRouter(Register);


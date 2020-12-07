import React, { Component } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../../../services/AuthService';
import { PUBLIC_URL } from '../../constants';

class Login extends Component {
    state = { 
        email:'',
        password:'',
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
            const postBody = {
                email: this.state.email,
                password: this.state.password,
            };
            const submitDataStatus = await loginUser(postBody);
            if(submitDataStatus.success){
                this.setState({
                    email:'',
                    password:'',
                    errors:{},
                    message:"",
                });
                localStorage.setItem("loginData",JSON.stringify(submitDataStatus));
                window.location.href = PUBLIC_URL;
            }else if(submitDataStatus.message && submitDataStatus.errors == null){
                this.setState({
                    message:submitDataStatus.message,
                    errors:{},
                });
                localStorage.setItem("loginData",null);
            }else{
                this.setState({
                    errors:submitDataStatus.errors,
                    message:"",
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
                        <div className="row">
                            <div className="col-md-4 m-auto">
                                <div className="header-part mt-3 mb-3 text-center">
                                    <h2>
                                        Sign In
                                    </h2>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-md-4 m-auto">
                                <div className="card mb-3">
                                    <div className="card-body">
                                            {
                                                this.state.message && this.state.message.length > 0 &&
                                                (
                                                    <Alert 
                                                    variant="danger"
                                                    onClose={() => this.setState({message:''})}
                                                    dismissible
                                                    >
                                                        {this.state.message}
                                                    </Alert>
                                                )
                                            }
                                        <Form noValidate validated={this.state.validated} onSubmit={this.submitForm}>
                                            <Form.Group controlId="email">
                                                <Form.Label>Email Address</Form.Label>
                                                <Form.Control 
                                                required
                                                type="email" 
                                                placeholder="Enter your email address"
                                                name="email"
                                                value={this.state.email}
                                                onChange={(e) => this.changeInput(e)}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please enter valid eamil address.
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            {
                                                this.state.errors && this.state.errors.email && 
                                                (
                                                    <Alert variant="danger">{this.state.errors.email[0]}</Alert>
                                                )
                                            }

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
                                    
                                            <div className="text-center">
                                                <Button variant="primary" className="text-center" type="submit" block>
                                                    Sign In
                                                </Button>
                                            </div>
                                            
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
         );
    }
}
 
export default withRouter(Login);


import ReactDOM from "react-dom";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Page
import Header from "./inc/Header";
import Footer from "./inc/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectList from "./pages/project/ProjectList";
import { PUBLIC_URL } from "./constants";
import CreateProject from "./pages/project/CreateProject";
import ProjectView from "./pages/project/ProjectView";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import { checkIfAuthenticated } from "../services/AuthService";
import AuthenticatedRoutes from "./AuthenticatedRoutes";

class App extends Component {
    state = {
        user: {},
        isLoggedIn: false
    };

    componentDidMount() {
        if (checkIfAuthenticated()) {
            this.setState({
                user: checkIfAuthenticated(),
                isLoggedIn: true
            });
        }
    }

    // checkAuthenticated = () =>{
    //     const loginStatus = this.state.isLoggedIn;
    //     if(loginStatus){
    //         return true;
    //     }
    //     return false;
    // }

    render() {
        return (
            <>
                <Router>
                    <Header authData={this.state} />
                    <Switch>
                        <Route
                            path={`${PUBLIC_URL}`}
                            exact={true}
                            component={Home}
                        />

                        {/* Private Authenticated Routes */}
                        <AuthenticatedRoutes
                            exact={true}
                            authed={this.state.isLoggedIn}
                            //authed={this.checkAuthenticated()}
                            path={`${PUBLIC_URL}projects`}
                            component={ProjectList}
                        />

                        <AuthenticatedRoutes
                            exact={true}
                            authed={this.state.isLoggedIn}
                            path={`${PUBLIC_URL}projects/create`}
                            component={CreateProject}
                        />

                        <AuthenticatedRoutes
                            exact={true}
                            authed={this.state.isLoggedIn}
                            path={`${PUBLIC_URL}projects/view/:id`}
                            component={ProjectView}
                        />
                        {/* Private Authenticated Routes */}

                        <Route
                            path={`${PUBLIC_URL}about`}
                            exact={true}
                            component={About}
                        />

                        <Route
                            path={`${PUBLIC_URL}contact`}
                            exact={true}
                            component={Contact}
                        />

                        <Route
                            path={`${PUBLIC_URL}register`}
                            exact={true}
                            render={(props) => (
                                <Register {...props} isAuthed={this.state.isLoggedIn} />
                            )}
                        />

                        <Route
                            path={`${PUBLIC_URL}login`}
                            exact={true}
                            render={(props) => (
                                <Login {...props} isAuthed={this.state.isLoggedIn} />
                            )}
                        />
                    </Switch>
                    <Footer />
                </Router>
            </>
        );
    }
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}

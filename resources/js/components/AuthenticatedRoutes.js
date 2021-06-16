import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  useLocation,
  useHistory,
  withRouter
} from "react-router-dom";
import { PUBLIC_URL } from './constants';


// function AuthenticatedRoutes ({component: Component, authed, ...rest}) {
//     return (
//         <Route
//             {...rest}
//             render={(props) => 
//             authed === true
//               ? (<Component {...props} />)
//               : (<Redirect 
//                     to={{ 
//                         pathname: `${PUBLIC_URL}login`, 
//                         state: {from: props.location } 
//                       }} 
//                 />)
//             }
//         />
//     )
// }

const AuthenticatedRoutes = ({children,authed,...rest}) => {
  return(
    <Route {...rest} render={({ location })=> {
      return authed === true
        ? children 
        : <Redirect to={{
          pathname: '/login',
          state: {from: location } 
        }} />
    }}/>
  )
}
 
export default AuthenticatedRoutes;
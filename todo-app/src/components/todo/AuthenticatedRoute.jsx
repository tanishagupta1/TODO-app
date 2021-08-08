import React, { Component } from "react";
import { Route, Redirect } from 'react-router-dom';
import AuthenticateService from "./AuthenticateService";


class AuthenticatedRoute extends Component {

    render(){

        if(AuthenticateService.isUserLoggedIn()){
           return  <Route {...this.props}/>
        }
        else{
           return  <Redirect to="/login/"/>
        }

    }
}

export default AuthenticatedRoute
        
      
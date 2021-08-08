import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Importing Components

import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import ListTodoComponent from './ListTodoComponent.jsx'
import HeaderComponent from './HeaderComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'
import FooterComponent from './FooterComponent'
import LogoutComponent from './LogoutComponent'
import TodoComponent from './TodoComponent'


class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
               
                {/* This is My todo application */}
                <Router>
                    {/* Switch tag helps to choose either of the route */}
                    <HeaderComponent />
                    <Switch>
                        {/* default */}
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <AuthenticatedRoute path="/logout" component={LogoutComponent} />
                        <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />
                        <AuthenticatedRoute path="/todolist/:id" component={TodoComponent} />
                        <AuthenticatedRoute path="/todolist" component={ListTodoComponent} />
                        
                        <Route path="" component={ErrorComponent} />
                    </Switch>
                    <FooterComponent />
                </Router>
                
            </div>
        )
    }
}


export default TodoApp
import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom' what was happening here
import { withRouter, Link} from 'react-router-dom'
import AuthenticateService from './AuthenticateService.js'


//Header Component
class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticateService.isUserLoggedIn();
        // console.log("the status is "+isUserLoggedIn);
        return (
            <header className="head">
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://google.com" className="navbar-brand">Todo App</a></div>
                    <ul className="navbar-nav" >
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/Tanisha">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todolist">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                       { isUserLoggedIn && <li>< Link className="nav-link" to="/logout" onClick={AuthenticateService.logout}>Logout</Link></li>}
                    </ul>
                </nav>

            </header>
        )
    }
}

//withRouter ensures that the menus are updated whenever the Router is called
export default withRouter(HeaderComponent)

// Login Component
import React, { Component } from 'react'
import AuthenticateService from './AuthenticateService.js'


// Login Component
class LoginComponent extends Component {
    constructor(props) {
        super(props)// this will ensure that any properties is passed through super
        this.state = {
            Username: '',
            Password: 'Enter Password',
            hasLoginFailed: false,
            showLoginSuccessMessage: false
        }
        // this.handleUsernameChange=this.handleUsernameChange.bind(this)
        // this.handlePasswordChange=this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.LoginClicked = this.LoginClicked.bind(this)
    }
    handleChange(event) {
        console.log(this.state)
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }


    // handleUsernameChange(event){
    // console.log(event.target.value)
    // this.setState(
    //     {
    //         username: event.target.value
    //     }
    // )
    // }
    // handlePasswordChange(event){
    // console.log(event.target.value)
    // this.setState(
    //     {
    //         password: event.target.value
    //     }
    // )
    // }


    LoginClicked() {
        if (this.state.Username === 'Tanisha' && this.state.Password === '1234') {
            //    console.log("Success")
            AuthenticateService.registerSuccessfullLogin(this.state.Username,this.state.Password)
            this.props.history.push(`/welcome/${this.state.Username}`)
            this.setState({ showSuccessMessage: true })
            this.setState({ hasLoginFailed: false })
        }
        else {
            console.log("Failed")
            this.setState({ showSuccessMessage: false })
            this.setState({ hasLoginFailed: true })
        }
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">


                    {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
                    {/* {this.state.showSuccessMessage && <div>Login Success</div>} */}

                Username: <input type="text" name="Username" value={this.state.username} onChange={this.handleChange} placeholder="Enter Your Name " />
            Password: <input type="password" name="Password" value={this.state.password} onChange={this.handleChange} placeholder="Enter Password " />
                    <button className="btn btn-success" onClick={this.LoginClicked}>Login</button>
                </div>
            </div>
        )
    }
 }

//-------------Avoided below funtions with the help of conditionals
// function ShowInvalidCredentials(props){
//     if(props.hasLoginFailed){
//         return <div>Invalid Credentials</div>
//     }
//     return null
// }
// function ShowLoginSuccessMessage(props){
//     if(props.showSuccessMessage){
//         return <div>Login Success</div>
//     }
//     return null
// }


export default LoginComponent
    
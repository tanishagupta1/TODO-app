import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService.js'


// Welcome Component
class WelcomeComponent extends Component {
    constructor(props){
          super(props)
        this.retrieveWelcomeMesaage=this.retrieveWelcomeMesaage.bind(this)
        this.handleSuccessfulResponse=this.handleSuccesfulResponse.bind(this)

        this.handleError=this.handleError.bind(this)
        this.state={
            welcomeMessage :''
        }
    }
    render() {
        return (
            <>
                
                <div className="container-fluid">
                   <h1>Welcome  {this.props.match.params.name}!</h1> 
                    <h5>
                    You can  Manage Your Todos <Link to="/todolist">here</Link>
                    </h5>
                  
                </div>
                <div className="container">
                   <button onClick={this.retrieveWelcomeMesaage} className="btn btn-success">Get Welcome Message. </button>
                </div>
                <div className="container">
                  {this.state.welcomeMessage}
                </div>
            </>
        )

    }
    retrieveWelcomeMesaage(){
    //    HelloWorldService.executeHelloWorldService()
    //    .then(response=>this.handleSuccesfulResponse(response))

    //    HelloWorldService.executeHelloWorldBeanService()
    //    .then(response=>this.handleSuccesfulResponse(response))

       HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
       .then(response => this.handleSuccesfulResponse(response))
       .catch(error => this.handleError(error) )
       
    }

    //handle Success response
    handleSuccesfulResponse(response){
        
         this.setState({welcomeMessage:response.data.message})
         //data.message is written as the data is in json format as welcomeMessage is an object 
    }
    handleError(error){
        //errorMessage is defined to prevent error.response to get undefined
        let errorMessage='';
        if(error.message){
            errorMessage=errorMessage+error.message
        }
        if(error.response && error.response.data){
            errorMessage=errorMessage + error.response.data.message
        }
         console.log(error.response);
         this.setState({welcomeMessage:errorMessage})
    }
}

export default WelcomeComponent 

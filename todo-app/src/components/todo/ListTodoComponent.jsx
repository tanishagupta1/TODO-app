import React, { Component } from 'react'
import TodoDataSerivce from '../../api/todo/TodoDataService'
import AuthenticateService from './AuthenticateService'
import moment from 'moment'
//List Todo Component
class ListTodoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos:
                [
                    // { id: 1, Description: "Study", Done: false, CompletionDate: new Date() },
                    // { id: 2, Description: "Learn React", Done: false, CompletionDate: new Date() },
                    // { id: 3, Description: "Learn stats and Analytics", Done: true, CompletionDate: new Date() }
                ],
                message: null
        }
        
        this.deleteTodoClicked=this.deleteTodoClicked.bind(this)
        this.updateTodoClicked=this.updateTodoClicked.bind(this)
        this.refreshTodos=this.refreshTodos.bind(this)
        this.addTodoClicked=this.addTodoClicked.bind(this)
    }

    componentDidMount() {
        console.log("Component did mount")
        this.refreshTodos();
          console.log(this.state)
        //   .catch((err) => {
              
        //   });
    }
    refreshTodos(){
        let username =AuthenticateService.getLoggedInUser()
        TodoDataSerivce.retrieveAllTodos(username)
        .then(
            response => {
          //   console.log(response)
          this.setState({
              todos:response.data
          }) 
        }
        )
    }

    deleteTodoClicked(id)
    {
        let username =AuthenticateService.getLoggedInUser()
        // console.log(id +" "+ username)
        TodoDataSerivce.deleteTodo(username,id)
        .then(
            response => {
                this.refreshTodos();
                this.setState({ message: `Deleted todo ${id} of ${username} Successfully` })
                this.refreshTodos() 
            }
        )

    }
    updateTodoClicked(id)
    {
        console.log("Update clicked "+id)
        this.props.history.push(`/todolist/${id}`)
        //todolist/${id}

    }
    addTodoClicked(){
        this.props.history.push(`/todolist/-1`)
    }


    componentWillUnmount(){
        console.log("Component will unmount")
    }
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log("ShouldComponentUpdate")
    //     console.log(nextProps)
    //     console.log(nextState)
    //     return true
    // }
   
  


    render() {
        return (
            <div>
                <h1>  List of Todos</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                {/* <th>Task No</th> */}
                                <th>Description</th>
                                <th>Target Date</th>
                                <th>Is Completed</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                        <tr key ={todo.id}>
                                            {/* <td>{todo.id}</td> */}
                                            <td>{todo.description}</td>
                                            <td>{moment(todo.targetDate).format("YYYY-MM-DD")}</td>
                                            <td>{todo.completed.toString()}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                        </tr>
                                )

                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-succes" onClick={this.addTodoClicked}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListTodoComponent
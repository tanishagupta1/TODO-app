import React, { Component } from 'react'
import moment from 'moment'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import TodoDataService from '../../api/todo/TodoDataService'
import AuthenticateService from './AuthenticateService'

class TodoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            description: " ",
            targetDate: moment(new Date()).format('yyyy-mm-dd')
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    onSubmit(values) {
        console.log(values)
        let username = AuthenticateService.getLoggedInUser()
        let todo = {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
        }

        if (this.state.id === -1) {
            TodoDataService.createTodo(username, todo).then(() => this.props.history.push('/todolist'))

        }
        else {
            TodoDataService.updateTodo(this.state.id, username, todo)
                .then(() => this.props.history.push('/todolist'))
        }

    }

    componentDidMount() {
        if (this.state.id === -1) {
            return
        }
        let username = AuthenticateService.getLoggedInUser()
        TodoDataService.retrieveTodo(username, this.state.id)
            .then(
                response => this.setState({
                    description: response.data.description,
                    targetDate: moment(response.data.targetDate).format('yyyy-mm-dd')
                })

            )
    }

    validate(values) {
        // let errors={description:"The description should have atleast 5 characters" }
        let errors = {}
        if (!values.description) {
            errors.description = "Enter a Description"
        }
        else if (values.description.length < 5) {
            errors.description = "The Description should have atleast 5 characters"
        }
        if (!moment(values.targetDate).isValid()) {
            errors.description = "Enter a valid Date"
        }
        return errors
    }
    render() {
        // let description=this.state.description
        // let targetDate=this.state.targetDate
        let { description, targetDate } = this.state

        return (
            <div>
                <h1>Todo</h1>
                <div className="container">
                    <Formik
                        initialValues={
                            {
                                description: description,
                                targetDate: targetDate
                            }

                        }
                        onSubmit={this.onSubmit}
                        validate={this.validate}
                        validateOnBlur={false}
                        validateOnChange={false}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                //  <div>Something</div>
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning"></ErrorMessage>
                                    <fieldset className="form-group">
                                        <label >Description:</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label >Target Date:</label>
                                        <Field className="form-control" type="date" name="targetDate" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit"> Save</button>
                                </Form>
                            )

                        }

                    </Formik>
                </div>
            </div>

        )
    }

}
export default TodoComponent

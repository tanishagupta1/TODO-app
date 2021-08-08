import axios from 'axios'
import {API_URL,JPA_API_URL} from '../../ConstantsUrl'
class TodoDataService{

    retrieveAllTodos(name)
    {
        // console.log("Importing data from backend")
        return axios.get(`${API_URL}/users/${name}/todos`);
    }
    retrieveTodo(name,id)
    {
        // console.log("Importing data from backend")
        return axios.get(`${API_URL}/users/${name}/todos/${id}`);
    }
    deleteTodo(name,id)
    {
        // console.log("Importing data from backend")
        return axios.delete(`${API_URL}/users/${name}/todos/${id}`)
    }
    updateTodo(id,name,todo)
    {
        // console.log("Importing data from backend")
        return axios.put(`${API_URL}/users/${name}/todos/${id}`,todo)
    }
    createTodo(name,todo)
    {
        // console.log("Importing data from backend")
        return axios.post(`${API_URL}/users/${name}/todos/`,todo)
    }
  
}

export default new TodoDataService();
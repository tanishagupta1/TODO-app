import axios from 'axios'
class HelloWorldService{
    

    executeHelloWorldService()
    {
        console.log("Executed Service")
        return axios.get("http://localhost:8080/hello")//call to the backend //returns a promise
    }
    executeHelloWorldBeanService()
    {
        console.log("Executed Service Bean")
        return axios.get("http://localhost:8080/hello-world-bean")//call to the backend //returns a promise
    }
    executeHelloWorldPathVariableService(name) 
    {
            // let username='in28minutes'
            // let password='dummy'
            // let basicAuthHeader='Basic' + window.btoa(username + ":" +password)
        //windows.btoa is used to encode the username and password using base64 encoding
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`
            // , 
            //     {
            //         headers : {
            //             authorization: basicAuthHeader
            //         }
            //     }
        );
        //here tick is used and not quote marks
    }

}

export default new HelloWorldService()
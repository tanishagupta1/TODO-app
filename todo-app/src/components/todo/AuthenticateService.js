class AuthenticateService{
    registerSuccessfullLogin(Username,Password){
        console.log("Register Successfull Login")
        sessionStorage.setItem('authenticatedUser',Username);
    }
logout(){
    sessionStorage.removeItem('authenticatedUser');
}

isUserLoggedIn()
{
    let user = sessionStorage.getItem('authenticatedUser');
    if (user === null) return false 
    else return true
}
getLoggedInUser()
{
    let user = sessionStorage.getItem('authenticatedUser');
    if (user === null) return '' 
    else return user
}

}
export default new AuthenticateService()
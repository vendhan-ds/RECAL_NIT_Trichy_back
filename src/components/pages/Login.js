import React from 'react';
import axios from 'axios'

function Login() {
    function sendPost(){
        console.log("sendPost");
        var username = document.querySelector('#username').value;
        var password = document.querySelector('#password').value;
        if(!username || !password){
            return;
        }
        var data = {'username' :  username, 'password' : password };
        axios.post('http://localhost:8080/login' , data).then((res) => console.log("test" + res.data));
    }
    return (
        <div className="login-wrapper">

        <h1>Log In</h1>
  
        <form>
  
          <label>
  
            <p>Username</p>
  
            <input id='username' type="text" />
  
          </label>
  
          <label>
  
            <p>Password</p>
  
            <input id='password' type="password" />
  
          </label>
  
          <div>
  
            <button onClick={()=>{sendPost();}} type="submit">Submit</button>
  
          </div>
  
        </form>
  
      </div>
  
    )
}

export default Login;
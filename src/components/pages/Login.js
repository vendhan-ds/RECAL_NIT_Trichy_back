import React from 'react';
import axios from 'axios'
import {useState} from 'react'
import {Link} from 'react-router-dom'

function Login() {

  const [saved,sets] = useState(false);

    function sendPost(){
      sets(false);
        console.log("sendPost");
        var username = document.querySelector('#username').value;
        var password = document.querySelector('#password').value;
        if(!username || !password){
            return;
        }
        var data = {'username' :  username, 'password' : password };
        axios.post('http://localhost:8080/login' , data).then((res) => console.log("test" + res.data));
        sets(true);

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
            {saved && <Link to="/event-participation" ><button>Continue</button> </Link>}
              {saved &&  <p>Successfully Saved</p>}
  
          </div>
  
        </form>
  
      </div>
  
    )
}

export default Login;
import React from 'react'
import './styles2.css'
import Image from './logo2.png'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import TextField from '@mui/material/TextField';
import { useState } from 'react'
import axios from 'axios'
import { func } from 'prop-types'

export default function Sign(){
  const variants1 = {
    anim : {
        opacity : 1,
        transition : {
            delay : 1, 
            duration : 0.5, 
        }
    }

}
const [saved,sets] = useState(false);

function sendPost(){
  sets(false);
  document.querySelector(".button-24").style.backgroundColor = 'white';

    console.log("sendPost");
    var username = document.querySelector('#username').value;
    var password = document.querySelector('#password').value;
    if(!username || !password){
        return;
    }
    var data = {'username' :  username, 'password' : password };
    try{
    axios.post('http://localhost:8080/login' , data).then((res) => {
    
    if(res.data.errors){
      console.log(res.data);
    }

    if(res.data.success){
      window.location.href = "/basedat";
    }
    else{
      alert("Wrong username or password");
    };
    sets(true);

    })}
    catch(e){
      console.log("sdsdsd");
    };
  //   axios.post('http://localhost:8080/api/logincheck' , data).then((res) => {
  //     console.log(res);
  //     if(res){
  //     }
  //     else{
  //       console.log("not logged in");
  //     }
  // });
       //window.location.href = "/basedat";

  document.querySelector(".button-24").style.backgroundColor = 'green';

 };

  document.addEventListener("keypress" , (e) => {
    if(e.key == "Enter"){
      document.querySelector(".button-24").click();
    }
  })
  return(
    <motion.div className='container' initial = {{opacity : 0}} animate = {{opacity : 1}} exit = {{opacity : 0}}>
    <div className='logos'>
    {/* <img src = {Image} className = "logo"></img> */}
    <h1><span>Recal</span></h1>
    </div>

        <motion.h1 variants={variants1} exit={{opacity : 0}} initial ={{opacity:0}} animate="anim" className='weltext'>Good to see you again</motion.h1>

    
       <motion.div className='mainc' exit={{opacity:0}} initial = {{y : '100vw'}} animate = {{y : 0}}>

          <h2><span>Login</span></h2>
          Your email
          <input type="email" id='username' placeholder='Email' />
          <br />
          Your password
          <input type="password" id='password' placeholder='Password' />
          {/* <table>
          <tr><td><label>Enter Email</label></td>
          <td><input type="email" /></td></tr>
          <tr><td><label>Enter Password</label></td>
          <td><input type="password" /></td></tr>
          </table> */}
          
          <br />
          <button className='button-24' onClick={() => sendPost()}>Login</button>
          
       </motion.div>
    </motion.div>
  )
}
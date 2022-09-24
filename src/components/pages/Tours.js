import { func } from 'prop-types';
import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import {AnimatePresence,motion} from 'framer-motion'


function Tours() {

    const [tour,setn] = useState(false);
    const [saved,sets] = useState(false);

    function sendpost(){
        sets(false);
        if(tour){
        var arr = [document.querySelector('#c1').value,document.querySelector('#c2').value,document.querySelector('#c3').value,document.querySelector('#c4').value];
        var data = {'need' : 1 , 'tour' : arr};
        }
        else{
            var data = {'need' : 0};
        }
        axios.post('http://localhost:8080/api/ToursSave' , data).then((res) => console.log(res.data));
        sets(true);


    }

    const variants1 = {
        anim : {
            x : "0",
            transition : {
                delay : 0.6 , 
                duration : 0.7, 
            }
        }

    }

    return (
        <motion.div variants={variants1} initial ={{x:'100vw'}} animate="anim" exit={{opacity:0}} className = "outerc" transition={{delay : 0.2 , duration  :0.5}}> 

        <div className='mtitle'><h1>Tours</h1></div>
        <div className='mainc'>
        <label>I am Interested in Tour option : </label>
        <input type="checkbox" onChange={(e) => setn(e.target.checked)}></input>
        <br />
        <br />
        {tour && <div className='rdetails'>
        <table>
            <thead>
                <tr>
                    <td>Tour</td>
                    <td>Trichy Local</td>
                    <td>Phuket-Krabi</td>
                    <td>Mysore-Bandipur</td>
                    <td>Belur-Hampi</td>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>From</td>
                <td></td>
                <td>26th Jan</td>
                <td>26th Jan</td>
                <td>29th Jan</td>
            </tr> 
            <tr>
                <td>To</td>
                <td></td>
                <td>2nd Feb</td>
                <td>29th Jan</td>
                <td>1st Feb</td>
            </tr>
            <tr>
                <td>Duration</td>
                <td></td>
                <td>5N/6D</td>
                <td>2N/3D</td>
                <td>3N/4D</td>
            </tr>
            <tr>
                <td>Cost/head</td>
                <td></td>
                <td>53,000</td>
                <td>20,000</td>
                <td>15,000</td>
            </tr>
            <tr>
                <td>accomodation</td>
                <td>Twin - Share</td>
            </tr>
            <tr>
                <td>Remarks</td>
                <td>4hrs Tour Srirangam, Tiruvanaikaval and Kallani Dam</td>
                <td>Trichy - Chennai by volvo Bus</td>
                <td>Trichy-Mysore by Train</td>
                <td>By Volvo Bus. Drop to Bangalore</td>
            </tr>
            <tr>
                <td>Note : </td>
                <td>Rockfort Temple can be done by Participant on their own</td>

            </tr>
            <tr>
                <td>Enter No. of Pax in Tour</td>
                <td><input type="number" id = "c1"></input></td>
                <td><input type="number" id = "c2"></input></td>
                <td><input type="number" id = "c3"></input></td>
                <td><input type="number" id = "c4"></input></td>

            </tr>
            </tbody>
        </table>
        
        </div>}
           
        </div>
        <div className=' c1but'>
        <Link to = "/tshirt"><button className="eventbut">Go Back and edit</button></Link>
        <button onClick={() => sendpost()}>Save</button>
            
        {saved && <Link to="/" ><button>Continue</button> </Link>}
        {saved &&  <p>Successfully Saved</p>}
        </div>
        </motion.div>
    );
}

export default Tours;

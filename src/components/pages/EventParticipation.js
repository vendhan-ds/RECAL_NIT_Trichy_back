import React from 'react';
import axios from 'axios';
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import {useState} from 'react'
function EventParticipation() {
    const [saved,sets] = useState(false);

    function sendpost(){
        sets(false);
        var a1 = document.querySelector('#a1').checked;
        var a2 = document.querySelector('#a2').checked;
        var a3 = document.querySelector('#a3').checked;
        var a4 = document.querySelector('#a4').checked;
        var a5 = document.querySelector('#a5').checked;
        var a6 = document.querySelector('#a6').checked;
        var a7 = document.querySelector('#a7').checked;
        var a8 = document.querySelector('#a8').checked;

        var v1 = document.querySelector('#v1').value;
        var nv1 = document.querySelector('#nv1').value;
        var v2 = document.querySelector('#v2').value;
        var nv2 = document.querySelector('#nv2').value;
        var v3 = document.querySelector('#v3').value;

        if(v1 == ""){
            v1 = 0;
        }
        if(nv1 == ""){
            nv1 = 0;
        }
        if(v2 == ""){
            v2 = 0;
        }
        if(nv2 == ""){
            nv2 = 0;
        }
        if(v3 == ""){
            v3 = 0;
        }
        
        var arr = [a1,a2,a3,a4,a5,a6,a7,a8];
        console.log(arr);
        var data = {'conditions' : arr , 'd1v' : v1, 'd1nv' : nv1 , 'd2c' : v3 , 'd3v' : v2 , 'd3nv' : nv2};
        console.log(data);
        axios.post('http://localhost:8080/api/eventsSave' , data).then((res) => console.log(res.data));
        sets(true);
    }

    const variants1 = {
        anim : {
            opacity : 1,
            transition : {
                delay : 0.6 , 
                duration : 0.7, 
            }
        }

    }

    return (
        <motion.div initial ={{opacity:0}} variants={variants1} animate="anim" exit={{opacity:0}} className = "outerc" transition={{delay : 0.2 , duration  :0.5}}> 
        <motion.div drag dragConstraints={{top:0,bottom:0,left:0,right:0}} className='mtitle'><h1>EventParticipation</h1></motion.div>
        
        <div className='mainc1'>
            <h2>24th Jan</h2>
            <table>
                <tbody>
                    <tr><td>I will join the evening event at the Hotel</td>
                    <td><input type = "checkbox" min="0" id='a1'></input></td>
                    </tr>
                    <tr>
                        <td>I agree to pay the Lumpsum Participation Fee of Rs.4,500 towards this for Myself & Family
</td>
<td><input type = "checkbox" min="0" id='a2'></input></td>
                    </tr>
                    <tr>
                        <td>I agree to pay Rs.750 per Head for Veg-Dinner & Rs.850 per Head for Non-Veg Dinner for the Participants (including Family). I also understand there is no Charge for Grand Children
</td>
<td><input type = "checkbox" min="0" id='a3'></input></td>
                    </tr>
                    <tr><td>No. of Participants for Event at Hotel
</td>   
<td>Veg</td>
                    <td><input type = "number" min="0" id='v1'></input></td>
                    <td>Non-Veg</td>
                    <td><input type = "number" min="0" id='nv1'></input></td>
                    </tr>
                    
                </tbody>
            </table>
        </div><div className='mainc1'>
            <h2>25th Jan</h2>
            <table>
                <tbody>
                    <tr><td>I will join for the Event at the Campus
</td>
                    <td><input type = "checkbox" min="0" id='a4'></input></td>
                    </tr>
                    <tr>
                        <td>I agree to pay the Lumpsum Participation Fee of Rs.1,600 towards this for Myself & Family. I understand there is no charge for the Lunch at Campus

</td>
<td><input type = "checkbox" min="0" id='a5'></input></td>
                    </tr>
                    <tr><td>No. of Participants for Event at Campus



</td>
                    <td><input type = "number" min="0" id='v3'></input></td>
                    </tr>
                    </tbody>
                    </table>
                    </div>
                    <div className='mainc1'>
                    <table>
                    <tbody>
                    <h2>25th Jan</h2>
                    <tr><td>"I will join for the Evening Event at the Hotel
I agree to pay the Lumpsum Participation Fee of Rs.4,500 towards this for Myself & Family"




</td>
                    <td><input type = "checkbox" min="0" id='a6'></input></td>

                    <td><input type = "checkbox" min="0" id='a7'></input></td>
                    </tr>
                    <tr><td>I agree to pay Rs.750 per Head for Veg-Dinner & Rs.850 per Head for Non-Veg Dinner for the Participants (including Family). I also understand there is no Charge for Grand Children


</td>
                    <td><input type = "checkbox" min="0" id='a8'></input></td>
                    </tr>
                    <tr><td>No. of Participants for Event at Hotel
</td>   
<td>Veg</td>
                    <td><input type = "number" min="0" id='v2'></input></td>
                    <td>Non-Veg</td>
                    <td><input type = "number" min="0" id='nv2'></input></td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
        <div className=' c1but'>
        <Link to = "/accomodation"><button className="eventbut">Go Back and edit</button></Link>

        <button className='eventbut' onClick={() => sendpost()}>Save</button>
            
        {saved && <Link to="/tshirt" ><button className='eventbut'>Continue</button> </Link>}
        {saved &&  <p>Successfully Saved</p>}


        </div>
        </motion.div>
    );
}

export default EventParticipation;

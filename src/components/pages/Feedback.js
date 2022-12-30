import React from 'react'
import Button from '@mui/material/Button';
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import Rating from '@mui/material/Rating';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useState } from 'react';
import axios from 'axios';

export default function Feedback(){

    function sendpost(){
        var rat = rating;
        var com = document.querySelector('#comment').value;
        var data = {'rat' : rat , 'com' : com};
        axios.post('http://localhost:8080/api/FeedSave' , data).then((res) => alert(res.data));
    }

    const [rating,setValue] = useState(0);

    return(
        <motion.div initial = {{opacity : 0}} animate = {{opacity : 1}} transition = {{delay : 0.8, duration : 0.6}}>
            <h1>Feedback and Comments</h1>
            <br />
            <br />
            <br />
            
            <Rating  size='large' onChange={(event, newValue) => {
    setValue(newValue);
  }} />

            <br />
            <br />
            <br />

            <TextareaAutosize placeholder = "Comment"  style={{width : '30rem'}} minRows={5} id = "comment" />

            <br />
            <br />
            <Button size="large" variant="contained" onClick={() => sendpost()}  >
                    Submit
            </Button>
            <br />
            <br />
            <Link to="/previews"><Button size="large" variant="contained" >
                    Go to Previews
            </Button></Link>
        </motion.div>
    )
}
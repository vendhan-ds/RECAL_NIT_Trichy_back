import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import axios from 'axios'


export default function Basedat(){

    var data = ['Name', 'Branch' ,'Spouse', 'City' , 'Country' , 'Region' , 'Mobile' , 'Email' , 'T-Shirt_Size' ];
    const mystyle = {
        width : 'fit-content',
        padding : '1rem',
      };

      const variants1 = {
        anim : {
            opacity : 1,
            transition : {
                delay : 0.6, 
                duration : 0.5, 
            }
        }

    }

    function sendpost(){
        var post = [];
        for(var i of data){
            post.push(document.querySelector('#' + i).value);
        }
        axios.post('http://localhost:8080/api/registrationData' , post).then((res) => alert(res.data));

    }

    function prepop(){
        axios.get('http://localhost:8080/api/previewData').then(
            (res) => {
                if(res.data=="user not found"){
                    window.location.href="/signin"
                }
                res = res.data[13];
                for(var i in data){
                    if(res[i] == undefined){
                    document.querySelector('#s' + data[i]).innerText = "No data found";
                    }
                    else{
                    document.querySelector('#s' + data[i]).innerText = res[i];
                    }
                }

            });
        axios.get("http://localhost:8080/api/userpaid").then((res)=>{
            if(res.data=="user not found"){
                window.location.href="/signin"
            }
            if(res.data == true){
                document.querySelector('.pay').innerText = "Paid";
            }
            else{
                document.querySelector('.pay').innerText = "NOT Paid";
            }
        })
    }

    prepop();

    return(
        <>
        <motion.div className='center' variants={variants1} exit={{opacity:0}} initial ={{opacity:0}} animate="anim" >
            <TableContainer component={Paper} style = {mystyle} >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Base Data</TableCell>
                        <TableCell >Details</TableCell>
                        <TableCell >Change by Alumni</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map(dat => (
                        <TableRow>
                            <TableCell >{dat}</TableCell>
                            <TableCell><p id={"s" + dat}>as per Base Data</p></TableCell>
                            <TableCell><TextField size = "small" id={dat} label={dat} variant="outlined" /></TableCell>
                        </TableRow>
                    )
                    )}
                    <TableRow>
                        <TableCell>Payment Status</TableCell>
                        <TableCell className='pay'>Not paid</TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
                

                </TableContainer>

                <br />
                <div className='center'>
                <Stack direction="row" spacing={2} style = {{padding : '1rem'}} align = 'center' divider={<Divider orientation="vertical" flexItem />} component = {Paper}>
                {/* <Button size="large" variant="contained" color="success">
                    Register
                </Button> */}
                <Link to="/quit"><Button size="large" variant="contained" color="error">
                    Not interested
                </Button></Link>
                
                <Link to="/quit"><Button size="large" variant="contained" color="warning">
                    Cannot Say now
                </Button></Link>

                
                
                </Stack>
                </div>
                <br />
                <br />
                <div className='center'>
                <Stack direction="row" spacing={2} style = {{padding : '1rem'}} align = 'center' divider={<Divider orientation="vertical" flexItem />} component = {Paper}>
                <Button size="large" variant="contained" onClick={() => sendpost()} >
                    Save
                </Button>
                <Link to="/accomodation"><Button size="large" variant="contained" color="success">
                    Continue to register
                </Button></Link>
                
                {/* <Button size="large" variant="contained" >
                    Edit previous login
                </Button> */}
                
                </Stack>
                </div>
        </motion.div>
        </>
    )
}
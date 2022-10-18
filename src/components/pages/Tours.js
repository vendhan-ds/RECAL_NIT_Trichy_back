import React from 'react';
import axios from 'axios';
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';


function Tours() {

    const [tour,setn] = useState(false);
    const [saved,sets] = useState(false);

    const mystyle = {
        width : 'fit-content',
        padding : '1rem',
      };

    function sendpost(){
        sets(false);
        if(tour){
        var arr = [document.querySelector('#c1').value,document.querySelector('#c2').value,document.querySelector('#c3').value,document.querySelector('#c4').value];
        var data = {'need' : 1 , 'tour' : arr};
        }
        else{
            var data = {'need' : 0 , 'tour' : [0,0,0,0]};
        }
        axios.post('http://localhost:8080/api/ToursSave' , data).then((res) => console.log(res.data));
        sets(true);


    }

    function prepop(){
        axios.get('http://localhost:8080/api/previewData').then(
            (res) => {
                res = res.data;
                console.log(res);
                var arr = res[12][1];
                document.querySelector('#c1').value = arr.trichy;
                document.querySelector('#c2').value = arr.phuketKrabi;
                document.querySelector('#c3').value = arr.mysoreBandipur;
                document.querySelector('#c4').value = arr.belurHampi;
                

            });

    }

    prepop();

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
        <motion.div variants={variants1} initial ={{opacity : 0}} animate="anim" exit={{opacity:0}} className = "outerc" transition={{delay : 0.2 , duration  :0.5}}> 

        <motion.div drag dragConstraints={{top:0,bottom:0,left:0,right:0}} className='mtitle'><h1>Tours</h1></motion.div>
        <div className='center'>
        <label>I am Interested in Tour option : </label>
        <Checkbox onChange={(e) => setn(e.target.checked)}/>
        <br />
        <br />
        <motion.div initial ={{opacity : 0}} animate = {{opacity : 1}} className='rdetails'>
        <TableContainer component = {Paper} style = {mystyle}>

        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Tour</TableCell>
                    <TableCell>Trichy Local</TableCell>
                    <TableCell>Phuket-Krabi</TableCell>
                    <TableCell>Mysore-Bandipur</TableCell>
                    <TableCell>Belur-Hampi</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            <TableRow>
                <TableCell>From</TableCell>
                <TableCell></TableCell>
                <TableCell>26th Jan</TableCell>
                <TableCell>26th Jan</TableCell>
                <TableCell>29th Jan</TableCell>
            </TableRow> 
            <TableRow>
                <TableCell>To</TableCell>
                <TableCell></TableCell>
                <TableCell>2nd Feb</TableCell>
                <TableCell>29th Jan</TableCell>
                <TableCell>1st Feb</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Duration</TableCell>
                <TableCell></TableCell>
                <TableCell>5N/6D</TableCell>
                <TableCell>2N/3D</TableCell>
                <TableCell>3N/4D</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Cost/head</TableCell>
                <TableCell></TableCell>
                <TableCell>53,000</TableCell>
                <TableCell>20,000</TableCell>
                <TableCell>15,000</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>accomodation</TableCell>
                <TableCell>Twin - Share</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>

            </TableRow>
            <TableRow>
                <TableCell>Remarks</TableCell>
                <TableCell>4hrs Tour Srirangam, Tiruvanaikaval and Kallani Dam</TableCell>
                <TableCell>TableRowichy - Chennai by volvo Bus</TableCell>
                <TableCell>TableRowichy-Mysore by TableRowain</TableCell>
                <TableCell>By Volvo Bus. Drop to Bangalore</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Note : </TableCell>
                <TableCell>Rockfort Temple can be done by Participant on their own</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>

            </TableRow>
            <TableRow>
                <TableCell>Enter No. of Pax in Tour</TableCell>
                <TableCell><TextField id = "c1"/></TableCell>
                <TableCell><TextField id = "c2"/></TableCell>
                <TableCell><TextField id = "c3"/></TableCell>
                <TableCell><TextField id = "c4"/></TableCell>

            </TableRow>
            </TableBody>
        </Table>
        </TableContainer>
        </motion.div>
{/*            
        </div>
        <div className=' c1but'>
        <Link to = "/tshirt"><button className="eventbut">Go Back and edit</button></Link>
        <button  className='eventbut' onClick={() => sendpost()}>Save</button>
            
        {saved && <Link to="/previews" ><button className='eventbut'>Continue</button> </Link>}
        {saved &&  <p>Successfully Saved</p>}
        </div> */}
        <br />
        <div className='center'>
                <Stack direction="row" spacing={2} style = {{padding : '1rem'}} align = 'center' divider={<Divider orientation="vertical" flexItem />} component = {Paper}>
                <Button size="large" variant="contained" onClick={() => sendpost()} >
                    Save
                </Button>
                <Link to="/feedback"><Button size="large" variant="contained" >
                    Next
                </Button></Link>
                
                <Link to="/tshirt"><Button size="large" variant="contained" >
                    Edit previous
                </Button></Link>
                
                </Stack>
                </div>
        </div>
        </motion.div>
    );
}

export default Tours;

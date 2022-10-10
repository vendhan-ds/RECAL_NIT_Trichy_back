import React, { useState } from 'react';
import axios from 'axios'
import {AnimatePresence,motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';



function Accomodation() {

    const [fam,setfam] = useState("single");
    const [rreq,seTableRowreq] = useState("noTableRowequired");
    const [roomt,seTableRowoomt] = useState(null);
    const [cin,setcin] = useState(null);
    const [cout,setcout] = useState(null);
    const [hotel,sethotel] = useState(null);
    const [room,seTableRowoom] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    const [costs,setcost] = useState(0)
    const [room2,seTableRowoom2] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    const [costs2,setcost2] = useState(0)
    const [saved,sets] = useState(false);
    
    var key = 0;
    
    const mystyle = {
        width : 'fit-content',
        padding : '1rem',
      };

    function updatecost(room){
        var temp = [2500,2800,1400,3000,3600,1800,3800,4300,2150,5000,5000,2500,6700,6700,3350];
        var cost = 0;
        console.log(room);
        for(var i in room){
            if(room[i] == ""){
                room[i] = 0;
            }
            console.log(temp[i],room[i]);
            cost += (parseInt(room[i]) * parseInt(temp[i]));
        }
        console.log(cost);
        setcost(cost);
    }
// change the pricess
    function sendpost(){
        sets(false);

        console.log('ss');
        if(fam == 'single'){
            var a = 0;
            var s = 0;
            var f = 0;
            var g = 0;
        }
        else{
        var a = document.querySelector('#alumni').value;
        var s = document.querySelector('#spouse').value;
        var f = document.querySelector('#family').value;
        var g = document.querySelector('#grandkids').value;
        }

        var dates = [document.querySelector('#cout1').checked,document.querySelector('#cout2').checked,document.querySelector('#cout3').checked,document.querySelector('#cin1').checked,document.querySelector('#cin2').checked,document.querySelector('#cin3').checked]

        var data = {'participationType' : fam, 'hotelRoom' : rreq, 'dates' : dates ,'alumni' : a ,'spouse' : s,'familyMembers' : f,'grandKids' : g,'hotel1' : room , 'hotel2' : room2 ,'totalcost' : costs + costs2};
        axios.post('http://localhost:8080/api/accomodationSave',data).then((res) => console.log(res.data));
        sets(true);
        
    }


    function updatecost2(room2){
        var temp = [2000,2000,1000,2500,2500,1250,3700,3700,1850,4500,4500,2250,350,350,350];
        var cost = 0;
        console.log(room2);
        for(var i in room2){
            if(room2[i] == ""){
                room2[i] = 0;
            }
            console.log(temp[i],room2[i]);
            cost += (parseInt(room2[i]) * parseInt(temp[i]));
        }
        console.log(cost);
        setcost2(cost);
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
        <motion.div variants={variants1} exit={{x:'-100vw'}} initial ={{x:'-100vw'}} animate="anim" className = "outerc" transition={{duration : 0.3}}>
         
         <motion.div drag dragConstraints ={{top:0,bottom:0,left:0,right:0}} className='mtitle'><h1>Accomodation</h1></motion.div>
         
         <div className='center'>

            <motion.div
             initial ={{opacity : 0}} animate = {{opacity : 1}} transition = {{duration : 1}}
             className='center'>
                <TableContainer component = {Paper} style = {mystyle}>

                    <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell><h3>Participation Type</h3></TableCell>
                            <TableCell>Single</TableCell>
                            <TableCell>With Family</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell></TableCell>
                        <TableCell><label>Alumni count 
                        
                    </label></TableCell>
                    <TableCell><TextField size = "small"   variant="outlined" min = "0" id='alumni' /></TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell>No of pax for family participation</TableCell>

                        <TableCell>
                    <label>Spouse count 
                        
                    </label></TableCell>
                    <TableCell><TextField size = "small"   variant="outlined" id='spouse' min = "0" /></TableCell>
                        </TableRow>

                        <TableRow>
                        <TableCell>Please indicate against each row </TableCell>

                        <TableCell>
                    <label>Family members count 
                        
                    </label></TableCell>
                    <TableCell><TextField size = "small"   variant="outlined" id='family' min = "0" /></TableCell>
                        </TableRow>

                        <TableRow>
                        <TableCell></TableCell>

                        <TableCell>
                        <label>Grand Kids count 
                    </label></TableCell>
                    <TableCell> <TextField size = "small"   variant="outlined" id='grandkids' min = "0" />
</TableCell>
                        </TableRow>
                    
                    
                    
                    
                    
                
            <TableRow>
                <TableCell><h3>Hotel Room</h3></TableCell>
                <TableCell><FormControl style = {{width : '20rem'}}>

<InputLabel id="label">Hotel Room</InputLabel>

<Select className='exselect' onChange={(e) => seTableRowreq(e.target.value)} label="Age" labelId="label" >
    <MenuItem value="not required" >not required</MenuItem>
    <MenuItem value="required" >required</MenuItem>
</Select>
</FormControl></TableCell>
            </TableRow>
            

            
            </TableBody>
            </Table>
            </TableContainer>
            </motion.div>
            <br />
            <br />
            <div className='center'>
            <TableContainer component = {Paper} style = {mystyle}>

            <Table>
            <TableHead>
                <TableRow>
                    <TableCell><h3>Please select check-in Date</h3></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            
            <TableRow>
            <TableCell><label>Early Check-in</label></TableCell>
            <TableCell>23rd Jan (12 Noon)</TableCell>
            <TableCell><Checkbox id = "cout1"/></TableCell>

            </TableRow>
            <TableRow>
            <TableCell><label>Standard Check-in</label></TableCell>
            <TableCell>24th Jan (12 Noon)</TableCell>           
             <TableCell><Checkbox id = "cout2"/></TableCell>
            </TableRow>
            <TableRow>
            <TableCell><label>Late Check-in</label></TableCell>
            <TableCell>25th Jan (12 Noon)</TableCell>            
            <TableCell><Checkbox id = "cout3"/></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><h3>Please Select Check-out Date</h3></TableCell>
            </TableRow>
            <TableRow>
            <TableCell><label>Early Check-out</label></TableCell>
            <TableCell>25th Jan (12 Noon)</TableCell>            
            <TableCell><Checkbox id = "cin1"/></TableCell>
            </TableRow>
            <TableRow>
            <TableCell><label>Standard Check-out</label></TableCell>
            <TableCell>26th Jan (12 Noon)</TableCell>          
              <TableCell><Checkbox id = "cin2"/></TableCell>
            </TableRow>
            <TableRow>
            <TableCell><label>Extended Stay</label></TableCell>
            <TableCell>27th Jan (12 Noon)</TableCell>           
             <TableCell><Checkbox id = "cin3"/></TableCell>
            </TableRow>
            
            
            {/* <TableRow>
                <TableCell><label>Hotel</label></TableCell>
                <TableCell><FormControl style = {{width : '20rem'}}>
            <InputLabel id="label1">Hotel</InputLabel>
            <Select onChange={(e) => sethotel(e.target.value)} labelId = "label1">
                <MenuItem >Select</MenuItem>
                <MenuItem value="breezeResidency">breezeResidency</MenuItem>
                <MenuItem value="hotelTamilNadu">hotelTamilNadu</MenuItem>
            </Select>
            </FormControl></TableCell>
            </TableRow> */}
            
            
            </TableBody>
            </Table>
            </TableContainer>
            </div>
            
             <div className='roomdetails'>
            <br />
            <br />
            <h1>Hotel Tamilnadu</h1>
            <br />
            <TableContainer component = {Paper} style = {mystyle}>

            <Table>
            <thead>
                <TableRow>
                <TableCell>Room type</TableCell>
                <TableCell>Single Occupancy</TableCell>
                <TableCell>Cart</TableCell>
                <TableCell>Double</TableCell>
                <TableCell>Cart</TableCell>
                <TableCell>Twin-Share</TableCell>
                <TableCell>cart</TableCell>
                </TableRow>
            </thead>
            <TableBody>
                        
                        <TableRow>
                            <TableCell>Standard</TableCell>
                            <TableCell>2000</TableCell>
                            <TableCell><TextField size = "small"   variant="outlined" min = "0" id='a11'onChange={(e) =>{
                                var arr = [...room2];
                                arr[0] = e.target.value;
                                seTableRowoom2(arr);
                                updatecost2(arr);
                            }} /></TableCell>
                            <TableCell>2000</TableCell>
                            <TableCell><TextField size = "small" variant="outlined" min = "0" id='a12' onChange={(e) =>{
                                var arr = [...room2];
                                arr[1] = e.target.value;
                                seTableRowoom2(arr);
                                updatecost2(arr);
                            }}/></TableCell>
                            <TableCell>1000</TableCell>
                            <TableCell><TextField size = "small"   variant="outlined" min = "0" id='a13' onChange={(e) =>{
                                var arr = [...room2];
                                arr[2] = e.target.value;
                                seTableRowoom2(arr);
                                updatecost2(arr);
                            }}/></TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>Deluxe</TableCell>
                            <TableCell>2500</TableCell>
                            <TableCell><TextField size = "small"   variant="outlined" min = "0" id='a21' onChange={(e) =>{
                                var arr = [...room2];
                                arr[3] = e.target.value;
                                seTableRowoom2(arr);
                                updatecost2(arr);
                            }}/></TableCell>
                            <TableCell>2500</TableCell>
                            <TableCell><TextField size = "small"   variant="outlined" min = "0" id='a22' onChange={(e) =>{
                                var arr = [...room2];
                                arr[4] = e.target.value;
                                seTableRowoom2(arr);
                                updatecost2(arr);
                            }}/></TableCell>
                            <TableCell>1250</TableCell>
                            <TableCell><TextField size = "small"   variant="outlined" min = "0" id='a23' onChange={(e) =>{
                                var arr = [...room2];
                                arr[5] = e.target.value;
                                seTableRowoom2(arr);
                                updatecost2(arr);
                            }}/></TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>Family Room</TableCell>
                            <TableCell>3700</TableCell>
                            <TableCell><TextField size = "small"   variant="outlined" min = "0" id='a31' onChange={(e) =>{
                                var arr = [...room2];
                                arr[6] = e.target.value;
                                seTableRowoom2(arr);
                                updatecost2(arr);
                            }}/></TableCell>
                            <TableCell>3700</TableCell>
                            <TableCell><TextField size = "small"   variant="outlined" min = "0" id='a32' onChange={(e) =>{
                                var arr = [...room2];
                                arr[7] = e.target.value;
                                seTableRowoom2(arr);
                                updatecost2(arr);
                            }}/></TableCell>
                            <TableCell>1850</TableCell>
                            <TableCell><TextField size = "small"   variant="outlined" min = "0" id='a33' onChange={(e) =>{
                                var arr = [...room2];
                                arr[8] = e.target.value;
                                seTableRowoom2(arr);
                                updatecost2(arr);
                            }}/></TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>Suite</TableCell>
                            <TableCell>4500</TableCell>
                            <TableCell><TextField size = "small"   variant="outlined" min = "0" id='a41' onChange={(e) =>{
                                var arr = [...room2];
                                arr[9] = e.target.value;
                                seTableRowoom2(arr);
                                updatecost2(arr);
                            }}/></TableCell>
                            <TableCell>4500</TableCell>
                            <TableCell><TextField size = "small"   variant="outlined" min = "0" id='a42' onChange={(e) =>{
                                var arr = [...room2];
                                arr[10] = e.target.value;
                                seTableRowoom2(arr);
                                updatecost2(arr);
                            }}/></TableCell>
                            <TableCell>2250</TableCell>
                            <TableCell><TextField size = "small"   variant="outlined" min = "0" id='a43' onChange={(e) =>{
                                var arr = [...room2];
                                arr[11] = e.target.value;
                                seTableRowoom2(arr);
                                updatecost2(arr);
                            }}/></TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>Additional Member</TableCell>
                            <TableCell>350</TableCell>
                            <TableCell><TextField size = "small"   variant="outlined" min = "0" id='a51' onChange={(e) =>{
                                var arr = [...room2];
                                arr[12] = e.target.value;
                                seTableRowoom2(arr);
                                updatecost2(arr);
                            }}/></TableCell>
                            <TableCell>350</TableCell>
                            <TableCell><TextField size = "small"   variant="outlined" min = "0" id='a52' onChange={(e) =>{
                                var arr = [...room2];
                                arr[13] = e.target.value;
                                seTableRowoom2(arr);
                                updatecost2(arr);
                            }}/></TableCell>
                            <TableCell>350</TableCell>
                            <TableCell><TextField size = "small"   variant="outlined" min = "0" id='a53' onChange={(e) =>{
                                var arr = [...room2];
                                arr[14] = e.target.value;
                                seTableRowoom2(arr);
                                updatecost2(arr);
                            }}/></TableCell>

                        </TableRow>
                        </TableBody>
                    </Table>
                    
                </TableContainer>
                </div>
             <div className='roomdetails'>
            <br />
            <br />
            <h1>Breeze Residency</h1>
            <br/>
            <TableContainer component = {Paper} style = {mystyle}>

            <Table>
            <thead>
                <TableRow>
                <TableCell>Room type</TableCell>
                <TableCell>Single Occupancy</TableCell>
                <TableCell>Cart</TableCell>
                <TableCell>Double</TableCell>
                <TableCell>Cart</TableCell>
                <TableCell>Twin-Share</TableCell>
                <TableCell>cart</TableCell>
                </TableRow>
            </thead>
            <TableBody>
                        
                        <TableRow>
                            <TableCell>Standard</TableCell>
                            <TableCell>2500</TableCell>
                            <TableCell><TextField size = "small"   variant="outlined" min = "0" id='a11'onChange={(e) =>{
                                var arr = [...room];
                                arr[0] = e.target.value;
                                seTableRowoom(arr);
                                updatecost(arr);
                            }} /></TableCell>
                            <TableCell>2800</TableCell>
                            <TableCell><TextField size = "small"   variant="outlined" min = "0" id='a12' onChange={(e) =>{
                                var arr = [...room];
                                arr[1] = e.target.value;
                                seTableRowoom(arr);
                                updatecost(arr);
                            }}/></TableCell>
                            <TableCell>1400</TableCell>
                            <TableCell><TextField size = "small"   variant="outlined" min = "0" id='a13' onChange={(e) =>{
                                var arr = [...room];
                                arr[2] = e.target.value;
                                seTableRowoom(arr);
                                updatecost(arr);
                            }}/></TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>Executive</TableCell>
                            <TableCell>3000</TableCell>
                            <TableCell><TextField size = "small"   variant="outlined" min = "0" id='a21' onChange={(e) =>{
                                var arr = [...room];
                                arr[3] = e.target.value;
                                seTableRowoom(arr);
                                updatecost(arr);
                            }}/></TableCell>
                            <TableCell>3600</TableCell>
                            <TableCell><TextField size = "small"   variant="outlined" min = "0" id='a22' onChange={(e) =>{
                                var arr = [...room];
                                arr[4] = e.target.value;
                                seTableRowoom(arr);
                                updatecost(arr);
                            }}/></TableCell>
                            <TableCell>1800</TableCell>
                            <TableCell><TextField size = "small"   variant="outlined" min = "0" id='a23' onChange={(e) =>{
                                var arr = [...room];
                                arr[5] = e.target.value;
                                seTableRowoom(arr);
                                updatecost(arr);
                            }}/></TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>Deluxe</TableCell>
                            <TableCell>3800</TableCell>
                            <TableCell><TextField size = "small"   variant="outlined" min = "0" id='a31' onChange={(e) =>{
                                var arr = [...room];
                                arr[6] = e.target.value;
                                seTableRowoom(arr);
                                updatecost(arr);
                            }}/></TableCell>
                            <TableCell>4300</TableCell>
                            <TableCell><TextField size = "small"   variant="outlined" min = "0" id='a32' onChange={(e) =>{
                                var arr = [...room];
                                arr[7] = e.target.value;
                                seTableRowoom(arr);
                                updatecost(arr);
                            }}/></TableCell>
                            <TableCell>2150</TableCell>
                            <TableCell><TextField size = "small"   variant="outlined" min = "0" id='a33' onChange={(e) =>{
                                var arr = [...room];
                                arr[8] = e.target.value;
                                seTableRowoom(arr);
                                updatecost(arr);
                            }}/></TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>Luxury suite</TableCell>
                            <TableCell>5000</TableCell>
                            <TableCell><TextField size = "small"   variant="outlined" min = "0" id='a41' onChange={(e) =>{
                                var arr = [...room];
                                arr[9] = e.target.value;
                                seTableRowoom(arr);
                                updatecost(arr);
                            }}/></TableCell>
                            <TableCell>5000</TableCell>
                            <TableCell><TextField size = "small"   variant="outlined" min = "0" id='a42' onChange={(e) =>{
                                var arr = [...room];
                                arr[10] = e.target.value;
                                seTableRowoom(arr);
                                updatecost(arr);
                            }}/></TableCell>
                            <TableCell>2500</TableCell>
                            <TableCell><TextField size = "small"   variant="outlined" min = "0" id='a43' onChange={(e) =>{
                                var arr = [...room];
                                arr[11] = e.target.value;
                                seTableRowoom(arr);
                                updatecost(arr);
                            }}/></TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>Grand Suite</TableCell>
                            <TableCell>6700</TableCell>
                            <TableCell><TextField size = "small"   variant="outlined" min = "0" id='a51' onChange={(e) =>{
                                var arr = [...room];
                                arr[12] = e.target.value;
                                seTableRowoom(arr);
                                updatecost(arr);
                            }}/></TableCell>
                            <TableCell>6700</TableCell>
                            <TableCell><TextField size = "small"   variant="outlined" min = "0" id='a52' onChange={(e) =>{
                                var arr = [...room];
                                arr[13] = e.target.value;
                                seTableRowoom(arr);
                                updatecost(arr);
                            }}/></TableCell>
                            <TableCell>3350</TableCell>
                            <TableCell><TextField size = "small"   variant="outlined" min = "0" id='a53' onChange={(e) =>{
                                var arr = [...room];
                                arr[14] = e.target.value;
                                seTableRowoom(arr);
                                updatecost(arr);
                            }}/></TableCell>

                        </TableRow>
                        </TableBody>
                    </Table>
                    
                </TableContainer>
                </div>
                <br />
                <div className='mainc' style = {{padding : '0.3rem 1rem'}}>
                <p style = {{width : 'fit-content'}}>Total Cost : {costs + costs2}</p>

                </div>
                </div>
                <br />
                
                <div className='center'>
                <Stack direction="row" spacing={2} style = {{padding : '1rem'}} align = 'center' divider={<Divider orientation="vertical" flexItem />} component = {Paper}>
                <Button size="large" variant="contained" onClick={() => sendpost()}>
                    Save
                </Button>
                <Link to="/event-participation"><Button size="large" variant="contained" >
                    Next
                </Button></Link>
                
                <Link to="/basedat"><Button size="large" variant="contained" >
                    Edit Previous
                </Button></Link>
                
                </Stack>
                </div>
        </motion.div>
        
    );
}

export default Accomodation;

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
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import { func } from 'prop-types';
import { TextField } from '@mui/material';

function Tshirt() {


    const mystyle = {
        width : 'fit-content',
        padding : '1rem',
      };
    const [need,setn] = useState(false);
    const [saved,sets] = useState(false);

    function sendpost(){
        sets(false);
        if(need){
        var c = [document.querySelector('#c1').checked,document.querySelector('#c2').checked,document.querySelector('#c3').checked,document.querySelector('#c4').checked,document.querySelector('#c5').checked];
        console.log(c);
        var men1 = [document.querySelector('#m1').value,document.querySelector('#m2').value,document.querySelector('#m3').value,document.querySelector('#m4').value,document.querySelector('#m5').value,document.querySelector('#m6').value];
        var men2 = [document.querySelector('#m12').value,document.querySelector('#m22').value,document.querySelector('#m32').value,document.querySelector('#m42').value,document.querySelector('#m52').value,document.querySelector('#m62').value];
        var women1 = [document.querySelector('#w1').value,document.querySelector('#w2').value,document.querySelector('#w3').value,document.querySelector('#w4').value];
        var women2 = [document.querySelector('#w12').value,document.querySelector('#w22').value,document.querySelector('#w32').value,document.querySelector('#w42').value];
        var girls1 = [document.querySelector('#g1').value,document.querySelector('#g2').value,document.querySelector('#g3').value];
        var boys1 = [document.querySelector('#b1').value,document.querySelector('#b2').value,document.querySelector('#b3').value];
        
        var data = {'need' : 1 ,'c' : c, 'men1' : men1 , 'men2' : men2, 'women1' : women1, 'women2' : women2, 'girls1' : girls1 , 'boys1' : boys1};
        }
        else{
            data = {'need' : 0, 'c' : [0,0,0,0,0], 'men1' : [0,0,0,0,0,0] , 'men2' : [0,0,0,0,0,0], 'women1' : [0,0,0,0], 'women2' : [0,0,0,0], 'girls1' : [0,0,0] , 'boys1' : [0,0,0]}
        }
        axios.post('http://localhost:8080/api/tshirtSave' , data).then((res) => console.log(res.data));
        sets(true);
    }

    function updateno(){
        var men1 = [document.querySelector('#m1').value,document.querySelector('#m2').value,document.querySelector('#m3').value,document.querySelector('#m4').value,document.querySelector('#m5').value,document.querySelector('#m6').value];
        var men2 = [document.querySelector('#m12').value,document.querySelector('#m22').value,document.querySelector('#m32').value,document.querySelector('#m42').value,document.querySelector('#m52').value,document.querySelector('#m62').value];
        var women1 = [document.querySelector('#w1').value,document.querySelector('#w2').value,document.querySelector('#w3').value,document.querySelector('#w4').value];
        var women2 = [document.querySelector('#w12').value,document.querySelector('#w22').value,document.querySelector('#w32').value,document.querySelector('#w42').value];
        var girls1 = [document.querySelector('#g1').value,document.querySelector('#g2').value,document.querySelector('#g3').value];
        var boys1 = [document.querySelector('#b1').value,document.querySelector('#b2').value,document.querySelector('#b3').value];
        var sm1,sm2,sw1,sw2,sg,sb;
        sm1=sm2=sw1=sw2=sg=sb=0;
        for(var i of men1){
            if(i != ''){
                sm1 += parseInt(i);
            }
        }
        for(var i of men2){
            if(i != ''){
                sm2 += parseInt(i);
            }
        }
        for(var i of women1){
            if(i != ''){
                sw1 += parseInt(i);
            }
        }
        for(var i of women2){
            if(i != ''){
                sw2 += parseInt(i);
            }
        }
        for(var i of girls1){
            if(i != ''){
                sg += parseInt(i);
            }
        }
        for(var i of boys1){
            if(i != ''){
                sb += parseInt(i);
            }
        }
        document.querySelector('.rm1').innerText = sm1;
        document.querySelector('.rm2').innerText = sm2;
        document.querySelector('.rw1').innerText = sw1;
        document.querySelector('.rw2').innerText = sw2;
        document.querySelector('.rg').innerText = sg;
        document.querySelector('.rb').innerText = sb;



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
        <motion.div drag dragConstraints={{top:0,bottom:0,left:0,right:0}}  className='mtitle'><h1>Tshirt</h1></motion.div>
        <div className='center'>
            <label >I am Interested in T-Shirt : </label>
            <Checkbox onChange={(e) => setn(e.target.checked)}/>
        {need && <motion.div initial ={{opacity : 0}} animate = {{opacity : 1}} className='rdetails'>
        <TableContainer component = {Paper} style = {mystyle}>

            <Table>
                <TableBody>
                <h1>T-shirt for men</h1>
                
                    <TableRow>
                        <TableCell>T-Shirt (Dark Brick Red - Supima Cotton)
Design - Polo with Collar
</TableCell>
                    <TableCell><Checkbox id='c1'/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>T-Shirt (Navy Blue - Sweat-wicking Fabric)
Design - Round Neck for Walking & Exercise
</TableCell>
                    <TableCell><Checkbox id='c2'/></TableCell>
                    </TableRow>
                    <h1>T-shirt for Women</h1>
                    <TableRow>
                        <TableCell>T-Shirt Navy Blue - Sweat-wicking Fabric)
Design - Round Neck for Walking & Exercise
</TableCell>
                    <TableCell><Checkbox id='c3'/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>T-Shirt (Royal Blue - Sweat-wicking Fabric)
Design - Round Neck for Walking & Exercise)
</TableCell>
                    <TableCell><Checkbox id='c4'/></TableCell>
                    </TableRow>
                    <h1>T-Shirt for GrandChildren</h1>
                    <TableRow>
                        <TableCell>T-Shirt (Maroon - Supima Cotton)
Design - Round Neck
</TableCell>
                    <TableCell><Checkbox id='c5'/></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            </TableContainer>
        </motion.div>
        }
        
        <br />
        </div>

        <div className='center'>
        {need && <motion.div initial ={{opacity : 0}} whileInView={{ opacity: 1 }} TableRowansition ={{duration : 2}} className='rdetails'>
        <TableContainer component = {Paper} style = {mystyle}>

            <Table>
                <thead>
                    <TableRow>
                        <TableCell>Description and size</TableCell>
                        <TableCell>Suprima Cotton @ Rs.1,200</TableCell>
                        <TableCell>Sweat-wicking @ Rs.600</TableCell>
                    </TableRow>
                </thead>
                <TableBody>
                    <TableRow>
                        <TableCell>Mens Polo T-Shirt with Collar</TableCell>
                        <TableCell>Qty</TableCell>
                        <TableCell>Qty</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>S(38)</TableCell>
                        <TableCell><TextField onChange = {() => {updateno()}}  id='m1'/></TableCell>
                        <TableCell><TextField onChange = {() => {updateno()}}  id='m12'/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>M(40)</TableCell>
                        <TableCell><TextField onChange = {() => {updateno()}}  id='m2'/></TableCell>
                        <TableCell><TextField onChange = {() => {updateno()}}  id='m22'/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>L(42)</TableCell>
                        <TableCell><TextField onChange = {() => {updateno()}}  id='m3'/></TableCell>
                        <TableCell><TextField onChange = {() => {updateno()}}  id='m32'/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>XL(44)</TableCell>
                        <TableCell><TextField onChange = {() => {updateno()}}  id='m4'/></TableCell>
                        <TableCell><TextField onChange = {() => {updateno()}}  id='m42'/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>XXL(46)</TableCell>
                        <TableCell><TextField onChange = {() => {updateno()}}  id='m5'/></TableCell>
                        <TableCell><TextField onChange = {() => {updateno()}}  id='m52'/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>XXL(48)</TableCell>
                        <TableCell><TextField onChange = {() => {updateno()}}  id='m6'/></TableCell>
                        <TableCell><TextField onChange = {() => {updateno()}}  id='m62'/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><h3>Total Mens T-Shirt</h3></TableCell>
                        <TableCell><h3 className='rm1'></h3></TableCell>
                        <TableCell><h3 className='rm2'></h3></TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell>Womens Round Neck T-shirt</TableCell>
                        <TableCell>Qty</TableCell>
                        <TableCell>Qty</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>S</TableCell>
                        <TableCell><TextField onChange = {() => {updateno()}}  id='w1'/></TableCell>
                        <TableCell><TextField onChange = {() => {updateno()}}  id='w12'/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>M</TableCell>
                        <TableCell><TextField onChange = {() => {updateno()}}  id='w2'/></TableCell>
                        <TableCell><TextField onChange = {() => {updateno()}}  id='w22'/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>L</TableCell>
                        <TableCell><TextField onChange = {() => {updateno()}}  id='w3'/></TableCell>
                        <TableCell><TextField onChange = {() => {updateno()}}  id='w32'/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>XL</TableCell>
                        <TableCell><TextField onChange = {() => {updateno()}}  id='w4'/></TableCell>
                        <TableCell><TextField onChange = {() => {updateno()}}  id='w42'/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><h3>Total Womens T-Shirt</h3></TableCell>
                        <TableCell><h3 className='rw1'></h3></TableCell>
                        <TableCell><h3 className='rw2'></h3></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Children(Girls) Round Neck T-shirt</TableCell>
                        <TableCell>Qty</TableCell>
                        <TableCell>Qty</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>5-8 Years</TableCell>
                        <TableCell><TextField onChange = {() => {updateno()}}  id='g1'/></TableCell>
                        <TableCell></TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell>9-12 Years</TableCell>
                        <TableCell><TextField onChange = {() => {updateno()}}  id='g2'/></TableCell>
                        <TableCell></TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell>13-15 Years</TableCell>
                        <TableCell><TextField onChange = {() => {updateno()}}  id='g3'/></TableCell>
                        <TableCell></TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell><h3>Total Girls T-Shirt</h3></TableCell>
                        <TableCell><h3><label className='rg'></label></h3></TableCell>
                        <TableCell></TableCell>


                    </TableRow>
                    <TableRow>
                        <TableCell>Children(Boys) Round Neck T-shirt</TableCell>
                        <TableCell>Qty</TableCell>
                        <TableCell>Qty</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>5-8 Years</TableCell>
                        <TableCell><TextField onChange = {() => {updateno()}}  id='b1'/></TableCell>
                        <TableCell></TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell>9-12 Years</TableCell>
                        <TableCell><TextField onChange = {() => {updateno()}}  id='b2'/></TableCell>
                        <TableCell></TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell>13-15 Years</TableCell>
                        <TableCell><TextField onChange = {() => {updateno()}}  id='b3'/></TableCell>
                        <TableCell></TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell><h3>Total Boys T-Shirt</h3></TableCell>
                        <TableCell><h3><label className='rb'></label></h3></TableCell>
                        <TableCell></TableCell>

                    </TableRow>
                </TableBody>
            </Table>
            </TableContainer>
            </motion.div>}

        {!need && <p>No Tshirts Selected</p>}
        {/* </div>
        <div className=' c1but'>
        <Link to = "/event-participation"><button className="eventbut">Go Back and edit</button></Link>
        <button className='eventbut' onClick={() => sendpost()}>Save</button>
            
        {saved && <Link to="/tours" ><button className='eventbut'>Continue</button> </Link>}
        {saved &&  <p>Successfully Saved</p>}
        </div>         */}

        <br />
        <div className='center'>
                <Stack direction="row" spacing={2} style = {{padding : '1rem'}} align = 'center' divider={<Divider orientation="vertical" flexItem />} component = {Paper}>
                <Button size="large" variant="contained" >
                    Save
                </Button>
                <Link to="/tours"><Button size="large" variant="contained" >
                    Next
                </Button></Link>
                
                <Link to="/event-participation"><Button size="large" variant="contained" >
                    Edit previous
                </Button></Link>
                
                </Stack>
                </div>
            </div>
    </motion.div> );
}

export default Tshirt;

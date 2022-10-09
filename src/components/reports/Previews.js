import React from 'react';
import axios from 'axios';
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
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
import { TextField } from '@mui/material';

function Previews() {
    
    const [hotel1,seth1] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    const [hotel2,seth2] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    const [m1a,setm1] = useState([0,0,0,0,0,0]);
    const [m2a,setm2] = useState([0,0,0,0,0,0]);
    const [wa1,setw] = useState([0,0,0,0]);
    const [ba1,setb] = useState([0,0,0]);
    const [ga1,setg] = useState([0,0,0]);
    var data = ['Name', 'Branch' ,'Spouse', 'City' , 'Country' , 'Region' , 'Mobile' , 'Email' , 'T-Shirt Size' ];

    var res;
    var got = 0
    useEffect(() => {
        res = axios.get('http://localhost:8080/api/previewData').then((res) => {
        res.data.shift();
        console.log(res);
        
        var a1 = res.data[5];
        a1 = [...a1];
        seth2(a1);
        var a2 = res.data[4];
        a2 = [...a2];
        seth1(a2);

        var temp = res.data[10];
        var m1 = temp.menQuantity.supimaCotton;
        var am1 = [m1.sSize,m1.mSize,m1.lSize,m1.xlSize,m1.xxlSize,m1.xxxlSize];
        m1 = temp.menQuantity.sweatWickingFabric;
        var am2 = [m1.sSize,m1.mSize,m1.lSize,m1.xlSize,m1.xxlSize,m1.xxxlSize];
        setm1(am1);
        setm2(am2); 

        m1 = temp.womenQuantity.supimaCotton;
        var aw1 = [m1.sSize,m1.mSize,m1.lSize,m1.xlSize];
        setw(aw1);
        m1 = temp.grandKids.boys;
        var ba = [m1.category1,m1.category2,m1.category3];
        setb(ba);
        m1 = temp.grandKids.girls;
        var ga = [m1.category1,m1.category2,m1.category3];
        setg(ga);
        document.querySelector('.paxtype').innerText = res.data[0];
        document.querySelector('.cin').innerText = res.data[2];
        document.querySelector('.cout').innerText = res.data[3];
        document.querySelector('.pax1').innerText = 1
        document.querySelector('.pax2').innerText = res.data[1].spouse;
        document.querySelector('.pax3').innerText = res.data[1].familyMembers;
        document.querySelector('.pax4').innerText = res.data[1].grandKids;
        document.querySelector('#v1').innerText = res.data[6].count.veg;
        document.querySelector('#nv1').innerText = res.data[6].count.nonveg;
        document.querySelector('#v2').innerText = res.data[7].count;
        document.querySelector('#nv2').innerText = res.data[8].count.veg;
        document.querySelector('#v3').innerText = res.data[8].count.nonveg;
        document.querySelector('.cloth').innerText = res.data[10];
        document.querySelector('.t1').innerText = res.data[11][1].TableRowichy;
        document.querySelector('.t2').innerText = res.data[11][1].phuketKrabi;
        document.querySelector('.t3').innerText = res.data[11][1].mysoreBandipur;
        document.querySelector('.t4').innerText = res.data[11][1].belurHampi;

        

    });
    return () => {
        console.log('This will be logged on unmount');
      };
    },[])

    const mystyle = {
        width : 'fit-content',
        padding : '1rem',
      };

    return (
        <>
        <div className='center'>
        <h1>Previews</h1>
        <div className='center'>
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
                            <TableCell>as per Base Data</TableCell>
                            <TableCell><TextField size = "small" id="outlined-basic" label={dat} variant="outlined" /></TableCell>
                        </TableRow>
                    )
                    )}
                    </TableBody>
                </Table>
                

                </TableContainer>
        </div>
        
                <br />

        <TableContainer component = {Paper}>
        <Table>
            <TableBody>
                <TableRow>
                    <TableCell>Registered</TableCell>
                    <TableCell>Not interested</TableCell>
                    <TableCell>I cant say</TableCell>
                    <TableCell></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Hotel room required</TableCell>
                    <TableCell>Pending</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>

                </TableRow>
                <TableRow>
                <TableCell>participationType(with family)</TableCell>
                <TableCell><p className='paxtype'></p></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>

                </TableRow>
                <TableRow>
                    <TableCell>Alumni-Nos</TableCell>
                    <TableCell>Spouse - Nos</TableCell>
                    <TableCell>Family - Nos</TableCell>
                    <TableCell>Grand Kids - Nos</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><p className='pax1'></p></TableCell>
                    <TableCell><p className='pax2'></p></TableCell>
                    <TableCell><p className='pax3'></p></TableCell>
                    <TableCell><p className='pax4'></p></TableCell>

                </TableRow>
                <TableRow>
                    <TableCell>Check IN</TableCell>
                    <TableCell>Check OUT</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><p className='cin'></p></TableCell>
                    <TableCell><p className='cout'></p></TableCell>
                </TableRow>
                 </TableBody>
        </Table>
        </TableContainer>
        <br />
        <TableContainer component = {Paper}>

        <Table>
        
            <TableHead>
                <TableRow>
                <TableCell>Room type</TableCell>
                <TableCell>Single Occupancy</TableCell>
                <TableCell>Cart</TableCell>
                <TableCell>Double</TableCell>
                <TableCell>Cart</TableCell>
                <TableCell>Twin-Share</TableCell>
                <TableCell>cart</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                        
                        <TableRow>
                            <TableCell>Standard</TableCell>
                            <TableCell>2500</TableCell>
                            <TableCell><TextField id='a11' value = {hotel1[0]} /></TableCell>
                            <TableCell>2800</TableCell>
                            <TableCell><TextField id='a12' value = {hotel1[1]}/></TableCell>
                            <TableCell>1400</TableCell>
                            <TableCell><TextField id='a13' value = {hotel1[2]}/></TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>Executive</TableCell>
                            <TableCell>3000</TableCell>
                            <TableCell><TextField id='a21' value = {hotel1[3]}/></TableCell>
                            <TableCell>3600</TableCell>
                            <TableCell><TextField id='a22' value = {hotel1[4]}/></TableCell>
                            <TableCell>1800</TableCell>
                            <TableCell><TextField id='a23' value = {hotel1[5]}/></TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>Deluxe</TableCell>
                            <TableCell>3800</TableCell>
                            <TableCell><TextField id='a31' value = {hotel1[6]}/></TableCell>
                            <TableCell>4300</TableCell>
                            <TableCell><TextField id='a32' value = {hotel1[7]}/></TableCell>
                            <TableCell>2150</TableCell>
                            <TableCell><TextField id='a33' value = {hotel1[8]}/></TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>Luxury suite</TableCell>
                            <TableCell>5000</TableCell>
                            <TableCell><TextField id='a41' value = {hotel1[9]}/></TableCell>
                            <TableCell>5000</TableCell>
                            <TableCell><TextField id='a42' value = {hotel1[10]} /></TableCell>
                            <TableCell>2500</TableCell>
                            <TableCell><TextField id='a43' value = {hotel1[11]} /></TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>Grand Suite</TableCell>
                            <TableCell>6700</TableCell>
                            <TableCell><TextField id='a51' value = {hotel1[12]} /></TableCell>
                            <TableCell>6700</TableCell>
                            <TableCell><TextField id='a52' value = {hotel1[13]} /></TableCell>
                            <TableCell>3350</TableCell>
                            <TableCell><TextField id='a53' value = {hotel1[14]} /></TableCell>

                        </TableRow>
                        </TableBody>
                    </Table>
</TableContainer>
<br />
        <TableContainer component = {Paper}>

            <Table>
            
            <TableHead>
                <TableRow>
                <TableCell>Room type</TableCell>
                <TableCell>Single Occupancy</TableCell>
                <TableCell>Cart</TableCell>
                <TableCell>Double</TableCell>
                <TableCell>Cart</TableCell>
                <TableCell>Twin-Share</TableCell>
                <TableCell>cart</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                        
                        <TableRow>
                            <TableCell>Standard</TableCell>
                            <TableCell>2000</TableCell>
                            <TableCell><TextField id='a11' value = {hotel2[0]} /></TableCell>
                            <TableCell>2800</TableCell>
                            <TableCell><TextField id='a12' value = {hotel2[1]}/></TableCell>
                            <TableCell>1400</TableCell>
                            <TableCell><TextField id='a13' value = {hotel2[2]}/></TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>Deluxe</TableCell>
                            <TableCell>3000</TableCell>
                            <TableCell><TextField id='a21' value = {hotel2[3]}/></TableCell>
                            <TableCell>3600</TableCell>
                            <TableCell><TextField id='a22' value = {hotel2[4]}/></TableCell>
                            <TableCell>1800</TableCell>
                            <TableCell><TextField id='a23' value = {hotel2[5]}/></TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>Family Room</TableCell>
                            <TableCell>3800</TableCell>
                            <TableCell><TextField id='a31' value = {hotel2[6]}/></TableCell>
                            <TableCell>4300</TableCell>
                            <TableCell><TextField id='a32' value = {hotel2[7]}/></TableCell>
                            <TableCell>2150</TableCell>
                            <TableCell><TextField id='a33' value = {hotel2[8]}/></TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>Suite</TableCell>
                            <TableCell>5000</TableCell>
                            <TableCell><TextField id='a41' value = {hotel2[9]}/></TableCell>
                            <TableCell>5000</TableCell>
                            <TableCell><TextField id='a42' value = {hotel2[10]} /></TableCell>
                            <TableCell>2500</TableCell>
                            <TableCell><TextField id='a43' value = {hotel2[11]} /></TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>Additional Member</TableCell>
                            <TableCell>6700</TableCell>
                            <TableCell><TextField id='a51' value = {hotel2[12]} /></TableCell>
                            <TableCell>6700</TableCell>
                            <TableCell><TextField id='a52' value = {hotel2[13]} /></TableCell>
                            <TableCell>3350</TableCell>
                            <TableCell><TextField id='a53' value = {hotel2[14]} /></TableCell>

                        </TableRow>
                        </TableBody>
                    </Table>
                    </TableContainer>
                    <TableContainer component = {Paper}>

                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Event Participation</TableCell>
                            </TableRow>
                            <TableRow><TableCell>No. of Participants for Event at Hotel
</TableCell>   
<TableCell>Veg</TableCell>
                    <TableCell><p id='v1'></p></TableCell>
                    <TableCell>Non-Veg</TableCell>
                    <TableCell><p id='nv1'></p></TableCell>
                    </TableRow>
                    <TableRow><TableCell>No. of Participants for Event at Campus



</TableCell>
                    <TableCell><p id='v3'></p></TableCell>
                    </TableRow>
                    <TableRow><TableCell>No. of Participants for Event at Hotel
</TableCell>   
<TableCell>Veg</TableCell>
                    <TableCell><p id='v2'></p></TableCell>
                    <TableCell>Non-Veg</TableCell>
                    <TableCell><p id='nv2'></p></TableCell>
                    </TableRow>
                        </TableBody>
                    </Table>
                    </TableContainer>

                    <p className='cloth'></p>
                    <TableContainer component = {Paper}>

                    <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Description and size</TableCell>
                        <TableCell>Suprima Cotton @ Rs.1,200</TableCell>
                        <TableCell>Sweat-wicking @ Rs.600</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Mens Polo T-Shirt with Collar</TableCell>
                        <TableCell>Qty</TableCell>
                        <TableCell>Qty</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>S(38)</TableCell>
                        <TableCell><TextField id='m1'  value = {m1a[0]}/></TableCell>
                        <TableCell><TextField id='m12' value = {m2a[0]}/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>M(40)</TableCell>
                        <TableCell><TextField id='m2' value = {m1a[1]}/></TableCell>
                        <TableCell><TextField id='m22' value = {m2a[1]}/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>L(42)</TableCell>
                        <TableCell><TextField id='m3' value = {m1a[2]}/></TableCell>
                        <TableCell><TextField id='m32' value = {m2a[2]}/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>XL(44)</TableCell>
                        <TableCell><TextField id='m4' value = {m1a[3]}/></TableCell>
                        <TableCell><TextField id='m42' value = {m2a[3]}/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>XXL(46)</TableCell>
                        <TableCell><TextField id='m5' value = {m1a[4]}/></TableCell>
                        <TableCell><TextField id='m52' value = {m2a[4]}/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>XXL(48)</TableCell>
                        <TableCell><TextField id='m6' value = {m1a[5]}/></TableCell>
                        <TableCell><TextField id='m62' value = {m2a[5]}/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Total Mens T-Shirt</TableCell>
                        <TableCell>{m1a[6]}</TableCell>
                        <TableCell>{m2a[6]}</TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell>Womens Round Neck T-shirt</TableCell>
                        <TableCell>Qty</TableCell>
                        <TableCell>Qty</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>S</TableCell>
                        <TableCell><TextField id='w1'  value = {wa1[0]}/></TableCell>
                        <TableCell><TextField id='w12'/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>M</TableCell>
                        <TableCell><TextField id='w2' value = {wa1[1]}/></TableCell>
                        <TableCell><TextField id='w22'/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>L</TableCell>
                        <TableCell><TextField id='w3' value = {wa1[2]}/></TableCell>
                        <TableCell><TextField id='w32'/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>XL</TableCell>
                        <TableCell><TextField id='w4' value = {wa1[3]}/></TableCell>
                        <TableCell><TextField id='w42'/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Total Womens T-Shirt</TableCell>
                        <TableCell>{wa1[4]}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Children(Girls) Round Neck T-shirt</TableCell>
                        <TableCell>Qty</TableCell>
                        <TableCell>Qty</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>5-8 Years</TableCell>
                        <TableCell><TextField id='g1' value = {ga1[0]}/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>9-12 Years</TableCell>
                        <TableCell><TextField id='g2' value = {ga1[1]}/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>13-15 Years</TableCell>
                        <TableCell><TextField id='g3' value = {ga1[2]}/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Total Girls T-Shirt</TableCell>
                        <TableCell>{ga1[3]}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Children(Boys) Round Neck T-shirt</TableCell>
                        <TableCell>Qty</TableCell>
                        <TableCell>Qty</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>5-8 Years</TableCell>
                        <TableCell><TextField id='b1' value = {ba1[0]}/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>9-12 Years</TableCell>
                        <TableCell><TextField id='b2' value = {ba1[1]}/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>13-15 Years</TableCell>
                        <TableCell><TextField id='b3' value = {ba1[2]}/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Total Boys T-Shirt</TableCell>
                        <TableCell>{ba1[3]}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            </TableContainer>
            <br />
            <TableContainer component = {Paper}>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Tour Name</TableCell>
                        <TableCell>26th JAN</TableCell>
                        <TableCell>26th JAN DEP</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>TableRowichy Local</TableCell>
                        <TableCell className='t1'>no of participation</TableCell>
                        <TableCell>no of participation</TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell>Phuket-Krabi Tour</TableCell>
                        <TableCell className='t2'>no of participation</TableCell>
                        <TableCell>no of participation</TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell>Mysore Tour</TableCell>
                        <TableCell className='t3'>no of participation</TableCell>
                        <TableCell>no of participation</TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell>Belur-Hampi Tour</TableCell>
                        <TableCell className='t4'>no of participation</TableCell>
                        <TableCell>no of participation</TableCell>

                    </TableRow>
                </TableHead>
            </Table>
            </TableContainer>
                </div>
            <br />
            <div className='center'>
            <TableContainer component = {Paper}>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><h1>Costs payable</h1></TableCell>
                            <TableCell><h1>Total Due</h1></TableCell>
                            <TableCell><h1>Payable Now</h1></TableCell>
                        </TableRow>

                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Participation Fee</TableCell>
                            <TableCell>Pending</TableCell>
                            <TableCell>Full amount</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Hotel Room</TableCell>
                            <TableCell>Pending</TableCell>
                            <TableCell>50%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Dinner for event</TableCell>
                            <TableCell>Pending</TableCell>
                            <TableCell>Full amount</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>T-Shirt</TableCell>
                            <TableCell>Pending</TableCell>
                            <TableCell>Full amount</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>TableRowichy Local Tour</TableCell>
                            <TableCell>Pending</TableCell>
                            <TableCell>Sep 23</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Phuket-Krabi Tour</TableCell>
                            <TableCell>Pending</TableCell>
                            <TableCell>Sep 23</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Mysore Tour</TableCell>
                            <TableCell>Pending</TableCell>
                            <TableCell>Sep 23</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Belur-Hampi Tour</TableCell>
                            <TableCell>Pending</TableCell>
                            <TableCell>Sep 23</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </TableContainer>
            </div>    
            <br />
            <div className='center'>
            <h3>EDIT CONTENT</h3>
            <Stack direction="row" spacing={2} style = {{padding : '1rem'}} align = 'center' divider={<Divider orientation="vertical" flexItem />} component = {Paper}>
                    
            <Link to="/basedat"><Button size="large" variant="contained" >
                    Base Data
                </Button></Link>
                <Link to="/accomodation"><Button size="large" variant="contained" >
                    Accomodation
                </Button></Link>
                
                <Link to="/event-participation"><Button size="large" variant="contained" >
                    Event Participation
                </Button></Link>

                <Link to="/tshirt"><Button size="large" variant="contained" >
                    Tshirts
                </Button></Link>

                <Link to="/tours"><Button size="large" variant="contained" >
                    Tours
                </Button></Link>
                
                </Stack>
</div>
            <div>
            <br />
            <Button size="large" variant="contained" color = 'warning'>
                    Submit Registration
                </Button>
            </div>
            {/* <div className='center'>
            <h1>Edit Content</h1>
            <Link to="/" ><button className='eventbut'>BaseData</button> </Link>
            <Link to="/accomodation" ><button className='eventbut'>Accomodation</button> </Link>
            <Link to="/event-participation" ><button className='eventbut'>EventParticipation</button> </Link>
            <Link to="/tshirt" ><button className='eventbut'>Tshirt</button> </Link>
            <Link to="/tours" ><button className='eventbut'>Tours</button> </Link>

            </div> */}
        </>
    );
}

export default Previews;

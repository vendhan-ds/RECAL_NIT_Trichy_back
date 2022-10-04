import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

function Previews() {
    
    const [hotel1,seth1] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    const [hotel2,seth2] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    const [m1a,setm1] = useState([0,0,0,0,0,0]);
    const [m2a,setm2] = useState([0,0,0,0,0,0]);
    const [wa1,setw] = useState([0,0,0,0]);
    const [ba1,setb] = useState([0,0,0]);
    const [ga1,setg] = useState([0,0,0]);

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
        document.querySelector('.t1').innerText = res.data[11][1].trichy;
        document.querySelector('.t2').innerText = res.data[11][1].phuketKrabi;
        document.querySelector('.t3').innerText = res.data[11][1].mysoreBandipur;
        document.querySelector('.t4').innerText = res.data[11][1].belurHampi;

        

    });
    return () => {
        console.log('This will be logged on unmount');
      };
    },[])

    return (
        <>
        <div className='mainc'>
        <h1>Previews</h1>
        <table>
            <tbody>
                <tr>
                    <td>Registered</td>
                    <td>Not interested</td>
                    <td>I cant say</td>
                </tr>
                <tr>
                    <td>Hotel room required</td>
                    <td><input type="checkbox" disabled checked="true"></input></td>

                </tr>
                <tr>
                <td>participationType(with family)</td>
                <td><p className='paxtype'></p></td>
           
                </tr>
                <tr>
                    <td>Alumni-Nos</td>
                    <td>Spouse - Nos</td>
                    <td>Family - Nos</td>
                    <td>Grand Kids - Nos</td>
                </tr>
                <tr>
                    <td><p className='pax1'></p></td>
                    <td><p className='pax2'></p></td>
                    <td><p className='pax3'></p></td>
                    <td><p className='pax4'></p></td>

                </tr>
                <tr>
                    <td>Check IN</td>
                    <td>Check OUT</td>
                </tr>
                <tr>
                    <td><p className='cin'></p></td>
                    <td><p className='cout'></p></td>
                </tr>
                 </tbody>
        </table>
        <table>
            <thead>
                <tr>
                <td>Room type</td>
                <td>Single Occupancy</td>
                <td>Cart</td>
                <td>Double</td>
                <td>Cart</td>
                <td>Twin-Share</td>
                <td>cart</td>
                </tr>
            </thead>
            <tbody>
                        
                        <tr>
                            <td>Standard</td>
                            <td>2500</td>
                            <td><input type="number" id='a11' value = {hotel1[0]} ></input></td>
                            <td>2800</td>
                            <td><input type="number" id='a12' value = {hotel1[1]}></input></td>
                            <td>1400</td>
                            <td><input type="number" id='a13' value = {hotel1[2]}></input></td>

                        </tr>
                        <tr>
                            <td>Executive</td>
                            <td>3000</td>
                            <td><input type="number" id='a21' value = {hotel1[3]}></input></td>
                            <td>3600</td>
                            <td><input type="number" id='a22' value = {hotel1[4]}></input></td>
                            <td>1800</td>
                            <td><input type="number" id='a23' value = {hotel1[5]}></input></td>

                        </tr>
                        <tr>
                            <td>Deluxe</td>
                            <td>3800</td>
                            <td><input type="number" id='a31' value = {hotel1[6]}></input></td>
                            <td>4300</td>
                            <td><input type="number" id='a32' value = {hotel1[7]}></input></td>
                            <td>2150</td>
                            <td><input type="number" id='a33' value = {hotel1[8]}></input></td>

                        </tr>
                        <tr>
                            <td>Luxury suite</td>
                            <td>5000</td>
                            <td><input type="number" id='a41' value = {hotel1[9]}></input></td>
                            <td>5000</td>
                            <td><input type="number" id='a42' value = {hotel1[10]} ></input></td>
                            <td>2500</td>
                            <td><input type="number" id='a43' value = {hotel1[11]} ></input></td>

                        </tr>
                        <tr>
                            <td>Grand Suite</td>
                            <td>6700</td>
                            <td><input type="number" id='a51' value = {hotel1[12]} ></input></td>
                            <td>6700</td>
                            <td><input type="number" id='a52' value = {hotel1[13]} ></input></td>
                            <td>3350</td>
                            <td><input type="number" id='a53' value = {hotel1[14]} ></input></td>

                        </tr>
                        </tbody>
                    </table>

            <table>
            <thead>
                <tr>
                <td>Room type</td>
                <td>Single Occupancy</td>
                <td>Cart</td>
                <td>Double</td>
                <td>Cart</td>
                <td>Twin-Share</td>
                <td>cart</td>
                </tr>
            </thead>
            <tbody>
                        
                        <tr>
                            <td>Standard</td>
                            <td>2000</td>
                            <td><input type="number" id='a11' value = {hotel2[0]} ></input></td>
                            <td>2800</td>
                            <td><input type="number" id='a12' value = {hotel2[1]}></input></td>
                            <td>1400</td>
                            <td><input type="number" id='a13' value = {hotel2[2]}></input></td>

                        </tr>
                        <tr>
                            <td>Deluxe</td>
                            <td>3000</td>
                            <td><input type="number" id='a21' value = {hotel2[3]}></input></td>
                            <td>3600</td>
                            <td><input type="number" id='a22' value = {hotel2[4]}></input></td>
                            <td>1800</td>
                            <td><input type="number" id='a23' value = {hotel2[5]}></input></td>

                        </tr>
                        <tr>
                            <td>Family Room</td>
                            <td>3800</td>
                            <td><input type="number" id='a31' value = {hotel2[6]}></input></td>
                            <td>4300</td>
                            <td><input type="number" id='a32' value = {hotel2[7]}></input></td>
                            <td>2150</td>
                            <td><input type="number" id='a33' value = {hotel2[8]}></input></td>

                        </tr>
                        <tr>
                            <td>Suite</td>
                            <td>5000</td>
                            <td><input type="number" id='a41' value = {hotel2[9]}></input></td>
                            <td>5000</td>
                            <td><input type="number" id='a42' value = {hotel2[10]} ></input></td>
                            <td>2500</td>
                            <td><input type="number" id='a43' value = {hotel2[11]} ></input></td>

                        </tr>
                        <tr>
                            <td>Additional Member</td>
                            <td>6700</td>
                            <td><input type="number" id='a51' value = {hotel2[12]} ></input></td>
                            <td>6700</td>
                            <td><input type="number" id='a52' value = {hotel2[13]} ></input></td>
                            <td>3350</td>
                            <td><input type="number" id='a53' value = {hotel2[14]} ></input></td>

                        </tr>
                        </tbody>
                    </table>

                    <table>
                        <tbody>
                            <tr>
                                <td>Event Participation</td>
                            </tr>
                            <tr><td>No. of Participants for Event at Hotel
</td>   
<td>Veg</td>
                    <td><p id='v1'></p></td>
                    <td>Non-Veg</td>
                    <td><p id='nv1'></p></td>
                    </tr>
                    <tr><td>No. of Participants for Event at Campus



</td>
                    <td><p id='v3'></p></td>
                    </tr>
                    <tr><td>No. of Participants for Event at Hotel
</td>   
<td>Veg</td>
                    <td><p id='v2'></p></td>
                    <td>Non-Veg</td>
                    <td><p id='nv2'></p></td>
                    </tr>
                        </tbody>
                    </table>
                    <p className='cloth'></p>
                    <table>
                <thead>
                    <tr>
                        <td>Description and size</td>
                        <td>Suprima Cotton @ Rs.1,200</td>
                        <td>Sweat-wicking @ Rs.600</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mens Polo T-Shirt with Collar</td>
                        <td>Qty</td>
                        <td>Qty</td>
                    </tr>
                    <tr>
                        <td>S(38)</td>
                        <td><input type="number" id='m1'  value = {m1a[0]}></input></td>
                        <td><input type="number" id='m12' value = {m2a[0]}></input></td>
                    </tr>
                    <tr>
                        <td>M(40)</td>
                        <td><input type="number" id='m2' value = {m1a[1]}></input></td>
                        <td><input type="number" id='m22' value = {m2a[1]}></input></td>
                    </tr>
                    <tr>
                        <td>L(42)</td>
                        <td><input type="number" id='m3' value = {m1a[2]}></input></td>
                        <td><input type="number" id='m32' value = {m2a[2]}></input></td>
                    </tr>
                    <tr>
                        <td>XL(44)</td>
                        <td><input type="number" id='m4' value = {m1a[3]}></input></td>
                        <td><input type="number" id='m42' value = {m2a[3]}></input></td>
                    </tr>
                    <tr>
                        <td>XXL(46)</td>
                        <td><input type="number" id='m5' value = {m1a[4]}></input></td>
                        <td><input type="number" id='m52' value = {m2a[4]}></input></td>
                    </tr>
                    <tr>
                        <td>XXL(48)</td>
                        <td><input type="number" id='m6' value = {m1a[5]}></input></td>
                        <td><input type="number" id='m62' value = {m2a[5]}></input></td>
                    </tr>
                    <tr>
                        <td>Total Mens T-Shirt</td>
                        {/* <td>{totalmen1}</td>
                        <td>{totalmen2}</td> */}

                    </tr>
                    <tr>
                        <td>Womens Round Neck T-shirt</td>
                        <td>Qty</td>
                        <td>Qty</td>
                    </tr>
                    <tr>
                        <td>S</td>
                        <td><input type="number" id='w1'  value = {wa1[0]}></input></td>
                        <td><input type="number" id='w12'></input></td>
                    </tr>
                    <tr>
                        <td>M</td>
                        <td><input type="number" id='w2' value = {wa1[1]}></input></td>
                        <td><input type="number" id='w22'></input></td>
                    </tr>
                    <tr>
                        <td>L</td>
                        <td><input type="number" id='w3' value = {wa1[2]}></input></td>
                        <td><input type="number" id='w32'></input></td>
                    </tr>
                    <tr>
                        <td>XL</td>
                        <td><input type="number" id='w4' value = {wa1[3]}></input></td>
                        <td><input type="number" id='w42'></input></td>
                    </tr>
                    <tr>
                        <td>Total Womens T-Shirt</td>
                        {/* <td>{totalwomen1}</td>
                        <td>{totalwomen2}</td> */}
                    </tr>
                    <tr>
                        <td>Children(Girls) Round Neck T-shirt</td>
                        <td>Qty</td>
                        <td>Qty</td>
                    </tr>
                    <tr>
                        <td>5-8 Years</td>
                        <td><input type="number" id='g1' value = {ga1[0]}></input></td>
                    </tr>
                    <tr>
                        <td>9-12 Years</td>
                        <td><input type="number" id='g2' value = {ga1[1]}></input></td>
                    </tr>
                    <tr>
                        <td>13-15 Years</td>
                        <td><input type="number" id='g3' value = {ga1[2]}></input></td>
                    </tr>
                    <tr>
                        <td>Total Girls T-Shirt</td>
                        {/* <td>{totalgirl}</td> */}
                    </tr>
                    <tr>
                        <td>Children(Boys) Round Neck T-shirt</td>
                        <td>Qty</td>
                        <td>Qty</td>
                    </tr>
                    <tr>
                        <td>5-8 Years</td>
                        <td><input type="number" id='b1' value = {ba1[0]}></input></td>
                    </tr>
                    <tr>
                        <td>9-12 Years</td>
                        <td><input type="number" id='b2' value = {ba1[1]}></input></td>
                    </tr>
                    <tr>
                        <td>13-15 Years</td>
                        <td><input type="number" id='b3' value = {ba1[2]}></input></td>
                    </tr>
                    <tr>
                        <td>Total Girls T-Shirt</td>
                    
                    </tr>
                </tbody>
            </table>
            <table>
                <thead>
                    <tr>
                        <td>Tour Name</td>
                        <td>26th JAN</td>
                        <td>26th JAN DEP</td>
                    </tr>
                    <tr>
                        <td>Trichy Local</td>
                        <td className='t1'>no of participation</td>
                        <td>no of participation</td>

                    </tr>
                    <tr>
                        <td>Phuket-Krabi Tour</td>
                        <td className='t2'>no of participation</td>
                        <td>no of participation</td>

                    </tr>
                    <tr>
                        <td>Mysore Tour</td>
                        <td className='t3'>no of participation</td>
                        <td>no of participation</td>

                    </tr>
                    <tr>
                        <td>Belur-Hampi Tour</td>
                        <td className='t4'>no of participation</td>
                        <td>no of participation</td>

                    </tr>
                </thead>
            </table>

                </div>

            <div className='mainc'>
                <table>
                    <thead>
                        <tr>
                            <td><h1>Costs payable</h1></td>
                            <td><h1>Total Due</h1></td>
                            <td><h1>Payable Now</h1></td>
                        </tr>

                    </thead>
                    <tbody>
                        <tr>
                            <td>Participation Fee</td>
                            <td>Pending</td>
                            <td>Full amount</td>
                        </tr>
                        <tr>
                            <td>Hotel Room</td>
                            <td>Pending</td>
                            <td>50%</td>
                        </tr>
                        <tr>
                            <td>Dinner for event</td>
                            <td>Pending</td>
                            <td>Full amount</td>
                        </tr>
                        <tr>
                            <td>T-Shirt</td>
                            <td>Pending</td>
                            <td>Full amount</td>
                        </tr>
                        <tr>
                            <td>Trichy Local Tour</td>
                            <td>Pending</td>
                            <td>Sep 23</td>
                        </tr>
                        <tr>
                            <td>Phuket-Krabi Tour</td>
                            <td>Pending</td>
                            <td>Sep 23</td>
                        </tr>
                        <tr>
                            <td>Mysore Tour</td>
                            <td>Pending</td>
                            <td>Sep 23</td>
                        </tr>
                        <tr>
                            <td>Belur-Hampi Tour</td>
                            <td>Pending</td>
                            <td>Sep 23</td>
                        </tr>
                    </tbody>
                </table>
            </div>    

            <div className='mainc'>
            <h1>Edit Content</h1>
            <Link to="/" ><button className='eventbut'>BaseData</button> </Link>
            <Link to="/accomodation" ><button className='eventbut'>Accomodation</button> </Link>
            <Link to="/event-participation" ><button className='eventbut'>EventParticipation</button> </Link>
            <Link to="/tshirt" ><button className='eventbut'>Tshirt</button> </Link>
            <Link to="/tours" ><button className='eventbut'>Tours</button> </Link>

            </div>
        </>
    );
}

export default Previews;

import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

function Previews() {

    async function get(){   
        var res = await axios.get('http://localhost:8080/api/previewData');
        console.log(res);
        return res
    } 

    var res = get();

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
                <td><input type="checkbox" disabled checked="true"></input></td>
           
                </tr>
                <tr>
                    <td>Alumni-Nos</td>
                    <td>Spouse - Nos</td>
                    <td>Family - Nos</td>
                    <td>Grand Kids - Nos</td>
                </tr>
                <tr>
                    <td>Check IN</td>
                    <td>Check OUT</td>
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
                            <td><input type="number" id='a11'onChange={(e) =>{
                                var arr = [...room];
                                arr[0] = e.target.value;
                                setroom(arr);
                                updatecost(arr);
                            }} ></input></td>
                            <td>2800</td>
                            <td><input type="number" id='a12'></input></td>
                            <td>1400</td>
                            <td><input type="number" id='a13'></input></td>

                        </tr>
                        <tr>
                            <td>Executive</td>
                            <td>3000</td>
                            <td><input type="number" id='a21'></input></td>
                            <td>3600</td>
                            <td><input type="number" id='a22'></input></td>
                            <td>1800</td>
                            <td><input type="number" id='a23'></input></td>

                        </tr>
                        <tr>
                            <td>Deluxe</td>
                            <td>3800</td>
                            <td><input type="number" id='a31'></input></td>
                            <td>4300</td>
                            <td><input type="number" id='a32'></input></td>
                            <td>2150</td>
                            <td><input type="number" id='a33'></input></td>

                        </tr>
                        <tr>
                            <td>Luxury suite</td>
                            <td>5000</td>
                            <td><input type="number" id='a41'></input></td>
                            <td>5000</td>
                            <td><input type="number" id='a42' ></input></td>
                            <td>2500</td>
                            <td><input type="number" id='a43' ></input></td>

                        </tr>
                        <tr>
                            <td>Grand Suite</td>
                            <td>6700</td>
                            <td><input type="number" id='a51' ></input></td>
                            <td>6700</td>
                            <td><input type="number" id='a52' ></input></td>
                            <td>3350</td>
                            <td><input type="number" id='a53' ></input></td>

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
                            <td><input type="number" id='a11'onChange={(e) =>{
                                var arr = [...room2];
                                arr[0] = e.target.value;
                                setroom2(arr);
                                updatecost2(arr);
                            }} ></input></td>
                            <td>2800</td>
                            <td><input type="number" id='a12'></input></td>
                            <td>1400</td>
                            <td><input type="number" id='a13'></input></td>

                        </tr>
                        <tr>
                            <td>Deluxe</td>
                            <td>3000</td>
                            <td><input type="number" id='a21'></input></td>
                            <td>3600</td>
                            <td><input type="number" id='a22'></input></td>
                            <td>1800</td>
                            <td><input type="number" id='a23'></input></td>

                        </tr>
                        <tr>
                            <td>Family Room</td>
                            <td>3800</td>
                            <td><input type="number" id='a31'></input></td>
                            <td>4300</td>
                            <td><input type="number" id='a32'></input></td>
                            <td>2150</td>
                            <td><input type="number" id='a33'></input></td>

                        </tr>
                        <tr>
                            <td>Suite</td>
                            <td>5000</td>
                            <td><input type="number" id='a41'></input></td>
                            <td>5000</td>
                            <td><input type="number" id='a42' ></input></td>
                            <td>2500</td>
                            <td><input type="number" id='a43' ></input></td>

                        </tr>
                        <tr>
                            <td>Additional Member</td>
                            <td>6700</td>
                            <td><input type="number" id='a51' ></input></td>
                            <td>6700</td>
                            <td><input type="number" id='a52' ></input></td>
                            <td>3350</td>
                            <td><input type="number" id='a53' ></input></td>

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
                    <td><input type = "number" min="0" id='v1'></input></td>
                    <td>Non-Veg</td>
                    <td><input type = "number" min="0" id='nv1'></input></td>
                    </tr>
                    <tr><td>No. of Participants for Event at Campus



</td>
                    <td><input type = "number" min="0" id='v3'></input></td>
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
                        <td><input type="number" id='m1'></input></td>
                        <td><input type="number" id='m12'></input></td>
                    </tr>
                    <tr>
                        <td>M(40)</td>
                        <td><input type="number" id='m2'></input></td>
                        <td><input type="number" id='m22'></input></td>
                    </tr>
                    <tr>
                        <td>L(42)</td>
                        <td><input type="number" id='m3'></input></td>
                        <td><input type="number" id='m32'></input></td>
                    </tr>
                    <tr>
                        <td>XL(44)</td>
                        <td><input type="number" id='m4'></input></td>
                        <td><input type="number" id='m42'></input></td>
                    </tr>
                    <tr>
                        <td>XXL(46)</td>
                        <td><input type="number" id='m5'></input></td>
                        <td><input type="number" id='m52'></input></td>
                    </tr>
                    <tr>
                        <td>XXL(48)</td>
                        <td><input type="number" id='m6'></input></td>
                        <td><input type="number" id='m62'></input></td>
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
                        <td><input type="number" id='w1'></input></td>
                        <td><input type="number" id='w12'></input></td>
                    </tr>
                    <tr>
                        <td>M</td>
                        <td><input type="number" id='w2'></input></td>
                        <td><input type="number" id='w22'></input></td>
                    </tr>
                    <tr>
                        <td>L</td>
                        <td><input type="number" id='w3'></input></td>
                        <td><input type="number" id='w32'></input></td>
                    </tr>
                    <tr>
                        <td>XL</td>
                        <td><input type="number" id='w4'></input></td>
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
                        <td><input type="number" id='g1'></input></td>
                    </tr>
                    <tr>
                        <td>9-12 Years</td>
                        <td><input type="number" id='g2'></input></td>
                    </tr>
                    <tr>
                        <td>13-15 Years</td>
                        <td><input type="number" id='g3'></input></td>
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
                        <td><input type="number" id='b1'></input></td>
                    </tr>
                    <tr>
                        <td>9-12 Years</td>
                        <td><input type="number" id='b2'></input></td>
                    </tr>
                    <tr>
                        <td>13-15 Years</td>
                        <td><input type="number" id='b3'></input></td>
                    </tr>
                    <tr>
                        <td>Total Girls T-Shirt</td>
                        {/* <td>{totalboy}</td> */}
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
                        <td>no of participation</td>
                        <td>no of participation</td>

                    </tr>
                    <tr>
                        <td>Phuket-Krabi Tour</td>
                        <td>no of participation</td>
                        <td>no of participation</td>

                    </tr>
                    <tr>
                        <td>Mysore Tour</td>
                        <td>no of participation</td>
                        <td>no of participation</td>

                    </tr>
                    <tr>
                        <td>Belur-Hampi Tour</td>
                        <td>no of participation</td>
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

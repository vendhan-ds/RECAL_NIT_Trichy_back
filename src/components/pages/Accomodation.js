import { func } from 'prop-types';
import React, { useState } from 'react';
import axios from 'axios'

function Accomodation() {

    const [fam,setfam] = useState("single");
    const [rreq,setrreq] = useState("notRequired");
    const [roomt,setroomt] = useState(null);
    const [cin,setcin] = useState(null);
    const [cout,setcout] = useState(null);
    const [hotel,sethotel] = useState(null);
    const [room,setroom] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    const [costs,setcost] = useState(0)
    const [room2,setroom2] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    const [costs2,setcost2] = useState(0)

    
    var key = 0;
    

    function updatecost(room){
        var temp = [2500,2800,1400,3000,3600,1800,3800,4300,2150,5000,5000,2500,6700,6700,3350];
        var cost = 0;
        console.log(room);
        for(var i in room){
            console.log(temp[i],room[i]);
            cost += (parseInt(room[i]) * parseInt(temp[i]));
        }
        console.log(cost);
        setcost(cost);
    }
// change the pricess
    function sendpost(){
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
        var data = {'participationType' : fam, 'hotelRoom' : rreq, 'checkInDate' : cin, 'checkOutDate' : cout ,'alumni' : a ,'spouse' : s,'familyMembers' : f,'grandKids' : g,'hotel1' : room , 'hotel2' : room2};
        axios.post('http://localhost:8080/api/accomodationSave',data).then((res) => console.log(res.data));
        // window.location.href = "/event-participation";
    }


    function updatecost2(room2){
        var temp = [2500,2800,1400,3000,3600,1800,3800,4300,2150,5000,5000,2500,6700,6700,3350];
        var cost = 0;
        console.log(room2);
        for(var i in room2){
            console.log(temp[i],room2[i]);
            cost += (parseInt(room2[i]) * parseInt(temp[i]));
        }
        console.log(cost);
        setcost2(cost);
    }

    return (
        <>
         <div className='mtitle'><h1 className='title'>Accomodation</h1></div>
         
         <div className='mainc'>

         
         <label>Participation Type 
            <select className='exselect' onChange={(e) => setfam(e.target.value)}>
                <option value="single" >single</option>
                <option value="withFamily" >withFamily</option>
            </select>
            </label>
            <br />
            <br />
            {fam == 'withFamily' && <div className='fdetails'>
                    <table>
                    <tbody>
                        <tr>
                        <td><label>Alumni count 
                        
                    </label></td>
                    <td><input type="number" id='alumni' min = "0" value="0"/></td>
                        </tr>
                        <tr>
                        <td>
                    <label>Spouse count 
                        
                    </label></td>
                    <td><input type="number" id='spouse' min = "0" value="0"/></td>
                        </tr>
                        <tr>
                        <td>
                    <label>Family members count 
                        
                    </label></td>
                    <td><input type="number" id='family' min = "0" value="0"/></td>
                        </tr>
                        <tr>
                        <td>
                        <label>Grand Kids count 
                    </label></td>
                    <td> <input type="number" id='grandkids' min = "0" value="0"/>
</td>
                        </tr>
                    </tbody>
                    </table>
                    
                    
                    
                    
                </div>}
                <br />
            <br />

            <label>Hotel Room 
            <select className='exselect' onChange={(e) => setrreq(e.target.value)}>
                <option value="notRequired" >notRequired</option>
                <option value="required" >required</option>
            </select>
            </label>
            <br />
            <br />
            {rreq == 'required' && <div className='rdetails'>
            <table>
            <tbody>
            
            <tr>
            <td><label>CheckIn</label></td>
            
            <td><input type="date"  onChange={(e) => setcin(e.target.value)}/></td>
            </tr>
            <tr>
            <td><label>CheckOut</label></td>
            <td><input type="date"  onChange={(e) => setcout(e.target.value)}/></td>
            </tr>
            
            
            </tbody>
            </table>
            <br />
            <br />
            
            
            
            </div>}
            <br />
            <br />
            
            {rreq == 'required' &&<>
            <label>Hotel</label><select onChange={(e) => sethotel(e.target.value)}>
                <option >Select</option>
                <option value="breezeResidency">breezeResidency</option>
                <option value="hotelTamilNadu">hotelTamilNadu</option>
            </select></>}
            
            {rreq == 'required' && hotel == "hotelTamilNadu" && <div className='roomdetails'>
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
                            <td><input type="number" id='a12' onChange={(e) =>{
                                var arr = [...room2];
                                arr[1] = e.target.value;
                                setroom2(arr);
                                updatecost2(arr);
                            }}></input></td>
                            <td>1400</td>
                            <td><input type="number" id='a13' onChange={(e) =>{
                                var arr = [...room2];
                                arr[2] = e.target.value;
                                setroom2(arr);
                                updatecost2(arr);
                            }}></input></td>

                        </tr>
                        <tr>
                            <td>Deluxe</td>
                            <td>3000</td>
                            <td><input type="number" id='a21' onChange={(e) =>{
                                var arr = [...room2];
                                arr[3] = e.target.value;
                                setroom2(arr);
                                updatecost2(arr);
                            }}></input></td>
                            <td>3600</td>
                            <td><input type="number" id='a22' onChange={(e) =>{
                                var arr = [...room2];
                                arr[4] = e.target.value;
                                setroom2(arr);
                                updatecost2(arr);
                            }}></input></td>
                            <td>1800</td>
                            <td><input type="number" id='a23' onChange={(e) =>{
                                var arr = [...room2];
                                arr[5] = e.target.value;
                                setroom2(arr);
                                updatecost2(arr);
                            }}></input></td>

                        </tr>
                        <tr>
                            <td>Family Room</td>
                            <td>3800</td>
                            <td><input type="number" id='a31' onChange={(e) =>{
                                var arr = [...room2];
                                arr[6] = e.target.value;
                                setroom2(arr);
                                updatecost2(arr);
                            }}></input></td>
                            <td>4300</td>
                            <td><input type="number" id='a32' onChange={(e) =>{
                                var arr = [...room2];
                                arr[7] = e.target.value;
                                setroom2(arr);
                                updatecost2(arr);
                            }}></input></td>
                            <td>2150</td>
                            <td><input type="number" id='a33' onChange={(e) =>{
                                var arr = [...room2];
                                arr[8] = e.target.value;
                                setroom2(arr);
                                updatecost2(arr);
                            }}></input></td>

                        </tr>
                        <tr>
                            <td>Suite</td>
                            <td>5000</td>
                            <td><input type="number" id='a41' onChange={(e) =>{
                                var arr = [...room2];
                                arr[9] = e.target.value;
                                setroom2(arr);
                                updatecost2(arr);
                            }}></input></td>
                            <td>5000</td>
                            <td><input type="number" id='a42' onChange={(e) =>{
                                var arr = [...room2];
                                arr[10] = e.target.value;
                                setroom2(arr);
                                updatecost2(arr);
                            }}></input></td>
                            <td>2500</td>
                            <td><input type="number" id='a43' onChange={(e) =>{
                                var arr = [...room2];
                                arr[11] = e.target.value;
                                setroom2(arr);
                                updatecost2(arr);
                            }}></input></td>

                        </tr>
                        <tr>
                            <td>Additional Member</td>
                            <td>6700</td>
                            <td><input type="number" id='a51' onChange={(e) =>{
                                var arr = [...room2];
                                arr[12] = e.target.value;
                                setroom2(arr);
                                updatecost2(arr);
                            }}></input></td>
                            <td>6700</td>
                            <td><input type="number" id='a52' onChange={(e) =>{
                                var arr = [...room2];
                                arr[13] = e.target.value;
                                setroom2(arr);
                                updatecost2(arr);
                            }}></input></td>
                            <td>3350</td>
                            <td><input type="number" id='a53' onChange={(e) =>{
                                var arr = [...room2];
                                arr[14] = e.target.value;
                                setroom2(arr);
                                updatecost2(arr);
                            }}></input></td>

                        </tr>
                        </tbody>
                    </table>
                    

                </div>}

            {rreq == 'required' && hotel == "breezeResidency" && <div className='roomdetails'>
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
                            <td><input type="number" id='a12' onChange={(e) =>{
                                var arr = [...room];
                                arr[1] = e.target.value;
                                setroom(arr);
                                updatecost(arr);
                            }}></input></td>
                            <td>1400</td>
                            <td><input type="number" id='a13' onChange={(e) =>{
                                var arr = [...room];
                                arr[2] = e.target.value;
                                setroom(arr);
                                updatecost(arr);
                            }}></input></td>

                        </tr>
                        <tr>
                            <td>Executive</td>
                            <td>3000</td>
                            <td><input type="number" id='a21' onChange={(e) =>{
                                var arr = [...room];
                                arr[3] = e.target.value;
                                setroom(arr);
                                updatecost(arr);
                            }}></input></td>
                            <td>3600</td>
                            <td><input type="number" id='a22' onChange={(e) =>{
                                var arr = [...room];
                                arr[4] = e.target.value;
                                setroom(arr);
                                updatecost(arr);
                            }}></input></td>
                            <td>1800</td>
                            <td><input type="number" id='a23' onChange={(e) =>{
                                var arr = [...room];
                                arr[5] = e.target.value;
                                setroom(arr);
                                updatecost(arr);
                            }}></input></td>

                        </tr>
                        <tr>
                            <td>Deluxe</td>
                            <td>3800</td>
                            <td><input type="number" id='a31' onChange={(e) =>{
                                var arr = [...room];
                                arr[6] = e.target.value;
                                setroom(arr);
                                updatecost(arr);
                            }}></input></td>
                            <td>4300</td>
                            <td><input type="number" id='a32' onChange={(e) =>{
                                var arr = [...room];
                                arr[7] = e.target.value;
                                setroom(arr);
                                updatecost(arr);
                            }}></input></td>
                            <td>2150</td>
                            <td><input type="number" id='a33' onChange={(e) =>{
                                var arr = [...room];
                                arr[8] = e.target.value;
                                setroom(arr);
                                updatecost(arr);
                            }}></input></td>

                        </tr>
                        <tr>
                            <td>Luxury suite</td>
                            <td>5000</td>
                            <td><input type="number" id='a41' onChange={(e) =>{
                                var arr = [...room];
                                arr[9] = e.target.value;
                                setroom(arr);
                                updatecost(arr);
                            }}></input></td>
                            <td>5000</td>
                            <td><input type="number" id='a42' onChange={(e) =>{
                                var arr = [...room];
                                arr[10] = e.target.value;
                                setroom(arr);
                                updatecost(arr);
                            }}></input></td>
                            <td>2500</td>
                            <td><input type="number" id='a43' onChange={(e) =>{
                                var arr = [...room];
                                arr[11] = e.target.value;
                                setroom(arr);
                                updatecost(arr);
                            }}></input></td>

                        </tr>
                        <tr>
                            <td>Grand Suite</td>
                            <td>6700</td>
                            <td><input type="number" id='a51' onChange={(e) =>{
                                var arr = [...room];
                                arr[12] = e.target.value;
                                setroom(arr);
                                updatecost(arr);
                            }}></input></td>
                            <td>6700</td>
                            <td><input type="number" id='a52' onChange={(e) =>{
                                var arr = [...room];
                                arr[13] = e.target.value;
                                setroom(arr);
                                updatecost(arr);
                            }}></input></td>
                            <td>3350</td>
                            <td><input type="number" id='a53' onChange={(e) =>{
                                var arr = [...room];
                                arr[14] = e.target.value;
                                setroom(arr);
                                updatecost(arr);
                            }}></input></td>

                        </tr>
                        </tbody>
                    </table>
                    

                </div>}

                <p>Total Cost : {costs + costs2}</p>
                <button onClick={() => sendpost()}>Save and continue</button>
                </div>
        </>
        
    );
}

export default Accomodation;

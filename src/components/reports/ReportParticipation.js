import React, { useEffect, useState } from 'react';
import axios from 'axios';


//var campvis = null;
function ReportParticipation(){

// const[campvis,setcampvis]=useState([0,0,0,0]);
// const[even24hotel,seteven24hotel]=useState([])

// var response= axios.get("http://localhost:8080/api/participation")
// .then((response)=>{
//     console.log(response.data);
//     setcampvis (response.data.campusvisit);
//     var even24hotel=response.data.EveningHotel24th;
//     var even25hotel=response.data.EveningHotel25th;
//     var totals=response.data.totalval;
//     var breez=response.data.breezeRes;
//     var breez2=response.data.TamilnaduHotel;
//     var tourdata=response.data.tourdata;

// })
const [campvis, setCampvis] = useState([0,0,0,0]);
const [even24hotel, seteven24hotel]=useState([0,0,0,0]);
const [even25hotel, seteven25hotel]=useState([0,0,0,0]);
const [totals,settotals]=useState([0,0,0,0]);
const [breez,setbreez]=useState([0,0,0,0,0,0,0,0]);
const [breez2,setbreez2]=useState([0,0,0,0,0,0,0]);
const [tourdata,settourdata]=useState({});

useEffect(() => {
    axios.get("http://localhost:8080/api/participation")
    .then(response => {
        response=response.data
        console.log(response);
        setCampvis(response.campusvisit);
        seteven24hotel(response.EveningHotel24th);
        seteven25hotel(response.EveningHotel25th);
        settotals(response.totalval);
        setbreez(response.breezeRes);
        setbreez2(response.TamilnaduHotel);
        settourdata(response.tourdata);
    })
}, []);
/* if(campvis==null) {
    return(
        <p>Loading...</p>
    )
} */
return(
    //<div>
    //    <p>{campvis[0]}</p>
    //</div>
    <div >
        <h1>Participation Report</h1>
        <table>
             <tbody>
                 <tr>
                     <td>Event Participation</td>
                     <td>Unit</td>
                     <td>Alumini</td>
                     <td>Spouse</td>
                     <td>family</td>
                     <td>Grand Children</td>
                 </tr>
                 <tr>
                     <td>only campus visit on 25th jan</td>
                     <td>Nos</td>
                     <td>{campvis[0]}</td>
                     <td>{campvis[1]}</td>
                     <td>{campvis[2]}</td>
                     <td>{campvis[3]}</td>
                 </tr>
                 <tr>
                     <td>24th evening at hotel</td>
                     <td>Nos</td>
                     <td>{even24hotel[0]}</td>
                     <td>{even24hotel[1]}</td>
                     <td>{even24hotel[2]}</td>
                     <td>{even24hotel[3]}</td>
                 </tr>
                 <tr>
                     <td>25th evening at hotel</td>
                     <td>Nos</td>
                     <td>{even25hotel[0]}</td>
                     <td>{even25hotel[1]}</td>
                     <td>{even25hotel[2]}</td>
                     <td>{even25hotel[3]}</td>
                 </tr>
                 <tr>
                     <td>total</td>
                     <td>-</td>
                     <td>{campvis[0]+even24hotel[0]+even25hotel[0]}</td>
                     <td>{campvis[1]+even24hotel[1]+even25hotel[1]}</td>
                     <td>{campvis[2]+even24hotel[2]+even25hotel[2]}</td>
                     <td>{campvis[3]+even24hotel[3]+even25hotel[3]}</td>
                 </tr>
             </tbody>
         </table>
         <h3>accomodation needs</h3>
         <table>
             <tbody>
                 <tr>
                     <td>Breeze Residency</td>
                     <td>Unit</td>
                     <td>Single</td>
                     <td>Double</td>
                     <td>Twinshare</td>
                     <td>total rooms</td>
                 </tr>
             <tr>
                     <td>checkin 24th and checkout 25th</td>
                     <td>1 Night</td>
                     <td>{breez[0]}</td>
                     <td>{breez[1]}</td>
                     <td>{breez[2]}</td>
                     <td>{breez[3]}</td>
                 </tr>
                 <tr>
                     <td>checkin 24th and checkout 26th</td>
                     <td>2 Night</td>
                     <td>{breez[4]}</td>
                     <td>{breez[5]}</td>
                     <td>{breez[6]}</td>
                     <td>{breez[7]}</td>
                 </tr>
                 <tr>
                     <td>Total</td>
                     <td>-</td>
                     <td>{breez[0]+breez[4]}</td>
                     <td>{breez[1]+breez[5]}</td>
                     <td>{breez[2]+breez[6]}</td>
                     <td>{breez[3]+breez[7]}</td>
                 </tr>
             </tbody>
         </table>
         <table>
             <tbody>
                 <tr>
                     <td>Tamilnadu Hotel</td>
                     <td>Unit</td>
                     <td>Single</td>
                     <td>Double</td>
                     <td>Twinshare</td>
                     <td>total rooms</td>
                 </tr>
                 <tr>
                     <td>checkin 24th and checkout 25th</td>
                     <td>1 Night</td>
                     <td>{breez2[0]}</td>
                     <td>{breez2[1]}</td>
                     <td>{breez2[2]}</td>
                     <td>{breez2[3]}</td>
                 </tr>
                 <tr>
                     <td>checkin 24th and checkout 26th</td>
                    <td>2 Night</td>
                     <td>{breez2[4]}</td>
                     <td>{breez2[5]}</td>
                     <td>{breez2[6]}</td>
                     <td>{breez2[7]}</td>
                 </tr>
                 <tr>
                     <td>Total</td>
                     <td>-</td>
                     <td>{breez2[0]+breez2[4]}</td>
                     <td>{breez2[1]+breez2[5]}</td>
                     <td>{breez2[2]+breez2[6]}</td>
                     <td>{breez2[3]+breez2[7]}</td>
                 </tr>
             </tbody>
         </table>
         <h3>Post GJ Tour</h3>
         <table>
             <tr>
                 <td>Item</td>
                 <td>Nos</td>
                 <td>Total</td>
             </tr>
             <tr>
                 <td>4hrs Trichy tour on 26th jan</td>
                 <td>Nos</td>
                 <td>{tourdata.trichy}</td>
             </tr>
             <tr>
                 <td>Phuket-Krabi</td>
                 <td>Nos</td>
                 <td>{tourdata.phuketKrabi}</td>
             </tr>
             <tr>
                 <td>Mysore-Bandipur</td>
                 <td>Nos</td>
                 <td>{tourdata.mysoreBandipur}</td>
             </tr>
             <tr>
                 <td>Belur-Hampi</td>
                 <td>Nos</td>
                 <td>{tourdata.belurHampi}</td>
             </tr>
         </table>
        
        
        
     </div>

)
}
export default ReportParticipation;

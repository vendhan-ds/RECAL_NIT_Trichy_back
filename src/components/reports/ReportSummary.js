import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

function ReportSummary() {

    const [user,setuser]=useState([1,2,23,4,5]);
    //const [paxdata, setpaxdata]=useState(null)
    useEffect(()=>{
         axios("http://localhost:8080/api/summary").then(response => {
        console.log(response.data);
        setuser(response.data);
    })
    },[])

    return (
        <div className='mainc'>
            <h1>Registered</h1>
            <table>
             <tbody>
                 <tr>
                     <td>SI</td>
                     <td>Branch</td>
                     <td>Alumini</td>
                     <td>Spouse</td>
                     <td>family</td>
                     <td>Grand Children</td>
                     <td>total</td>
                     <td>Single:2800</td>
                     <td>Double:3500</td>
                     <td>Tshare:1750</td>
                     <td>Total</td>
                     <td>24th Event:4500</td>
                     <td>25th Campus: 1600</td>
                     <td>25th event :4500</td>
                     <td>Total</td>
                     <td>24th Event:700</td>
                     <td>25th Event:700</td>
                     <td>Total</td>
                     <td>Single :2800</td>
                     <td>Double: 3500</td>
                     <td>TShare :1750</td>
                     <td>Total</td>
                     <td>Trichy Tour</td>
                     <td>Phuket</td>
                     <td>Mysore</td>
                     <td>Hampi</td>
                     <td>Total</td>
                     <td>GrandTotal</td>

                 </tr>
                {user.map((data,index)=>(
                    <tr key={data.username}>
                        <td>{index}</td>
                     <td>{data.Branch}</td>
                     <td>{data.Alumini_name}</td>
                     <td>{data.SPouse_name}</td>
                     <td>{data.familymem}</td>
                     <td>{data.grandchildren}</td>
                     <td>{data.totalmembers}</td>
                     
                     <td>{data.Single}</td>
                     <td>{data.Double}</td>
                     <td>{data.Twinshare}</td>
                     <td>{data.Rooms}</td>
                     <td>{data.Event24th}</td>
                     <td>{data.Campus25th}</td>
                     <td>{data.Event25th}</td>
                     <td>{data.TotalFee}</td>
                     <td>{data.Dinner24th}</td>
                     <td>{data.Dinne25th}</td>
                     <td>{data.totaldinner}</td>
                     <td>{data.singleCost}</td>
                     <td>{data.doubleCost}</td>
                     <td>{data.twinCost}</td>
                     <td>{data.totalCost}</td>
                     <td>{data.trichy}</td>
                     <td>{data.phuket}</td>
                     <td>{data.mysore}</td>
                     <td>{data.hampi}</td>
                     <td>{data.tourCost}</td>
                     <td>{data.FrandTotal}</td>
                    </tr>
                ))}
            </tbody>
         </table>
        </div>
        
    );
}

export default ReportSummary;

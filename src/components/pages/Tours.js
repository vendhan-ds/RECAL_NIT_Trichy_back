import React, { useState } from 'react';

function Tours() {

    const [tour,setn] = useState(false);

    return (
        <>
        <div className='mtitle'><h1>Tours</h1></div>
        <div className='mainc'>
        <label>I am Interested in Tour option</label>
        <input type="checkbox" onChange={(e) => setn(e.target.checked)}></input>
        <br />
        <br />
        {tour && <div className='rdetails'>
        <table>
            <thead>
                <tr>
                    <td>Tour</td>
                    <td>Trichy Local</td>
                    <td>Phuket-Krabi</td>
                    <td>Mysore-Bandipur</td>
                    <td>Belur-Hampi</td>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>From</td>
                <td></td>
                <td>26th Jan</td>
                <td>26th Jan</td>
                <td>29th Jan</td>
            </tr> 
            <tr>
                <td>To</td>
                <td></td>
                <td>2nd Feb</td>
                <td>29th Jan</td>
                <td>1st Feb</td>
            </tr>
            <tr>
                <td>Duration</td>
                <td></td>
                <td>5N/6D</td>
                <td>2N/3D</td>
                <td>3N/4D</td>
            </tr>
            <tr>
                <td>Cost/head</td>
                <td></td>
                <td>53,000</td>
                <td>20,000</td>
                <td>15,000</td>
            </tr>
            </tbody>
        </table>
        </div>}
        </div>
        </>
    );
}

export default Tours;

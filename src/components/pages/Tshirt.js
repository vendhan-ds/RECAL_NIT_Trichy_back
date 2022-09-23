import { func, string } from 'prop-types';
import React, { useState } from 'react';

function Tshirt() {

    const [need,setn] = useState(false);

    function sendpost(){
        console.log('clicked');
    }
    return (
        <> 
        <div className='mtitle'><h1>Tshirt</h1></div>
        <div className='mainc1'>
            <label>I am Interested in T-Shirt</label>
            <input type="checkbox" onChange={(e) => setn(e.target.checked)}></input>
        {need && <div>
            <table>
                <tbody>
                <h1>T-shirt for men</h1>
                    <tr>
                        <td>"T-Shirt (Dark Brick Red - Supima Cotton)
Design - Polo with Collar"
</td>
                    <td><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>"T-Shirt (Navy Blue - Sweat-wicking Fabric)
Design - Round Neck for Walking & Exercise)"
</td>
                    <td><input type="checkbox"></input></td>
                    </tr>
                    <h1>T-shirt for Women</h1>
                    <tr>
                        <td>T-Shirt Navy Blue - Sweat-wicking Fabric)
Design - Round Neck for Walking & Exercise
</td>
                    <td><input type="checkbox"></input></td>
                    </tr>
                    <tr>
                        <td>"T-Shirt (Royal Blue - Sweat-wicking Fabric)
Design - Round Neck for Walking & Exercise)"
</td>
                    <td><input type="checkbox"></input></td>
                    </tr>
                    <h1>T-Shirt for GrandChildren</h1>
                    <tr>
                        <td>"T-Shirt (Maroon - Supima Cotton)
Design - Round Neck"
</td>
                    <td><input type="checkbox"></input></td>
                    </tr>
                </tbody>
            </table>
        </div>
        }
        
        <br />
        </div>
        <div className='c1but'>
        <button onClick={() => {window.location.href = "/event-participation"}} className="eventbut">Go Back and edit</button>
        <button onClick={() => sendpost()} className="eventbut">Save and continue</button>
        </div>        
 
 </>   );
}

export default Tshirt;

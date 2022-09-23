import React from 'react';
import axios from 'axios';
function EventParticipation() {

    function sendpost(){
        console.log('ss');
        axios.get('http://localhost:8080/api/').then((res) => console.log(res.data));
        window.location.href = "/tshirt";
    }

    return (
        <>
        <div className='mtitle'><h1>EventParticipation</h1></div>
        
        <div className='mainc1'>
            <h2>24th Jan</h2>
            <table>
                <tbody>
                    <tr><td>I will join the evening event at the Hotel</td>
                    <td><input type = "number" min="0"></input></td>
                    </tr>
                    <tr>
                        <td>I agree to pay the Lumpsum Participation Fee of Rs.4,500 towards this for Myself & Family
</td>
<td><input type = "number" min="0"></input></td>
                    </tr>
                    <tr>
                        <td>I agree to pay Rs.750 per Head for Veg-Dinner & Rs.850 per Head for Non-Veg Dinner for the Participants (including Family). I also understand there is no Charge for Grand Children
</td>
<td><input type = "number" min="0"></input></td>
                    </tr>
                    <tr><td>No. of Participants for Event at Hotel
</td>
                    <td><input type = "number" min="0"></input></td>
                    </tr>
                    <tr><td>Indicate numbers in the cells for Dinner Type

</td>
                    <td><input type = "number" min="0"></input></td>
                    </tr>
                </tbody>
            </table>
        </div><div className='mainc1'>
            <h2>25th Jan</h2>
            <table>
                <tbody>
                    <tr><td>I will join for the Event at the Campus
</td>
                    <td><input type = "number" min="0"></input></td>
                    </tr>
                    <tr>
                        <td>I agree to pay the Lumpsum Participation Fee of Rs.1,600 towards this for Myself & Family. I understand there is no charge for the Lunch at Campus

</td>
<td><input type = "number" min="0"></input></td>
                    </tr>
                    <tr><td>No. of Participants for Event at Campus



</td>
                    <td><input type = "number" min="0"></input></td>
                    </tr>
                    <tr><td>"I will join for the Evening Event at the Hotel
I agree to pay the Lumpsum Participation Fee of Rs.4,500 towards this for Myself & Family"



</td>
                    <td><input type = "number" min="0"></input></td>
                    </tr>
                    <tr><td>I agree to pay Rs.750 per Head for Veg-Dinner & Rs.850 per Head for Non-Veg Dinner for the Participants (including Family). I also understand there is no Charge for Grand Children


</td>
                    <td><input type = "number" min="0"></input></td>
                    </tr>
                    <tr><td>No. of Participants for Event at Hotel


</td>
                    <td><input type = "number" min="0"></input></td>
                    </tr>
                    <tr><td>Indicate numbers in the cells for Dinner Type


</td>
                    <td><input type = "number" min="0"></input></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className=' c1but'>
        <button onClick={() => {window.location.href = "/accomodation"}} className="eventbut">Go Back and edit</button>
        <button onClick={() => sendpost()} className="eventbut">Save and continue</button>
        </div>
        </>
    );
}

export default EventParticipation;

import React from 'react';
import axios from 'axios';

function ReportParticipation() {

    async function get(){
    var res = await axios.get('http://localhost:8080/api/previewData');
    console.log(res);
    }
    get();
    return(
        <h1>ReportParticipation</h1>
    );
}

export default ReportParticipation;

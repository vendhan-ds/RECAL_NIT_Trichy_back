import React, { useEffect } from 'react';
import axios from 'axios';

function ReportParticipation() {

    useEffect(() => {
        axios.get("http://localhost:8080/api/participation").then((res) =>{
            console.log(res);
        })
    })
    return(
        <h1>ReportParticipation</h1>
    );
}

export default ReportParticipation;

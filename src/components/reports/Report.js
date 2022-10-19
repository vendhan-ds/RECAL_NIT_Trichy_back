import React, { useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react';
import { CSVLink, CSVDownload } from "react-csv";
import TshirtCSV from './tshirtCSV';
import ParticipationCSV from './participationCSV';
import SummaryCSV from './summaryCSV';
import RegistrationCSV from './registrationsCSV';
//import ConfirmationsCSV from './confirmationsCSV';




function Report(){
    return (
        <div>
            <h1>ReportList</h1>
            <TshirtCSV/>
            <ParticipationCSV/> 
            <SummaryCSV/>
            <RegistrationCSV/>
            {/* <ConfirmationsCSV/> */}
        </div>
    );

}

export default Report;
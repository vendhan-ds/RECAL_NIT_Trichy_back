import React  from 'react';
import TshirtCSV from './tshirtCSV';
import ParticipationCSV from './participationCSV';
import SummaryCSV from './summaryCSV';
import RegistrationCSV from './registrationsCSV';
import PaymentsCSV from './paymentsCSV';
//import ConfirmationsCSV from './confirmationsCSV';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

function Report(){
    return (
        <div>
            <h1>ReportList</h1>
            {/* <div className='center'>
            <Stack direction="row" spacing={2} style = {{padding : '1rem'}} align = 'center' divider={<Divider orientation="vertical" flexItem />} component = {Paper}>
            <Button size="large" variant="contained"><TshirtCSV/></Button>
            <Button size="large" variant="contained"><ParticipationCSV/> </Button>
            <Button size="large" variant="contained"><SummaryCSV/></Button>
            <Button size="large" variant="contained"><RegistrationCSV/></Button>
            </Stack>
            </div> */}

            <div className='center'>
            <Stack direction="column" spacing={2} style = {{padding : '1rem'}} align = 'center' divider={<Divider orientation="vertical" flexItem />} component = {Paper}>
                    
            <TshirtCSV/>
            <ParticipationCSV/>
            <SummaryCSV/>
            <RegistrationCSV/>
            <PaymentsCSV/>

                
                </Stack>
</div>
            
            {/* <ConfirmationsCSV/> */}
        </div>
    );

}

export default Report;
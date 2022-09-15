import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';

import Home, { NotFound } from './pages/Home';
import Accomodation from './pages/Accomodation';
import EventParticipation from './pages/EventParticipation';
import Login from './pages/Login';
import Register from './pages/Register';
import Tours from './pages/Tours';
import Tshirt from './pages/Tshirt';

import Previews from './reports/Previews';
import ReportBalance from './reports/ReportBalance';
import ReportParticipation from './reports/ReportParticipation';
import ReportPaymentstatus from './reports/ReportPaymentstatus';
import ReportRegistered from './reports/ReportRegistered';
import ReportSummary from './reports/ReportSummary';
import ReportTotalcost from './reports/ReportTotalcost';
import ReportTshirt from './reports/ReportTshirt';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='' element={<Home />} />
                <Route path='login' element={<Login />} />
                <Route path='accomodation' element={<Accomodation />} />
                <Route path='event-participation' element={<EventParticipation />} />
                <Route path='tshirt' element={<Tshirt />} />
                <Route path='tours' element={<Tours />} />
                <Route path='previews' element={<Previews />} />
                <Route path='/report'>
                    <Route index element={<Previews />} />
                    <Route path='registered' element={<ReportRegistered />} />
                    <Route path='summary' element={<ReportSummary />} />
                    <Route path='tshirt' element={<ReportTshirt />} />
                    <Route path='participation' element={<ReportParticipation />} />
                    <Route path='totalcost' element={<ReportTotalcost />} />
                    <Route path='paymentstatus' element={<ReportPaymentstatus />} />
                    <Route path='balance' element={<ReportBalance />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;

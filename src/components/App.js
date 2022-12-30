import React from 'react';
import {
    Route,
    Routes,useLocation
} from 'react-router-dom';

import Home, { NotFound } from './pages/Home';
import Accomodation from './pages/Accomodation';
import EventParticipation from './pages/EventParticipation';
import Login from './pages/Login';
import Tours from './pages/Tours';
import Tshirt from './pages/Tshirt';
import { AnimatePresence } from 'framer-motion';
import Previews from './reports/Previews';
import ReportBalance from './reports/ReportBalance';
import ReportParticipation from './reports/ReportParticipation';
import ReportPaymentstatus from './reports/ReportPaymentstatus';
import ReportRegistered from './reports/ReportRegistered';
import ReportSummary from './reports/ReportSummary';
import ReportTotalcost from './reports/ReportTotalcost';
import ReportTshirt from './reports/ReportTshirt';
import Sign from './pages/Sign';
import Basedat from './pages/Basedata';
import Quit from './pages/quit';
import Feedback from './pages/Feedback';
import Report from './reports/Report';
import Payment from './pages/Payment';


const App = () => {
    const location = useLocation();

    return (
            <>         
            <AnimatePresence>
            <Routes location={location} key = {location.pathname}>
                <Route path='' element={<Home />} />
                <Route path='signin' element={<Sign />} />
                <Route path='quit' element={<Quit />} />
                <Route path='feedback' element={<Feedback />} />
                <Route path='basedat' element={<Basedat />} />
                <Route path='login' element={<Login />} />
                <Route path='payment' element={<Payment />} />

                <Route path='accomodation' element={<Accomodation />} />
                <Route path='event-participation' element={<EventParticipation />} />
                <Route path='tshirt' element={<Tshirt />} />
                <Route path='tours' element={<Tours />} />
                <Route path='previews' element={<Previews />} />
                <Route path='/report'>
                    <Route index element={<Previews />} />
                    <Route path='report' element={<Report/>} />
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
            </AnimatePresence>

        </>
    );
};

export default App;

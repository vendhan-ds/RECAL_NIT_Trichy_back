import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';

import Home, { Test, NotFound } from './comp';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='' element={<Home />} />
                <Route path='test' element={<Test />} />
                <Route path='login' element={<Test />} />
                <Route path='accomodation' element={<Test />} />
                <Route path='event-participation' element={<Test />} />
                <Route path='tshirt' element={<Test />} />
                <Route path='tours' element={<Test />} />
                <Route path='previews' element={<Test />} />
                <Route path='/report'>
                    <Route index element={<Test />} />
                    <Route path='registered' element={<Test />} />
                    <Route path='summary' element={<Test />} />
                    <Route path='tshirt' element={<Test />} />
                    <Route path='participation' element={<Test />} />
                    <Route path='totalcost' element={<Test />} />
                    <Route path='paymentstatus' element={<Test />} />
                    <Route path='balance' element={<Test />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;

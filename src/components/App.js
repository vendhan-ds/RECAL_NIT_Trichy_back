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
                <Route path='/' element={<Home />} />
                <Route path='/test' element={<Test />} />
                <Route path='/login' element={<Test />} />
                <Route path='/register' element={<Test />} />
                <Route path='/accomodation' element={<Test />} />
                <Route path='/event-participation' element={<Test />} />
                <Route path='/tshirt' element={<Test />} />
                <Route path='/tours' element={<Test />} />
                <Route path='/previews' element={<Test />} />
                {/* <Route path='/report/registered' element={<Test />} />
                <Route path='/report/summary' element={<Test />} />
                <Route path='/report/tshirt' element={<Test />} />
                <Route path='/report/participation' element={<Test />} />
                <Route path='/report/totalcost' element={<Test />} />
                <Route path='/report/paymentstatus' element={<Test />} />
                <Route path='/report/balance' element={<Test />} /> */}
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;

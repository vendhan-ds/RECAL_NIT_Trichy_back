import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import ScrollToTop from "./scroll"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <Router>
    <ScrollToTop />
    <App />
    </Router>
  </React.StrictMode>
);

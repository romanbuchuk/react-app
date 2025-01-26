// import React from "react";
// import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // alias

import Routes from './components/AppRoutes';

const ClientRouter = () => (
    <Router>
        <Routes />
    </Router>
);

export default ClientRouter;

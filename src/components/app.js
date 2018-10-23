import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import '../assets/css/app.css';
import Nav from './nav';
import AppRoute from './app_route';

const App = () => (
    <div>
        <Nav />
        <div className="container">
            <AppRoute />
        </div>
    </div>
);

export default App;

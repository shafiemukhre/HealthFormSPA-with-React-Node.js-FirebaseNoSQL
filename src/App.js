import React from 'react';
import "./components/Icons";

import { Demographics } from './components/pages/Demographics';
import { NavBar } from './components/layouts/NavBar';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import { Reports } from './components/pages/Reports';
import { HealthVitals } from './components/pages/HealthVitals';

function App() {

  return (
    <Router>
      <div>
        <NavBar/>
        <Route path='/' exact component={Demographics}/>
        <Route path='/healthvitals' exact component={HealthVitals}/>
        <Route path='/reports' exact component={Reports}/>
      </div>
    </Router>
  );
}

export default App;
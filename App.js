

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import TripDetails from './TripDetails';
import TravelType from './TravelType';
import LoginForm from './LoginForm';

function App() {
  return (
    <Router>
      <div className="app">
        <TransitionGroup>
          <CSSTransition key={window.location.pathname} timeout={500} classNames="fade">
            <div className="page-container">
              <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/trip-details" element={<TripDetails />} />
                <Route path="/travel-type" element={<TravelType />} />
              </Routes>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </Router>
  );
}

export default App;


/*import './App.css';

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-center bg-cover" style={{ backgroundImage: "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.w5zGmfdHvrS9E47uuF3sJgHaE8%26pid%3DApi&f=1&ipt=513512b66d21f3b0d2a891d5d2a71696e5b9278bb3e5881cb268e28ad86e4a9f&ipo=images')" }}>
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg bg-opacity-40 backdrop-filter backdrop-blur-lg">
        <h2 className="mb-4 text-2xl font-bold text-center">Sign In</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="mail_id" className="block text-gray-700">Email</label>
            <input type="email" id="mail_id" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input type="password" id="password" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
          <button type="submit" className="w-full py-2 text-white transition duration-300 bg-blue-500 rounded-lg shadow-md hover:bg-blue-700">Sign In</button>
        </form>
        <div className="flex items-center justify-between mt-4">
          <button className="w-full py-2 mr-2 text-white transition duration-300 bg-red-500 rounded-lg shadow-md hover:bg-red-700">Sign in with Google</button>
          <button className="w-full py-2 text-white transition duration-300 bg-gray-500 rounded-lg shadow-md hover:bg-gray-700">Sign in as Guest</button>
        </div>
      </div>
    </div>
  );
}

export default App;*/

//import React from 'react';
/*import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react'; 
import { CSSTransition, TransitionGroup } from 'react-transition-group';
 import TripDetails from './TripDetails'; 
 import TravelType from './TravelType'; 
 
// './Nav-Bar.js'
// Importing the local image
import TripDetails from './Trip-Details'; // Importing the TripDetails component
//import TravelTypes from './Travel-Types'; // Importing the TripTypes
function LoginForm() {
  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();
    navigate('/trip-details');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-center bg-cover" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2023/09/01/18/02/eyeglasses-8227429_1280.jpg')" }}>
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg bg-opacity-40 backdrop-filter backdrop-blur-lg">
        <h2 className="mb-4 text-2xl font-bold text-center">Sign In</h2>
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label htmlFor="mail_id" className="block text-gray-700">Email</label>
            <input type="email" id="mail_id" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input type="password" id="password" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
          <button type="submit" className="w-full py-2 text-white transition duration-300 bg-blue-500 rounded-lg shadow-md hover:bg-blue-700">Sign In</button>
        </form>
        <div className="flex items-center justify-between mt-4">
          <button className="w-full py-2 mr-2 text-white transition duration-300 bg-red-500 rounded-lg shadow-md hover:bg-red-700" onClick={handleSignIn}>Sign in with Google</button>
          <button className="w-full py-2 text-white transition duration-300 bg-gray-500 rounded-lg shadow-md hover:bg-gray-700" onClick={handleSignIn}>Sign in as Guest</button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [page, setPage] = useState('tripDetails'); const goToPage = (pageName) => { setPage(pageName); };
  return (
    <div className="app"> <TransitionGroup> <CSSTransition key={page} timeout={500} classNames="fade" > <div className="page-container"> {page === 'tripDetails' && <TripDetails goToPage={goToPage} />} {page === 'travelType' && <TravelType goToPage={goToPage} />} </div> </CSSTransition> </TransitionGroup> </div>
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/trip-details" element={<TripDetails />} />
      </Routes>
    </Router>
    
  );
}

export default App;
*/










/*import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react'; 
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import TripDetails from './TripDetails'; 
import TravelType from './TravelType'; 
import LoginForm from './LoginForm';

function App() {
  const [page, setPage] = useState('tripDetails');

  const goToPage = (pageName) => {
    setPage(pageName);
  };

  return (
    <Router>
      <div className="app">
        <TransitionGroup>
          <CSSTransition key={page} timeout={500} classNames="fade">
            <div className="page-container">
              <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/trip-details" element={<TripDetails goToPage={TripDetails} />} />
                <Route path="/travel-type" element={<TravelType goToPage={TravelType} />} />
              </Routes>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </Router>
  );
}

export default App;
*/




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


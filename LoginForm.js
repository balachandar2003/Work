import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

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

export default LoginForm;

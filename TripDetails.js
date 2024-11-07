/*import React from 'react';
import './App.css';
import backgroundImage from './Images/Designer.jpeg'; // Importing the local image

function TripDetails() {
  return (
    <div className="flex min-h-screen bg-coolColor">
      <div className="w-1/3">
        <img src={backgroundImage} alt="Trip" className="object-cover h-full"/>
      </div>
      <div className="flex items-center justify-center w-2/3">
        <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg bg-opacity-40 backdrop-filter backdrop-blur-lg">
          <h2 className="mb-4 text-2xl font-bold text-center">Trip Details</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input type="text" id="name" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input type="email" id="email" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div className="flex mb-4 space-x-4">
              <div className="w-1/3">
                <label htmlFor="country_code" className="block text-gray-700">Country Code</label>
                <select id="country_code" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>

                </select>
              </div>
              <div className="w-2/3">
                <label htmlFor="mobile" className="block text-gray-700">Mobile Number</label>
                <input type="tel" id="mobile" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
            </div>
            <div className="flex mb-4 space-x-4">
              <div className="w-1/2">
                <label htmlFor="location" className="block text-gray-700">Location</label>
                <input type="text" id="location" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
              <div className="w-1/2">
                <label htmlFor="destination" className="block text-gray-700">Destination</label>
                <input type="text" id="destination" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
            </div>
            <div className="flex mb-4 space-x-4">
              <div className="w-1/2">
                <label htmlFor="start_date" className="block text-gray-700">Start Date</label>
                <input type="date" id="start_date" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
              <div className="w-1/2">
                <label htmlFor="end_date" className="block text-gray-700">End Date</label>
                <input type="date" id="end_date" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
            </div>
            <div className="flex mb-4 space-x-4">
              <div className="w-1/2">
                <label htmlFor="no_of_persons" className="block text-gray-700">No. of Persons</label>
                <input type="number" id="no_of_persons" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
              <div className="w-1/2">
                <label htmlFor="kid_count" className="block text-gray-700">Kid Count</label>
                <input type="number" id="kid_count" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700">Describe Your Trip</label>
              <textarea id="description" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4"></textarea>
            </div>
            <button type="submit" className="w-full py-2 text-white transition duration-300 bg-blue-500 rounded-lg shadow-md hover:bg-blue-700">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TripDetails; */




/*import React from 'react';
 // Importing the local image
 import './App.css';
function TripDetails() {
  return (
    <div className="flex min-h-screen bg-coolColor">
      <div className="w-1/3">
        <img src={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn1.matadornetwork.com%2Fblogs%2F1%2F2020%2F08%2FTaughannock-Falls-Sunset-In-Full-Fall-Colors-1200x853.jpg&f=1&nofb=1&ipt=c9417319986cdeaf92a586673c14982f2df01d352855f2c954cf209e5437fd82&ipo=images"} alt="Trip" className="object-cover h-full"/>
      </div>
      <div className="flex items-center justify-center w-2/3">
        <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg bg-opacity-40 backdrop-filter backdrop-blur-lg">
          <h2 className="mb-4 text-2xl font-bold text-center">Trip Details</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input type="text" id="name" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input type="email" id="email" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div className="flex mb-4 space-x-4">
              <div className="w-1/3">
                <label htmlFor="country_code" className="block text-gray-700">Country Code</label>
                <select id="country_code" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  
                </select>
              </div>
              <div className="w-2/3">
                <label htmlFor="mobile" className="block text-gray-700">Mobile Number</label>
                <input type="tel" id="mobile" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
            </div>
            <div className="flex mb-4 space-x-4">
              <div className="w-1/2">
                <label htmlFor="location" className="block text-gray-700">Location</label>
                <input type="text" id="location" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
              <div className="w-1/2">
                <label htmlFor="destination" className="block text-gray-700">Destination</label>
                <input type="text" id="destination" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
            </div>
            <div className="flex mb-4 space-x-4">
              <div className="w-1/2">
                <label htmlFor="start_date" className="block text-gray-700">Start Date</label>
                <input type="date" id="start_date" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
              <div className="w-1/2">
                <label htmlFor="end_date" className="block text-gray-700">End Date</label>
                <input type="date" id="end_date" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
            </div>
            <div className="flex mb-4 space-x-4">
              <div className="w-1/2">
                <label htmlFor="no_of_persons" className="block text-gray-700">Adults {'(Age>15)'}</label>
                <input type="number" id="no_of_persons" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
              <div className="w-1/2">
                <label htmlFor="kid_count" className="block text-gray-700">Kid Count</label>
                <input type="number" id="kid_count" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700">Describe Your Trip</label>
              <textarea id="description" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4"></textarea>
            </div>
            <button type="submit" className="w-full py-2 text-white transition duration-300 bg-blue-500 rounded-lg shadow-md hover:bg-blue-700">Next</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TripDetails;
*/







/*import React from 'react';
import './App.css';

function TripDetails({ goToPage }) {
  const backgroundImage = 'https://media.istockphoto.com/id/1418833150/photo/back-to-school-lovable-adorable-puppy-and-vintage-books.jpg?s=612x612&w=0&k=20&c=wNcqIoOO2iMe7xOqKS1UR5R2e6b19-AZMWqOG_IyE3Q='; // Replace with your desired image URL

  return (
    <div className="flex items-center justify-center min-h-screen bg-center bg-cover" style={{ backgroundImage: `url(${backgroundImage})`, opacity: 2 }}>
      <div className="flex items-center justify-center w-full h-full">
        <div className="w-full max-w-3xl p-8 bg-white bg-opacity-50 rounded-lg shadow-lg backdrop-filter backdrop-blur-md">
          <h2 className="mb-4 text-2xl font-bold text-center text-black">Trip Details</h2>
          <form>
            
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input type="text" id="name" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input type="email" id="email" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div className="flex mb-4 space-x-4">
              <div className="w-1/3">
                <label htmlFor="country_code" className="block text-gray-700">Country Code</label>
                <select id="country_code" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  
                </select>
              </div>
              <div className="w-2/3">
                <label htmlFor="mobile" className="block text-gray-700">Mobile Number</label>
                <input type="tel" id="mobile" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
            </div>
            <div className="flex mb-4 space-x-4">
              <div className="w-1/2">
                <label htmlFor="location" className="block text-gray-700">Location</label>
                <input type="text" id="location" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
              <div className="w-1/2">
                <label htmlFor="destination" className="block text-gray-700">Destination</label>
                <input type="text" id="destination" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
            </div>
            <div className="flex mb-4 space-x-4">
              <div className="w-1/2">
                <label htmlFor="start_date" className="block text-gray-700">Start Date</label>
                <input type="date" id="start_date" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
              <div className="w-1/2">
                <label htmlFor="end_date" className="block text-gray-700">End Date</label>
                <input type="date" id="end_date" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
            </div>
            <div className="flex mb-4 space-x-4">
              <div className="w-1/2">
                <label htmlFor="no_of_persons" className="block text-gray-700">Adults {'(Age>15)'}</label>
                <input type="number" id="no_of_persons" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
              <div className="w-1/2">
                <label htmlFor="kid_count" className="block text-gray-700">Kid Count</label>
                <input type="number" id="kid_count" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700">Describe Your Trip</label>
              <textarea id="description" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4"></textarea>
            </div>
            <div className="flex justify-center">
              <button type="button" className="px-16 py-2 text-white transition duration-300 bg-blue-500 rounded-lg shadow-md hover:bg-blue-700" onClick={() => goToPage('TravelType')}>Next</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TripDetails;*/





import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function TripDetails() {
  const navigate = useNavigate();
  const backgroundImage = 'https://media.istockphoto.com/id/1418833150/photo/back-to-school-lovable-adorable-puppy-and-vintage-books.jpg?s=612x612&w=0&k=20&c=wNcqIoOO2iMe7xOqKS1UR5R2e6b19-AZMWqOG_IyE3Q=';

  return (
    <div className="flex items-center justify-center min-h-screen bg-center bg-cover" style={{ backgroundImage: `url(${backgroundImage})`, opacity: 1 }}>
      <div className="flex items-center justify-center w-full h-full">
        <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg bg-opacity-40 backdrop-filter backdrop-blur-md">
          <h2 className="mb-4 text-2xl font-bold text-center text-black">Trip Details</h2>
          <form>
            {/* Form content */}
            {/* Other input fields */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input type="text" id="name" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
           
            <div className="flex mb-4 space-x-4">
              <div className="w-1/3">
                <label htmlFor="country_code" className="block text-gray-700">Country Code</label>
                <select id="country_code" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  
                </select>
              </div>
              <div className="w-2/3">
                <label htmlFor="mobile" className="block text-gray-700">Mobile Number</label>
                <input type="tel" id="mobile" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
            </div>
            <div className="flex mb-4 space-x-4">
              <div className="w-1/2">
                <label htmlFor="location" className="block text-gray-700">Location</label>
                <input type="text" id="location" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
              <div className="w-1/2">
                <label htmlFor="destination" className="block text-gray-700">Destination</label>
                <input type="text" id="destination" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
            </div>
            <div className="flex mb-4 space-x-4">
              <div className="w-1/2">
                <label htmlFor="start_date" className="block text-gray-700">Start Date</label>
                <input type="date" id="start_date" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
              <div className="w-1/2">
                <label htmlFor="end_date" className="block text-gray-700">End Date</label>
                <input type="date" id="end_date" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
            </div>
            <div className="flex mb-4 space-x-4">
              <div className="w-1/2">
                <label htmlFor="no_of_persons" className="block text-gray-700">Adults {'(Age>15)'}</label>
                <input type="number" id="no_of_persons" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
              <div className="w-1/2">
                <label htmlFor="kid_count" className="block text-gray-700">Kid Count</label>
                <input type="number" id="kid_count" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700">Describe Your Trip</label>
              <textarea id="description" required className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4"></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="px-16 py-2 text-white transition duration-300 bg-blue-500 rounded-lg shadow-md hover:bg-blue-700"
                onClick={() => navigate('/travel-type')}
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TripDetails;

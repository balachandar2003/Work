
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const travelTypes = [
  { id: 1, title: 'Budget', description: 'Affordable and convenient trips', image: 'https://media.istockphoto.com/id/682961712/vector/pink-piggy-bank-with-falling-coins-saving-money-investments-in-future.jpg?s=612x612&w=0&k=20&c=GywpFsJSe-1hW2P68vfCpO4-GPEmHV3LuL6p37DZO5A=' },
  { id: 2, title: 'Romantic', description: 'Date with your lover.', image: 'https://media.istockphoto.com/id/1296482485/vector/couple-enjoying-vacation.jpg?s=612x612&w=0&k=20&c=33pnFDoVnlzoBvRlkx1SfM4IIgXDjOF3FfA7JjeeUsU=' },
  { id: 3, title: 'Adventure', description: 'Injuries occur but its experience', image: 'https://media.istockphoto.com/id/1204813970/vector/hikers-at-mountain-viewpoint.jpg?s=612x612&w=0&k=20&c=mUbIsPmPXIGIrRwoiJUDP1BjHb-8cbDLzI653qU0soQ=' },
  { id: 4, title: 'Culture', description: 'Know how different we humans are', image: 'https://media.istockphoto.com/id/158095032/vector/cartoon-map-of-world.jpg?s=612x612&w=0&k=20&c=8A9ERCzLjq3XUa7HxwM5uFDupHl0sc0a4T9hfwzQoWs=' },
  { id: 5, title: 'Relaxation', description: 'Headout to cool your head.', image: 'https://media.istockphoto.com/id/1411276730/vector/a-huge-dollar-coin-sunbathing-in-a-striped-beach-chair-a-vacation-budget-concept.jpg?s=612x612&w=0&k=20&c=XgFsSSlvButMdSmY3qLOCgs5yvL2TRtpOhPGANj1G-s=' },
  { id: 6, title: 'Friends', description: 'Enough off online friends meet IRL', image: 'https://media.istockphoto.com/id/531552600/vector/group-of-young-people-jumping-on-white-background-with-copyspace.jpg?s=612x612&w=0&k=20&c=MtJ-jIeRgI1mhYfrn_Ofz2N0rRBmL5x-mK6gLAgI5v0=' },
  { id: 7, title: 'Family', description: 'See your parents smile', image: 'https://media.istockphoto.com/id/1264091180/vector/family-hiking-or-location-app-concept.jpg?s=612x612&w=0&k=20&c=qehumUDzfgBRqEpk7ZnpG7nZSesX2Zi4hef6UcZcrtc=' },
  { id: 8, title: 'Solo', description: 'Enjoy once in a while.', image: 'https://media.istockphoto.com/id/1476473662/vector/clip-art-of-a-man-traveling-with-a-carrying-case-and-passport-in-his-hand.jpg?s=612x612&w=0&k=20&c=1KOsMtdmnUMjbcohXRxZnPfY3y7Kk2K89nuMtXsRUUs=' },
  { id: 9, title: 'Corporate', description: 'IDK they arranged I joined.', image: 'https://media.istockphoto.com/id/1318797792/vector/air-travel-and-tourism-hope-to-return-after-covid-19-coronavirus-outbreak-concept.jpg?s=612x612&w=0&k=20&c=0CgRTl0-vmlQmofJQGV6_VZgrbzgbWYLIu01kFvNpKk=' },
  { id: 10, title: 'Senior', description: "Enough Love we earned.. Let's enjoy.", image: 'https://media.istockphoto.com/id/1332380665/vector/elderly-people-dancing-on-the-beach-vector-illustration-in-cartoon-style-isolated-on-white.jpg?s=612x612&w=0&k=20&c=6MlF-dq331HbekH1KpFgCG6QDgxNLuGds57TTvGGSfs=' },
];

const TravelType = () => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (id) => {
    setSelected(selected === id ? null : id); // Toggle selection
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-center bg-cover" style={{ backgroundImage: 'url(https://media.istockphoto.com/id/473778812/photo/funny-cat-with-passport-and-airline-ticket.jpg?s=612x612&w=0&k=20&c=Mm1jZCnpiNsOdOBlPOxv1LREPEERG5lD70GoO9Gu5Pg=' }}>
      <div className="w-[60%] h-[50%] bg-white bg-opacity-50 p-8 rounded-lg shadow-lg mt-[5%] mb-[15%]">
        <h1 className="mb-2 text-3xl font-bold text-center">Choose Your Travel Type</h1>
        <h2 className="mb-6 text-xl text-center">Choose Who You Are?</h2>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-4 grid-rows-3 gap-4">
          {travelTypes.slice(0, 8).map((type) => (
            <div
              key={type.id}
              className={`p-4 bg-white bg-opacity-50 rounded-lg text-center cursor-pointer transition-all duration-300 ${selected === type.id ? 'bg-gray-600 text-white' : ''} hover:shadow-lg hover:scale-105`}
              onClick={() => handleSelect(type.id)}
            >
              <img src={type.image} className="object-cover w-12 h-12 mx-auto mb-2" />
              <h3 className="text-xl font-bold">{type.title}</h3>
              <p className="text-sm">{type.description}</p>
            </div>
          ))}

          {/* Placeholder for empty space in 3rd row, 1st column */}
          <div className="p-4"></div>

          {/* 9th (Corporate) in 3rd row, 2nd column */}
          <div
            className={`p-4 bg-white bg-opacity-50 rounded-lg text-center cursor-pointer transition-all duration-300 ${selected === 9 ? 'bg-gray-600 text-white' : ''} hover:shadow-lg hover:scale-105`}
            onClick={() => handleSelect(9)}
          >
            <img src={travelTypes[8].image} className="object-cover w-12 h-12 mx-auto mb-2" />
            <h3 className="text-xl font-bold">{travelTypes[8].title}</h3>
            <p className="text-sm">{travelTypes[8].description}</p>
          </div>

          {/* 10th (Senior) in 3rd row, 3rd column */}
          <div
            className={`p-4 bg-white bg-opacity-50 rounded-lg text-center cursor-pointer transition-all duration-300 ${selected === 10 ? 'bg-gray-600 text-white' : ''} hover:shadow-lg hover:scale-105`}
            onClick={() => handleSelect(10)}
          >
            <img src={travelTypes[9].image} className="object-cover w-12 h-12 mx-auto mb-2" />
            <h3 className="text-xl font-bold">{travelTypes[9].title}</h3>
            <p className="text-sm">{travelTypes[9].description}</p>
          </div>

          {/* Placeholder for empty space in 3rd row, 4th column */}
          <div className="p-4"></div>

          {/* Buttons */}
          <div className="flex justify-center col-span-4 mt-6 space-x-4">
          <button
            type="button"
            className="px-4 py-2 text-white transition duration-300 bg-gray-500 rounded-lg shadow-md hover:bg-black"
            onClick={() => navigate('/TripDetails')}
          >
            Back
          </button>
            <button className="px-6 py-2 text-white transition duration-200 bg-green-500 rounded-lg hover:bg-green-600">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelType;



/*Responsiveness*/

/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const travelTypes = [
  { id: 1, title: 'Budget', description: 'Affordable and convenient trips', image: 'https://media.istockphoto.com/id/682961712/vector/pink-piggy-bank-with-falling-coins-saving-money-investments-in-future.jpg?s=612x612&w=0&k=20&c=GywpFsJSe-1hW2P68vfCpO4-GPEmHV3LuL6p37DZO5A=' },
  { id: 2, title: 'Romantic', description: 'Date with your lover.', image: 'https://media.istockphoto.com/id/1296482485/vector/couple-enjoying-vacation.jpg?s=612x612&w=0&k=20&c=33pnFDoVnlzoBvRlkx1SfM4IIgXDjOF3FfA7JjeeUsU=' },
  { id: 3, title: 'Adventure', description: 'Injuries occur but its experience', image: 'https://media.istockphoto.com/id/1204813970/vector/hikers-at-mountain-viewpoint.jpg?s=612x612&w=0&k=20&c=mUbIsPmPXIGIrRwoiJUDP1BjHb-8cbDLzI653qU0soQ=' },
  { id: 4, title: 'Culture', description: 'Know how different we humans are', image: 'https://media.istockphoto.com/id/158095032/vector/cartoon-map-of-world.jpg?s=612x612&w=0&k=20&c=8A9ERCzLjq3XUa7HxwM5uFDupHl0sc0a4T9hfwzQoWs=' },
  { id: 5, title: 'Relaxation', description: 'Headout to cool your head.', image: 'https://media.istockphoto.com/id/1411276730/vector/a-huge-dollar-coin-sunbathing-in-a-striped-beach-chair-a-vacation-budget-concept.jpg?s=612x612&w=0&k=20&c=XgFsSSlvButMdSmY3qLOCgs5yvL2TRtpOhPGANj1G-s=' },
  { id: 6, title: 'Friends', description: 'Enough off online friends meet IRL', image: 'https://media.istockphoto.com/id/531552600/vector/group-of-young-people-jumping-on-white-background-with-copyspace.jpg?s=612x612&w=0&k=20&c=MtJ-jIeRgI1mhYfrn_Ofz2N0rRBmL5x-mK6gLAgI5v0=' },
  { id: 7, title: 'Family', description: 'See your parents smile', image: 'https://media.istockphoto.com/id/1264091180/vector/family-hiking-or-location-app-concept.jpg?s=612x612&w=0&k=20&c=qehumUDzfgBRqEpk7ZnpG7nZSesX2Zi4hef6UcZcrtc=' },
  { id: 8, title: 'Solo', description: 'Enjoy once in a while.', image: 'https://media.istockphoto.com/id/1476473662/vector/clip-art-of-a-man-traveling-with-a-carrying-case-and-passport-in-his-hand.jpg?s=612x612&w=0&k=20&c=1KOsMtdmnUMjbcohXRxZnPfY3y7Kk2K89nuMtXsRUUs=' },
  { id: 9, title: 'Corporate', description: 'IDK they arranged I joined.', image: 'https://media.istockphoto.com/id/1318797792/vector/air-travel-and-tourism-hope-to-return-after-covid-19-coronavirus-outbreak-concept.jpg?s=612x612&w=0&k=20&c=0CgRTl0-vmlQmofJQGV6_VZgrbzgbWYLIu01kFvNpKk=' },
  { id: 10, title: 'Senior', description: "Enough Love we earned.. Let's enjoy.", image: 'https://media.istockphoto.com/id/1332380665/vector/elderly-people-dancing-on-the-beach-vector-illustration-in-cartoon-style-isolated-on-white.jpg?s=612x612&w=0&k=20&c=6MlF-dq331HbekH1KpFgCG6QDgxNLuGds57TTvGGSfs=' },

];

const TravelType = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (id) => {
    setSelected(selected === id ? null : id); // Toggle selection
  };

  const handleSubmit = () => {
    alert('Please wait...');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-center bg-cover" style={{ backgroundImage: 'url(https://media.istockphoto.com/id/473778812/photo/funny-cat-with-passport-and-airline-ticket.jpg?s=612x612&w=0&k=20&c=Mm1jZCnpiNsOdOBlPOxv1LREPEERG5lD70GoO9Gu5Pg=' }}>
      <div className="w-[90%] h-auto bg-white bg-opacity-10 p-8 rounded-lg shadow-lg mt-4 mb-8">
        <h1 className="mb-2 text-3xl font-bold text-center">Choose Your Travel Type</h1>
        <h2 className="mb-6 text-xl text-center">Choose Who You Are?</h2>
        
         {/*Responsive Grid Layout*
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {travelTypes.slice(0, 8).map((type) => (
            <div
              key={type.id}
              className={`p-4 bg-white bg-opacity-50 rounded-lg text-center cursor-pointer transition-all duration-300 ${selected === type.id ? 'bg-gray-600 text-white' : ''} hover:shadow-lg hover:scale-105 hover:bg-gray-600 hover:text-white`}
              onClick={() => handleSelect(type.id)}
            >
              <img src={type.image} className="object-cover w-16 h-16 mx-auto mb-2 rounded-full" alt={type.title} />
              <h3 className="text-xl font-bold">{type.title}</h3>
              <p className="text-sm">{type.description}</p>
            </div>
          ))}

          {/*9th Container in 3rd Row, 3rd Column* /*
          <div className="col-span-1">
            <div
              className={`p-4 bg-white bg-opacity-50 rounded-lg text-center cursor-pointer transition-all duration-300 ${selected === 9 ? 'bg-gray-600 text-white' : ''} hover:shadow-lg hover:scale-105 hover:bg-gray-600 hover:text-white`}
              onClick={() => handleSelect(9)}
            >
              <img src={travelTypes[8].image} className="object-cover w-16 h-16 mx-auto mb-2 rounded-full" alt={travelTypes[8].title} />
              <h3 className="text-xl font-bold">{travelTypes[8].title}</h3>
              <p className="text-sm">{travelTypes[8].description}</p>
            </div>
          </div>

          {/*10th Container in 4th Row, 2nd Column *
          <div className="col-span-1 ">
            <div
              className={`p-4 bg-white bg-opacity-50 rounded-lg text-center cursor-pointer transition-all duration-300 ${selected === 10 ? 'bg-gray-600 text-white' : ''} hover:shadow-lg hover:scale-105 hover:bg-gray-600 hover:text-white `}
              onClick={() => handleSelect(10)}
            >
              <img src={travelTypes[9].image} className="object-cover w-16 h-16 mx-auto mb-2 rounded-full" alt={travelTypes[9].title} />
              <h3 className="text-xl font-bold">{travelTypes[9].title}</h3>
              <p className="text-sm">{travelTypes[9].description}</p>
            </div>
          </div>
        </div>

        {/*Buttons*
        <div className="flex justify-center mt-6 space-x-4">
          <button
            type="button"
            className="px-4 py-2 text-white transition duration-300 bg-gray-500 rounded-lg shadow-md hover:bg-black"
            onClick={() => navigate('/TripDetails')}
          >
            Back
          </button>
          <button 
            className="px-6 py-2 text-white transition duration-200 bg-green-500 rounded-lg hover:bg-green-600"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelType;
*/








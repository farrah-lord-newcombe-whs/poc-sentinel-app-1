import React from 'react';
import './tailwind.output.css';

function App() {
  const image= "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp1871766.jpg&f=1&nofb=1"
  return (
    <div className="max-w-sm rounded overflow-hidden my-4 mx-2">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Sentinel Vision</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
        <button className="ripple hover:shadow-md bg-white mt-3 hover:bg-gray-100 text-blue-800 border-blue-800 font-semibold py-2 px-4 border rounded shadow">
          Legacy Sentinel
        </button>
      </div>
    </div>
  );
}

export default App;

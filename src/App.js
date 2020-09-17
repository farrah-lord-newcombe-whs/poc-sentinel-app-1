import React from 'react';
import './tailwind.output.css';

function App() {
  let avengers;

  fetch(`${process.env.REACT_APP_SHARED_COMPONENTS}/content/avengers.json`)
  .then(res => res.json() )
  .then(res => {
    avengers = res;
    console.log('avengers: ', avengers);
  })
  .catch(err => console.log('err', err));
  
    return (
      <div className="max-w-sm rounded overflow-hidden my-4 mx-2">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Sentinel Vision</div>
          <p className="text-gray-700 text-base">
            {avengers}
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

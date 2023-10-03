import React from 'react';
import './App.css';
import StarRating from './StarRating';

export default function App() {
  return (
    <div className="App">
      {/* default */}
      <StarRating  />
      <StarRating maxRating={10} color="red" />
      <StarRating defaultRating={3} />
      <StarRating size={80} />
      <StarRating maxRating={4} color="green" messages={["Great", "Good", "Okay", "Awful"]} />
    </div>
  );
};
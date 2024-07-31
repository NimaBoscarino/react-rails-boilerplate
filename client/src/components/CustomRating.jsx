import React, { useState } from 'react';

const CustomRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
    console.log(rate);
  };

  return (
    <div>
      {[...Array(totalStars)].map((star, index) => {
        index += 1;
        return (
          <span
            key={index}
            className={index <= rating ? 'on' : 'off'}
            onClick={() => handleRating(index)}
            style={{ cursor: 'pointer', color: index <= rating ? 'gold' : 'gray' }}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default CustomRating;

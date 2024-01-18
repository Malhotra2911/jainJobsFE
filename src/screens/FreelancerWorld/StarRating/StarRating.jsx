import React from 'react'
import { RatingStar } from "rating-star";

export default function StarRating() {
    const [rating, setRating] = React.useState(30);

    const onRatingChange = (score) => {
      setRating(score);
    };
  
  return (
    <div>
           <RatingStar
        clickable
        maxScore={100}
        id="123"
        rating={rating}
        onRatingChange={onRatingChange}
      />
 
    </div>
  )
}

import React, { useState } from 'react'
import Icon from '../Icon/Icon'
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import './Wrapper.css'

const Wrapper = ({name, description, wrappertop}) => {

    const [rating, setRating] = useState(3);
    const [isActive, setIsActive] = useState(false);

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
  };

    return (
        <div className={`left-container ${isActive ? 'active' : ''}`}>
            <div className='most'>{wrappertop}</div>
            <div className="name">{name}</div>
            <div className="des">{description}</div>
            <div className="rating">
      <input
        value="5"
        name="rate"
        id="star5"
        type="radio"
        checked={rating === 5}
        onChange={handleRatingChange}
      />
      <label title="text" htmlFor="star5"></label>
      <input
        value="4"
        name="rate"
        id="star4"
        type="radio"
        checked={rating === 4}
        onChange={handleRatingChange}
      />
      <label title="text" htmlFor="star4"></label>
      <input
        value="3"
        name="rate"
        id="star3"
        type="radio"
        checked={rating === 3}
        onChange={handleRatingChange}
      />
      <label title="text" htmlFor="star3"></label>
      <input
        value="2"
        name="rate"
        id="star2"
        type="radio"
        checked={rating === 2}
        onChange={handleRatingChange}
      />
      <label title="text" htmlFor="star2"></label>
      <input
        value="1"
        name="rate"
        id="star1"
        type="radio"
        checked={rating === 1}
        onChange={handleRatingChange}
      />
      <label title="text" htmlFor="star1"></label>
    </div>
            <button className="watch"><Icon css=""
                icon={faPlay} />
                Watch Now</button>
            <button className="trailer">Trailer</button>
        </div>
    )
}

export default Wrapper

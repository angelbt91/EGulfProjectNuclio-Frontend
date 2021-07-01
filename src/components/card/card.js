import { Link } from "react-router-dom";
import React, { useState } from "react";
import Heart from "../../assets/heart.png";
import Star from "../../assets/star.png";
import HeartRed from "../../assets/heartRed.png";

import("./card.css");

const Card = ({ img, name, rating, initprice }) => {
  // const [price, setprice] = useState(30);
  const [condition, setcondition] = useState(true);
  return (
    <div className="container">
      <Link to="/Product/:id">
        <img src={img} className="cardImage" alt="" />
      </Link>

      <div className="banner">
        <div className="banner_info">
          <div className="banner_left">
            <p>{name}</p>
            <p>{rating}</p>
            <img className="star_icon" src={Star} alt="icon-heart" />
          </div>
          <p className="banner_price">{initprice}</p>
          <div onClick={() => setcondition(!condition)}>
            {/* {condition ? ( */}
            <img
              className="heart_icon"
              src={condition ? Heart : HeartRed}
              alt="icon-heart"
            />
            {/*  /*  ) : (
              <img className="heart_icon" src={Star} alt="icon-heart" />
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

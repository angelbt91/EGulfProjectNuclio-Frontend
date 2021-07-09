import {
  Link,
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import React, { useState } from "react";
import Heart from "../../assets/heart.png";
import Star from "../../assets/star.png";
import HeartRed from "../../assets/heartRed.png";
import ProductPage from "../../pages/productpage/productpage";
import("./card.css");

const Card = ({ img, name, rating, initprice, id }) => {
  const history = useHistory();
  const url = "/productpage/" + id;
  const [condition, setCondition] = useState(true);

  return (
    <Router>
      <div className="container">
        <Link to={url} onClick={() => history.push("/productpage/" + id)}>
          <img src={img} className="cardImage" alt="" />
        </Link>
        <div className="banner">
          <div className="banner_info">
            <div className="banner_left">
              <p>{name.slice(0,11)}</p>
              <p>{rating}</p>
              <img className="star_icon" src={Star} alt="icon-heart" />
            </div>
            <p className="banner_price">{initprice}</p>
            <div onClick={() => setCondition(!condition)}>
              <img
                className="heart_icon"
                src={condition ? Heart : HeartRed}
                alt="icon-heart"
              />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};
export default Card;

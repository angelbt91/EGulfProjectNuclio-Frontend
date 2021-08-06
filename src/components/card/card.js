import { Link, BrowserRouter as Router, useHistory } from "react-router-dom";
import React, { useState } from "react";
import Heart from "../../assets/heart.png";
import Star from "../../assets/star.png";
import HeartRed from "../../assets/heartRed.png";
import { API_ROOT } from "../../utils/apiHost/apiHost";
import("./card.css");

const Card = ({
  img,
  name,
  rating,
  initprice,
  id,
  nameUser,
  usersFavs,
  refreshFavorites,
}) => {
  const history = useHistory();
  const url = "/productpage/" + id;

  const [isFavorite, setIsFavorite] = useState(usersFavs);
  const localStorageToken = localStorage.getItem("token");

  const updateFavorite = () => {
    setIsFavorite(!isFavorite);
    fetch(`${API_ROOT}products/${id}/favorite`, {
      method: isFavorite ? "DELETE" : "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorageToken}`,
      },
    }).then(() => {
      if (refreshFavorites) {
        refreshFavorites();
      }
    });
  };

  return (
    <Router>
      <div className="container">
        <Link to={url} onClick={() => history.push(url)}>
          <img src={img} className="cardImage" alt="" />
        </Link>
        <div className="banner">
          <span className="name_card">{name?.slice(0, 14)}</span>
          <p className="nameUser_card">{nameUser}</p>

          <p className="banner_price">{initprice}</p>
          <p className="rating_card">{rating}</p>

          <div onClick={updateFavorite}>
            <img className="star_icon" src={Star} alt="star" />
            <img
              className="heart_icon"
              src={isFavorite || usersFavs ? HeartRed : Heart}
              alt="icon-heart"
            />
          </div>
        </div>
      </div>
    </Router>
  );
};
export default Card;

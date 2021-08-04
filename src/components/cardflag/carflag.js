import React from "react";
import {
    Link,
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
  } from "react-router-dom";
import "./cardflag.css";



const CardFlag = ({img, name, rating, owner, id, yourbid, maxbid}) => {
  const history = useHistory();  
  const url = "/product/" + id;  
  return (
    <Router>
        <div className="card_flag">
        <Link to={url} onClick={() => history.push("/productpage/" + id)}>
          <img src={img} className="cardImage_flag" alt="" />
        </Link>
        <p className="card_Name">{name}</p>
        <p className="raiting_name">{owner} ({rating}%)</p>{" "}
        <span className="tu_puja">Tu puja</span>
        <span className="puja_maxima">Puja máxima</span>
        <span className="acaba_en">Acaba en:</span>
        <br></br>
        <span className="price_pujamaxima">{maxbid}€</span>
        <span className="price_tupuja">{yourbid}€</span>
        <span className="fin_puja">Se va el caiman</span>
        </div>
    </Router>
  );
};

export default CardFlag;
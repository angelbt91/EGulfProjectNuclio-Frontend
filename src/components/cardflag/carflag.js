import React from "react";
import {
    Link,
    BrowserRouter as Router,
    useHistory,
  } from "react-router-dom";
import "./cardflag.css";

const CardFlag = ({img, name, rating, owner, id, yourbid, maxbid, dateAuction}) => {
  const history = useHistory();  
  const url = "/product/" + id;  
  const fecha = new Date(dateAuction)
  const fechaahora = new Date()
  const fechar = (fecha -fechaahora)
  let options = { year: 'numeric', month: 'long', day: 'numeric', hour:'numeric', minute: 'numeric'};

  
  function convertMS(ms) {
  if (fechar>0){
    let d, h, m, s, hf;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    h += d * 24;
    hf = h  - d*24
    
    return (d +  " Dias " + hf +  " horas " + m + " minutos " + s + " segundos");
  }
    return (fecha.toLocaleString('es-ES', options))  
  }
  const time = convertMS(fechar);

  function auctionLive(mili) {
    if (mili < 0 ){
    return ("Acabo  el");
    }
    return ("Acaba en");
  }

  
  
  return (
    <Router>
        <div className="card_flag">
        <Link to={url} onClick={() => history.push("/productpage/" + id)}>
          <img src={img} className="cardImage_flag" alt="" />
        </Link>
        <div className="info-card-flag">
          <p className="card_Name">{name}</p>
          <p className="raiting_name">
            {owner} ({rating}%)
          </p>{" "}
          <div className="titulos_pujas">
            <span className="tu_puja">Tu puja</span>
            <span className="puja_maxima">Puja máxima</span>
            <span className="acaba_en">{auctionLive(fechar)}</span>
          </div>
          <br></br>
          <div className="precios_pujas">
            <span className="price_pujamaxima">{maxbid}€</span>
            <span className="price_tupuja">{yourbid}€</span>
            <span className="fin_puja">{time}</span>
          </div>
        </div>
      </div>

        
    </Router>
  );
};

export default CardFlag;
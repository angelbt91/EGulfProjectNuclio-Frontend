import React from "react";
import { Link } from "react-router-dom";
import Roll from "../roll/roll";

import "./productcreated.css";

const ProductCreated = () => {
  return (
    <div>
      <div>
        <h1 className="titulo_box">Mis articulos en venta</h1>
        <div className="box">
          <p className="titulo_inside_box">
            2<span className="next_titulo_inside">anuncios</span>1
            <span className="next_titulo_inside2">vendido</span>
            <span className="titulo_ganancias">173,28€</span>
            <Link to="/productformpage">
              <button className="sell_button">
                PONER UN ARTÍCULO EN VENTA
              </button>
            </Link>
            <p className="titulo_ganados">ganados</p>
          </p>
        </div>
        <div className="products_activos">
          <h1 className="titulo_activos">Activos</h1>
          <Roll />
        </div>
        <div className="products_vendidos">
          <h1 className="titulo_venta">Ventas</h1>
          <Roll />
        </div>
      </div>
    </div>
  );
};

export default ProductCreated;

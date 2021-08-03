import React from "react";
import "./mybids.css";

const MyBids = () => {
  return (
    <div>
      <h1 className="titulo_mispujas">Mis pujas</h1>
      <div className="counter">
        <span className="counter_ganando">3 </span>
        <span className="titulo_ganando">ganando</span>
        <span className="counter_noGanando">1 </span>
        <span className="titulo_Noganando">no ganando</span>
        <span className="counter_perdida">1</span>{" "}
        <span className="titulo_perdida">perdida</span>
      </div>
      <div className="subastas">
        <p className="Sub_ganado">Ganando</p>
        <span className="tu_puja">Tu puja</span>
        <span className="puja_maxima">Puja máxima</span>
        <span className="acaba_en">Acaba en:</span>
        <br></br>
        <span className="price_pujamaxima">67€</span>
        <span className="price_tupuja">67€</span>
        <span className="fin_puja">2d 09h 20m</span>

        <p className="Sub_activas_perdiendo">Subastas activas perdiendo</p>
        <span className="tu_puja">Tu puja</span>
        <span className="puja_maxima">Puja máxima</span>
        <span className="acaba_en">Acaba en:</span>
        <br></br>
        <span className="price_pujamaxima">100€</span>
        <span className="price_tupuja">67€</span>
        <span className="fin_puja">1d 09h 20m</span>

        <p className="Sub_activas_perdidas">Subastas activas perdidas</p>
        <span className="tu_puja">Tu puja</span>
        <span className="puja_maxima">Puja máxima</span>
        <span className="acaba_en">Acabo el:</span>
        <br></br>
        <span className="price_pujamaxima">100€</span>
        <span className="price_tupuja">55€</span>
        <span className="fin_puja">17/09/2021</span>
      </div>
    </div>
  );
};

export default MyBids;

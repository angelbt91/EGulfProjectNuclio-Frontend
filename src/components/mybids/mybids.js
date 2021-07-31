import React from "react";
import "./mybids.css";
import { API_ROOT } from "../../utils/apiHost/apiHost";

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
        <span className="fin_puja">17/09/2021</span>

        <p className="Sub_activas_perdiendo">Subastas activas perdiendo</p>
        <span className="tu_puja">Tu puja</span>
        <span className="puja_maxima">Puja máxima</span>
        <span className="acaba_en">Acaba en:</span>
        <p className="Sub_activas_perdidas">Subastas activas perdidas</p>
        <span className="tu_puja">Tu puja</span>
        <span className="puja_maxima">Puja máxima</span>
        <span className="acaba_en">Acaba en:</span>
      </div>
    </div>
  );
};

export default MyBids;

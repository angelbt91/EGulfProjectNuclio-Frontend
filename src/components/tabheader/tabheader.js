import "./tabheader.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { render } from "react-dom";
import TabSubHeader from "../tabsubheader/tabsubheader";

const TabHeader = () => {
  const optionsArray = [
    "CASA Y JARDIN",
    "MODA",
    "MOTOR",
    "COLECCIONISMO",
    "OFERTAS",
  ];
  
  const history = useHistory();
 
  function ShowTabSubheader() {
    const [isShown,setIsShown] = useState(false);

    return (
      <div className="_tabheadContainer">
        <div>
          <span onClick={() => history.push("/")}>PORTADA</span>
        </div>
        <div>
          <span onClick={() => history.push("/favouritePage")}>FAVORITOS</span>
        </div>

        {optionsArray.map((option) => {
          return (
            <div onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} className="tab">
              {/* ponemos el history.push de ruta a favouritePage como test */}
              <span onClick= {() => history.push("/favouritePage")} id="notthediv">{option.toLowerCase()}</span>
            </div>
            {isShown && 
              <div>
              <TabSubHeader />
              </div>
            }
          )
        })}
      </div>
    );
  }  
};

export default TabHeader
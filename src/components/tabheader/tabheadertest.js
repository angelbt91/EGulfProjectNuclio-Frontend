import "./tabheader.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { render } from "react-dom";
import TabSubHeader from "../tabsubheader/tabsubheader";

const TabHeader = ({ handleMouseOver, handleMouseOut }) => {
  const optionsArray = [
    "CASA Y JARDIN",
    "MODA",
    "MOTOR",
    "COLECCIONISMO",
    "OFERTAS",
  ];
  
  const HoverExample = () => {
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
      setIsHovering(true);
    }};

    const handleMouseOut = () => {
        setIsHovering(false);
      };

  const history = useHistory();
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
          <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="tab">
            <span onClick= {() => history.push("/favouritePage")} id="notthediv">{option.toLowerCase()}</span>
          </div>
        );
      }
      )}
    </div>
  );
};

export default TabHeader
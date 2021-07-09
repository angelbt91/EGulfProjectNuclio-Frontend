import "./tabheader.css";
import { useHistory } from "react-router-dom";

const TabHeader = () => {
  const optionsArray = [
    "CASA Y JARDIN",
    "MODA",
    "MOTOR",
    "COLECCIONISMO",
    "OFERTAS",
  ];
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
          <div className="tab">
            <span onClick= {() => history.push("/favouritePage")} id="notthediv">{option.toLowerCase()}</span>
          </div>
        );
      })}
    </div>
  );
};

export default TabHeader
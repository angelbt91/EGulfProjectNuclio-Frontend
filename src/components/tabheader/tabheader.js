import "./tabheader.css";

const TabHeader = () => {
  const optionsArray = [
    "PORTADA",
    "FAVORITOS",
    "CASA Y JARDIN",
    "MODA",
    "MOTOR",
    "COLECCIONISMO",
    "OFERTAS",
  ];
  return (
    <div className="_tabheadContainer">
      {optionsArray.map((option) => {
        return (
          <div className="tab">
            <span id="notthediv">{option}</span>
          </div>
        );
      })}
    </div>
  );
};

export default TabHeader;

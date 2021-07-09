import "./tabsubheader.css";

const TabSubHeader = () => {
  const optionsArray = [
    "ZAPATOS",
    "ABRIGOS",
    "VESTIDOS",
    "TRAJES",
    "ACCESORIOS",
    "BAÑO",
    "JERSÉIS",
  ];
  return (
    <div className="_tabsubheadContainer">
      {optionsArray.map((option) => {
        return (
          <div className="tab">
            <span id="notthediv">{option.charAt(0).toUpperCase() + option.slice(1).toLowerCase()}</span>
          </div>
        );
      })}
    </div>
  );
};

export default TabSubHeader;
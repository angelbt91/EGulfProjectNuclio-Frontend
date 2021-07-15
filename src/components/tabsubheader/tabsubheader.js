import "./tabsubheader.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

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

  const history = useHistory();
  
    return (
      <div>
        <div className="_tabsubheadContainer">
          {optionsArray.map((option) => {
            return (
              <div>
                <span onClick= {() => history.push("/favouritePage")} id="notthediv">{option.charAt(0).toUpperCase() + option.slice(1).toLowerCase()}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
};


export default TabSubHeader;
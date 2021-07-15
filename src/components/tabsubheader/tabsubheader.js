import "./tabsubheader.css";
import { useState, useHistory } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const TabSubHeader = () => {
  const [subcategory, setSubcategory] = useState();
  const [options, useOptions] = useState();
  const history = useHistory();

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
    <div>
      <div className="_tabsubheadContainer">
        {optionsArray.map((option) => {
          return (
            <div>
              <span
                onClick={() => history.push("/favouritePage")}
                id="notthediv"
              >
                {option.charAt(0).toUpperCase() + option.slice(1).toLowerCase()}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabSubHeader;

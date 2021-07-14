import "./tabsubheader.css";
import { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const TabSubHeader = () => {
  const [subcategory, setSubcategory] = useState();
  const [options, useOptions] = useState();
  const { id } = useParams();

  /*   fetch(`http://localhost:5001/categories/${id}/subcategories`)
    .then((response) => response.json())
    .then((json) => setSubcategory(json)); */
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
            <span id="notthediv">{option}</span>
          </div>
        );
      })}
    </div>
  );
};
export default TabSubHeader;

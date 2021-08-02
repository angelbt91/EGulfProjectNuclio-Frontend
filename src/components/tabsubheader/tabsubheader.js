import React from "react";
import "./tabsubheader.css";
const TabSubHeader = ({ subcategories, id }) => {
  return (
    <div className="_subheadContainerPosition">
      <div className="_subheadContainer">{subcategories}</div>
    </div>
  );
};
export default TabSubHeader;

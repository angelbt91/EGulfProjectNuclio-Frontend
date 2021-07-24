import "./tabsubheader.css";

const TabSubHeader = ({ subcategories }) => {
  return (
    <div>
      <div className="_subheadContainer">
        <span className="_tabSubheadContainer">{subcategories}</span>
      </div>
    </div>
  );
};

export default TabSubHeader;

import "./tabsubheader.css";

const TabSubHeader = ({ subcategories }) => {
  return (
    <div>
      <div className="_tabsubheadContainer">
        <div>
          <span>{subcategories}</span>
        </div>
      </div>
    </div>
  );
};

export default TabSubHeader;

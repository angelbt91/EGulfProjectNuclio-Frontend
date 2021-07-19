import "./tabsubheader.css";
const TabSubHeader = ({ subcategories }) => {
  return (
    <div className="_subheadContainerPosition">
      <div className="_subheadContainer">
        <span className="_tabSubheadContainer">{subcategories}</span>
      </div>
    </div>
  );
};
export default TabSubHeader;
import "./filter.css";
import { useHistory } from "react-router-dom";

const Filter = () => {
  const history = useHistory;
  return (
    <div className="filterContainer">
      <h3>Price</h3>
      <p className="range">Range</p>
      <div className="priceContainer">
        <div className="minPriceContainer">
          Min
          <input type="text" className="minPrice" />
        </div>
        <div className="maxPriceContainer">
          Max
          <input type="text" className="maxPrice" />
        </div>
        <button
          className="filterButton"
          onClick={() => history.push("/searchpage?minPice&maxPrice")}
        >
          Apply filter
        </button>
      </div>
    </div>
  );
};

export default Filter;

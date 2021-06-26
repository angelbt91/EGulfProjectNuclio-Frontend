import Card from "../card/card";
import ProductsList from "../comp/product.json";

import "./roll.css";

const Roll = ({ title }) => {
  return (
    <div className="main_roll">
      <h3>{title}</h3>
      <div className="card_roll">
        {ProductsList.slice(0, 4).map((product) => (
          <Card
            img={product.img}
            name={product.name}
            rating={product.rating}
            initprice={product.initprice}
          />
        ))}
      </div>
    </div>
  );
};

export default Roll;

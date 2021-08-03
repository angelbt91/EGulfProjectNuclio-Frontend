import Card from "../card/card";
import "./roll.css";
import { useProducts } from "../../hooks/useProducts";

const Roll = ({ title }) => {
  const { products } = useProducts("60e7f052df5a6d070e1ad960");
  return (
    <div className="main_roll">
      <h3>{title}</h3>
      <div className="card_roll">
        {products &&
          products
            .slice(0, 4)
            .map((product) => (
              <Card
                img={product.images[0]}
                name={product.name}
                rating={product.owner.rating}
                initprice={product.currentPrice}
                id={product._id}
                nameUser={product.owner.name}
                usersFavs={product.usersFavs.includes(
                  "60e7f052df5a6d070e1ad960"
                )}
              />
            ))}
      </div>
    </div>
  );
};

export default Roll;

import "./shoppingCart.css";
import Cart from "../../assets/carrito.png";

const ShoppingCart = () => {
  return (
    <div className="_shopcartContainer">
      <button className="_shoppingButton">
        <img src={Cart} alt="" />
        <span className="_spanShopping">SHOPPING CART</span>
      </button>
      <span className="_shopcartCounter">2</span>
    </div>
  );
};

export default ShoppingCart;

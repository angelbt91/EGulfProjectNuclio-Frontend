import './shoppingCart.css'
import Carrito from '../../assets/carrito.png';

const ShoppingCart = () => {
    return(
        <div className="_shopcartContainer">
            <button className="_shoppingButton">
                <img src={Carrito} alt=""></img>
                <span className ="_spanShopping">SHOPPING CART</span>
            </button>
            <span className="_shopcartCounter">2</span>
        </div>
    )
}

export default ShoppingCart;
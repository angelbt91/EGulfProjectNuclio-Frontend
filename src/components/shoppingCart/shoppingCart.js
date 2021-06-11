import './shoppingCart.css'
import Carrito from '../../assets/carrito.png';

const ShoppingCart = () => {
    return(
        <div className="shopcartContainer">
            <button className="_shoppingButton">
                <img src={Carrito}></img>
                <span className ="_spanShopping">SHOPPING CART</span>
                <span className ="_contador">2</span>
            </button>
        </div>
    )
}

export default ShoppingCart;
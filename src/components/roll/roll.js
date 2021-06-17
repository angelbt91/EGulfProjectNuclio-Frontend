import Card from "../card/card"
import ListProduct from '../comp/product.json'

import('./roll.css');


const Roll = ({ tittle }) => {
    return (
        <div className="main_roll">
            <h3>{tittle}</h3>
            <div className="card_roll">
                {ListProduct.slice(0, 4).map((ListDetail, index) => (
                    <Card img={ListDetail.img} name={ListDetail.name} rating={ListDetail.rating} initprice={ListDetail.initprice} />
                ))} 
            </div>

        </div>

    );
};

export default Roll;
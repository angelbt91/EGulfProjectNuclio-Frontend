import ('./card.css')

const Card = ({img, name, rating, initprice}) => {
    return(
        
        <div className="main_card">
            <img src={img} alt=""/>
            <div className="main_banner">
                <div className="banner_info"> 
                    <p>{name}</p>
                    <p>{rating}</p>
                </div>
                <div className="banner_bits">
                    <p>{initprice}</p>
                </div>

            </div>
        </div>
    );
};

export default Card;
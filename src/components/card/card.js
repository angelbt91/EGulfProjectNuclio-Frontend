import ('./card.css')

const Card = ({img, name, rating, initprice}) => {
    return(
        <div className="container"> 
            <img src= {img} alt=""/>

            <div className="banner">
                <div className= "banner_info">
                    <div className="banner_left">
                        <p>{name}</p>
                        <p>{rating}</p>   
                    </div>
                    <p className="banner_price">
                        {initprice}
                        </p>
                </div>
            </div>
         
        </div>  
    );
};

export default Card;

/* 
            <div className="main_banner">
                <div className="banner_info"> 
                    <p>{name}</p>
                    <p>{rating}</p>
                </div>
                <div className="banner_bits">
                    <p>{initprice}</p>
                </div>

            </div> */

            /* <div className="card_container">
            <div>
                <img src={img} alt=""/>
            </div>
            
            <div className="card_banner">
                <p>{name}</p>
                <p>{rating}</p>
            </div>
            
        </div> */
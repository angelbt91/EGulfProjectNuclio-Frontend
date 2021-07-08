import Card from "../card/card";
import ProductsList from "../comp/product.json";
import "./roll.css";
import { useEffect, useState } from "react";

const Roll = ({title}) =>{
  const url ='http://localhost:5001/auctions';
  const [auctions, setAuctions] = useState(undefined)
  const [productAuctionId, setproductAuctionId] = useState();
  // const [auctionUser, setAuctionUser] = useState();
  
  useEffect (() =>  {
    fetch(url)
    .then((response)=>{
      if (response.ok) {
        return response.json();
      } else {
          throw Error(response.statusText);          
      }
    })
    .then((data)=>{
      let auctionUser = data
      setAuctions(auctionUser);
    })
    .catch((error)=>{
      console.error(error);
    });
  },[]);
 
  return (
    <div className="main_roll">
      <h3>{title}</h3>
      <div className="card_roll">
        {auctions && auctions.slice(0, 4).map((auction) => (
          <Card
          //img={auction.images[0]}
          //name={product.name}
          //rating={product.rating}
          initprice={auction.startingPrice}
          id={auction._id}
        />
        ))}
      </div>
    </div>

  );



}

/* const Roll = ({ title }) => {
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
            id={product.id}
          />
        ))}
      </div>
    </div>
  );
}; */
export default Roll;

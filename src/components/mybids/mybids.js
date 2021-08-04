import React, { useEffect, useState } from "react";
import "./mybids.css";
import { API_ROOT } from "../../utils/apiHost/apiHost";
import Card from "../card/card";
import CardFlag from "../cardflag/carflag";

const MyBids = () => {
  const url = `${API_ROOT}users/me/bids`;
  const [bids, setBids] = useState(false);
  
  useEffect(() => {
    fetch (url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.token,
      },
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
    }else{
      throw Error(response.statusText);
    }

    })
    .then((data) => {
      let bidsUser = data;
      setBids(bidsUser);
    })
    .catch((error) => {
      console.error(error);
    });
  },[]);
console.log(bids)
  return (
    <div>
      <h1 className="titulo_mispujas">Mis pujas</h1>
      <div className="counter">
        <span className="counter_ganando">{bids  && bids.active.length}</span>
        <span className="titulo_ganando">ganando</span>
        <span className="counter_noGanando">{bids && bids.losing.length}</span>
        <span className="titulo_Noganando">no ganando</span>
        <span className="counter_perdida">{bids && bids.active.length}</span>{" "}
        <span className="titulo_perdida">perdida</span>
      </div>
      <div className="subastas">
        <p className="Sub_ganado">Ganando</p>
        {bids && bids.active.map((bids) => (
        <CardFlag
          rating={bids.auctionId.productId.owner.rating}
          img={bids.auctionId.productId.images[0]}
          name={bids.auctionId.productId.name}
          owner={bids.auctionId.productId.owner.name}
          id={bids.auctionId.productId._id}
          yourbid={bids.auctionId.bidsAuction[bids.auctionId.bidsAuction.length -1].bidAmount}
          maxbid={bids.auctionId.productId.currentPrice}
          />

        
      ))}
       

       

        <p className="Sub_activas_perdiendo">Subastas activas perdiendo</p>
        {bids && bids.losing.map((bids) => (
        <CardFlag
          rating={bids.auctionId.productId.owner.rating}
          img={bids.auctionId.productId.images[0]}
          name={bids.auctionId.productId.name}
          owner={bids.auctionId.productId.owner.name}
          id={bids.auctionId.productId._id}
          yourbid={bids.auctionId.bidsAuction[bids.auctionId.bidsAuction.length -1].bidAmount}
          maxbid={bids.auctionId.productId.currentPrice}
          />

        
      ))}
   
        

        <p className="Sub_activas_perdidas">Subastas activas perdidas</p>
        {bids && bids.lost.map((bids) => (
        <CardFlag
          rating={bids.auctionId.productId.owner.rating}
          img={bids.auctionId.productId.images[0]}
          name={bids.auctionId.productId.name}
          owner={bids.auctionId.productId.owner.name}
          id={bids.auctionId.productId._id}
          yourbid={bids.auctionId.bidsAuction[bids.auctionId.bidsAuction.length -1].bidAmount}
          maxbid={bids.auctionId.productId.currentPrice}
          />

        
      ))}
  
       
      </div>
    </div>
  );
};

export default MyBids;

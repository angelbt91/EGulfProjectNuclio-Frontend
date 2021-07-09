import BidButton from "../bidbutton/bidButton";
import TitleProduct from "../titleproduct/titleProduct";
import "./productSheet.css";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ProductSheet = ({ title, description, initprice, iduser, rating }) => {
  const { id } = useParams();
  const [bidAmount, setbidAmount] = useState(initprice);
  const handleChange = (event) => {
    setbidAmount(event.target.value);
  };

  const body = { bidAmount };
  const localStorageToken = localStorage.getItem("token");

  const handleClick = () => {
    fetch(`http://localhost:5001/products/${id}/currentAuction/bid`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorageToken}`,
      },
      body: JSON.stringify(body),
    }).then(() => {
      fetch(`http://localhost:5001//${id}/currentAuction`)
        .then((res) => {
          if (res.ok) {
            console.log("OK!");
            throw res.json();
          } else {
            throw res.text();
          }
        })
        .then((response) => {
          return response.json();
        })
        .then((myJson) => {
          console.log(myJson);
        });
    });
  };

  return (
    <div className="productContainerGeneral">
      <div className="productSheetContainer">
        <TitleProduct title={title} />
        <hr className="productSheetSeparator"></hr>
        <div className="descriptionSheetContainer">
          <h2 className="descriptionTitle">Description</h2>
          <p className="descriptionProductSheet">{description}</p>
          <h3 className="descriptionShipping">Envío y condiciones</h3>
          <h3 className="descriptionShipping">
            Prioritario UE <h3 className="price">18€</h3>
          </h3>
        </div>
      </div>
      <div className="businessContainer">
        <div className="bildsContainer">
          <div className="businessContainerInside">
            <p className="priceActuality">{bidAmount} EUR </p>
            <p className="bidActuality"> 2 Puja</p>
            <input
              className="inputBid"
              type="text"
              name="textBid"
              placeholder="Introduce tu puja"
              onChange={handleChange}
            ></input>
            <div className="placeButton">
              <BidButton savePrice={handleClick} />
            </div>
          </div>
        </div>
        <div className="sellerContainer">
          <div className="businessContainerInside">
            <TitleProduct title="Información del vendedor" />
            <p className="userActuality">{iduser}</p>
            <p className="ratingUser">( {rating}%)</p>
            <div className="linkContainer">
              <p className="linkOther">Ver otros artículos</p>
              <p className="linkOther">Guardar como favorito</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductSheet;

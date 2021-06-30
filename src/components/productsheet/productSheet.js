import BidButton from "../bidbutton/bidButton"
import TitleProduct from "../titleproduct/titleProduct"
import "./productSheet.css"


const ProductSheet = ({title,description,initprice,iduser,rating}) => {
   
    return(
        <div className="productContainerGeneral">
            <div className="productSheetContainer">
                <TitleProduct title={title}/>
                <hr className="productSheetSeparator"></hr>
                <div className="descriptionSheetContainer">
                    <h2 className= "descriptionTitle">Description</h2>
                    <p className="descriptionProductSheet">{description}</p>
                    <h3 className= "descriptionShipping">Envío y condiciones</h3>
                    <h3 className= "descriptionShipping">Prioritario UE <h3 className="price">18€</h3></h3>
                </div>    
            </div> 
            <div className="businessContainer">
                <div className="bildsContainer">
                    <div className="businessContainerInside">
                        <p className="priceActuality">{initprice} EUR </p>
                        <p className="bidActuality"> 2 Puja</p>
                        <input className="inputBid" type="text" name="textBid" placeholder="Introduce tu puja maxima"></input>
                        <div className="placeButton">
                            <BidButton />
                        </div>
                    </div>
                </div>
                <div className="sellerContainer">
                    <div className="businessContainerInside">
                        <TitleProduct title="Información del vendedor"/>
                        <p className="userActuality">{iduser}</p>
                        <p className="ratingUser">(  {rating}%)</p>
                        <div className="linkContainer">
                            <p className="linkOther">Ver otros artículos</p>
                            <p className="linkOther">Guardar como favorito</p>
                        </div>
                        
                        
                    </div>    
                </div>
            </div>    
            
        </div>
        
    )
}
export default ProductSheet;
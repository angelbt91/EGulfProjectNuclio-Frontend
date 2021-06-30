import BreadCrumber from "../../components/breadcrumber/breadcrumber";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./productpage.css";
import ProductGallery from "../../components/productGallery/productGallery";
import ProductsList from "../../components/comp/product.json";
import ProductSheet from "../../components/productsheet/productSheet";


const ProductPage = () => {
    
    return(
        <div>
            <Header />
            <div className="productContainer">
                <BreadCrumber />
                <ProductGallery />
                <ProductSheet title={ProductsList[5].name} description={ProductsList[5].description} initprice={ProductsList[5].initprice} iduser= {ProductsList[5].iduser}  rating= {ProductsList[5].rating}/>
            </div>                
        </div>
    );
};
export default ProductPage;
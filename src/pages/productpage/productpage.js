import BreadCrumber from "../../components/breadcrumber/breadcrumber";
import "./productpage.css";
import ProductGallery from "../../components/productGallery/productGallery";
import ProductsList from "../../components/comp/product.json";
import ProductSheet from "../../components/productsheet/productSheet";
import Roll from "../../components/roll/roll";

const ProductPage = () => {
  return (
    <div>
      <div className="productContainer">
        <BreadCrumber />
        <ProductGallery />
        <ProductSheet
          title={ProductsList[5].name}
          description={ProductsList[5].description}
          initprice={ProductsList[5].initprice}
          iduser={ProductsList[5].iduser}
          rating={ProductsList[5].rating}
        />
        <div className="rollproductContainer">
          <Roll title="Artículos similares" />
        </div>
      </div>
    </div>
  );
};
export default ProductPage;

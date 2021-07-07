import BreadCrumber from "../../components/breadcrumber/breadcrumber";
import "./productpage.css";
import ProductGallery from "../../components/productGallery/productGallery";
import ProductsList from "../../components/comp/product.json";
import ProductSheet from "../../components/productsheet/productSheet";
import Roll from "../../components/roll/roll";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    fetch(`http://localhost:5001/auctions/${id}`)
      .then((response) => response.json())
      .then((json) => setProduct(json));
  }, [id]);

  return (
    <div>
      <div className="productContainer">
        <BreadCrumber />
        <ProductGallery URLimages={product.images} />
        {product && (
          <ProductSheet
            title={product.productId.name}
            description={product.productId.description}
            initprice={product.startingPrice}
            //iduser={product.sellerId.name}
            rating={ProductsList[5].rating}
          />
        )}

        <div className="rollproductContainer">
          <Roll title="Artículos similares" />
        </div>
      </div>
    </div>
  );
};
export default ProductPage;

import BreadCrumber from "../../components/breadcrumber/breadcrumber";
import "./productpage.css";
import ProductGallery from "../../components/productGallery/productGallery";
import ProductsList from "../../components/comp/product.json";
import ProductSheet from "../../components/productsheet/productSheet";
import Roll from "../../components/roll/roll";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    title: " ",
    description: " ",
    initprice: " ",
    iduser: " ",
    rating: " ",
  });

  useEffect(() => {
    fetch(`http://localhost:5001/products/${id}`)
      .then((response) => response.json())
      .then((json) => setProduct(json));
  }, []);

  return (
    <div>
      <div className="productContainer">
        <BreadCrumber />
        <ProductGallery />
        <ProductSheet
          title={product.name}
          description={product.description}
          initprice={product.startPrice}
          iduser={product.sellerId}
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

import React from "react";
import NoAuthorized from "../../components/noauthorized/noauthorized";
import ProductCreated from "../../components/productcreated/productcreated";
import "./productcreatedpage.css";
const ProductCratedPage = () => {
  if (!localStorage.token) {
    return(
      <NoAuthorized />
    )
  }
  return (
    <div>
      <ProductCreated />
    </div>
  );
};

export default ProductCratedPage;

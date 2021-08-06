import "./productpage.css";
import ProductGallery from "../../components/productGallery/productGallery";
import ProductsList from "../../components/comp/product.json";
import ProductSheet from "../../components/productsheet/productSheet";
import Roll from "../../components/roll/roll";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { API_ROOT } from "../../utils/apiHost/apiHost";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const history = useHistory();

  useEffect(() => {
    fetch(`${API_ROOT}products/${id}`)
      .then((response) => {
        if (response.status != 200) {
          //corregir !=
          throw "Products couldn't be found. Check the id!"; // CORREGIR, espera lanzar un error
        }
        return response.json();
      })
      .then((json) => setProduct(json))
      .catch((error) => {
        console.log(error);
        history.push("/");
      });
  }, [id]);
  return (
    <div>
      <div className="productContainer">
        <Breadcrumbs /> 
        {
          <ProductGallery
            img={product?.images}
          /> /*//TODO: URLimages={product.images} para pasar las imagenes desde productGallery */
        }
        {product && (
          <ProductSheet
            title={product.name}
            description={product.description}
            initprice={product.currentPrice}
            // iduser={product.owner.name}
            img={product.images}
            rating={ProductsList[5].rating} //TODO: cuando exista el rating de user, añadirlo aquí (y popular en back)
          />
        )}
        <div className="rollproduct_main">
          <div className="rollproductContainer">
            <Roll title="Artículos similares" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductPage;

import "./productGallery.css";
import ProductsList from "../comp/product.json";
import GalleryImage from "../galleryimage/galleryImage";
import { useState } from "react";

const ProductGallery = ({ img }) => {
  const [images, setImages] = useState({ img }); //Use or remove setImages
  console.log(img);
  return (
    <div className="galleryContainer">
      <div className="imgMasterContainer">
        <img
          className="principalImage"
          alt="producto"
          src={img && img[0]}
        ></img>
      </div>
      <div classname="mosaicImage">
        <div className="rowContainerOne">
          {img && img.slice(1, 3).map((img) => <GalleryImage img={img} />)}
        </div>
        <div className="rowContainerTwo">
          {img && img.slice(3, 5).map((img) => <GalleryImage img={img} />)}
        </div>
      </div>
    </div>
  );
};
export default ProductGallery;

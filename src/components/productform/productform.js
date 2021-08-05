import { useForm } from "react-hook-form";
import PlusIcon from "../../assets/plusIcon.png";
import ButtonProductForm from "../buttonproductform/buttonproductform";
import "./productform.css";
import React, { useState, useEffect, useRef } from "react";
import CatSelector from "../categoriesselector/catselector";

const ProductForm = () => {
  const [imageArray, setImageArray] = useState([]);
  const [category, setCategory] = useState([]);

  const AuctionFormValues = {
    name: String, //product
    description: String, //product
    images: String,
    shippingFee: Number,
    owner: String, //sacar usuario;
    categoryId: String,
    usersFavs: [],
    createdAt: Date,
    updateAt: Date.now,
    startingPrice: Number,
  };

  const submitImage = async (image) => {
    const url = "https://api.cloudinary.com/v1_1/dnktf2sol/image/upload";
    const uploadPreset = "unsigned";
    const cloudinaryFolder = "egulf";

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", uploadPreset);
    formData.append("folder", cloudinaryFolder);

    const options = { method: "POST", body: formData };

    const response = await fetch(url, options);
    const json = await response.json();
    return json;
  };
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm(AuctionFormValues);

  let imgUrls = [];
  console.log(imgUrls);

  const onSubmit = async (data) => {
    for (const img of imageArray) {
      const image = await submitImage(img);
      imgUrls.push(image.secure_url);
      console.log("This is length: " + imgUrls.length);
    }

    setValue("images", imgUrls);
    setValue("categoryId", category);

    console.log("showing form data");
    console.log(data);
    const jsondata = JSON.stringify(data);
    if (Object.keys(errors).length !== 0) {
      alert(JSON.stringify(errors));
    } else {
      fetch("http://localhost:5001/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: jsondata,
      })
        .then((res) => res.json())
        /* .then((json) => {
          localStorage.setItem("token", json); 
        })*/
        .catch((errors) => console.log(JSON.stringify(errors)));
    }
  };
  const handleUploadImage = (image) => {
    setImageArray([image, ...imageArray]);
  };

  const handleCategory = (category) => {
    setCategory(category);
  };
  console.log(watch());

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="main_container1">
          <img className="plus_icon" src={PlusIcon} alt="icon-plus" />
          <p className="principal_title"> Vende un nuevo producto</p>
          <CatSelector getCategory={handleCategory} />
        </div>

        <div className="product_container2">
          <p className="product_details_title">Detalles del producto</p>
          <input
            className="first_box"
            type="text"
            placeholder="Nombre del producto"
            {...register("name", { required: true })}
          ></input>
          {errors.name && <span>Campo requerido!</span>}
          <input
            className="second_box"
            type="text"
            placeholder="Descripción del producto"
            {...register("description", { required: true })}
          ></input>
          {errors.description && <span>Escribe una breve descripción.</span>}
        </div>

        <div className="product_container3">
          <p className="product_details_title">Subasta y envío</p>
          <input
            className="third_box"
            type="text"
            placeholder="Precio de salida         €"
            {...register("initprice", { required: true })}
          ></input>
          <input
            className="fourth_box"
            type="date"
            placeholder="Fecha de inicio de la subasta"
            {...register("createdAt", { required: true })}
          ></input>
          <input
            className="fifth_box"
            type="text"
            placeholder="Tarifa de envio           €"
            {...register("shippingFee", { required: true })}
          ></input>
        </div>
        <div className="product_container4">
          <div>
            <p className="product_details_title">Imágenes del producto</p>
          </div>

          <div className="container_img_picker">
            <ButtonProductForm getImage={handleUploadImage} />
            <ButtonProductForm getImage={handleUploadImage} />
            <ButtonProductForm getImage={handleUploadImage} />
            <ButtonProductForm getImage={handleUploadImage} />
          </div>
        </div>
      </div>
      <input
        className="_button_submit"
        type="submit"
        value="Submit"
        //{...register}
      />
    </form>
  );
};

export default ProductForm;

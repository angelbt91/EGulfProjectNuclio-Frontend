import React from "react";
import PlusIcon from "../../assets/plusIcon.png";

import "./productform.css";

function ProductForm() {
  return (
    <div>
      <div className="main_container1">
        <img className="plus_icon" src={PlusIcon} alt="icon-plus" />
        <p className="principal_title"> Vende un nuevo producto</p>

        <div className="product_container1">
          <select className="form_main_category">
            <option>Categoria Principal</option>
          </select>
          <select className="form_subcategories1">
            <option>1.Subcategorias</option>
          </select>
          <select className="form_subcategories2">
            <option>2.Subcategorias</option>
          </select>
          <select className="form_subcategories3">
            <option>3.Subcategorias</option>
          </select>
          <p className="paragraph">
            No encuentras la subcategoría perfecta para tu producto?
            <button className="button">Créala</button>
          </p>
        </div>
      </div>

      <div className="product_container2">
        <p className="product_details_title">Detalles del producto</p>
        <input
          className="first_box"
          type="text"
          placeholder="Nombre del producto"
        ></input>
        <input
          className="second_box"
          type="text"
          placeholder="Descripción del producto"
        ></input>
      </div>

      <div className="product_container3">
        <p className="product_details_title">Subasta y envío</p>
        <input
          className="third_box"
          type="text"
          placeholder="Precio de salida         €"
        ></input>
        <input
          className="fourth_box"
          type="text"
          placeholder="Fecha de inicio de la subasta"
        ></input>
        <input
          className="fifth_box"
          type="text"
          placeholder="Tarifa de envio           €"
        ></input>
      </div>
      <div className="product_container4">
        <p className="product_details_title">Imágenes del producto</p>

        <input className="sixth_box" type="text" placeholder="+"></input>
        <input className="seventh_box" type="text" placeholder="+"></input>
        <input className="eighth_box" type="text" placeholder="+"></input>
        <input className="ninth_box" type="text" placeholder="+"></input>
        <input className="tenth_box" type="text" placeholder="+"></input>
      </div>
    </div>
  );
}

export default ProductForm;

import React from "react";
import PlusIcon from "../../assets/plusIcon.png";
import "./productform.css";
import { useState, useEffect, useRef } from "react";

const ProductForm = () => {
  const [selectedCategoriers, setSelectedCategories] = useState([]);
  const reference = useRef();

  const CategorySelector = ({ options, onChange }) => {
    if (options.length !== 0) {
      return (
        <select
          onChange={(e) => onChange(e.target.value)}
          className="form_main_category"
        >
          <option>Select the category</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      );
    } else {
      return (
        <input
          type="text"
          className="form_main_category"
          onChange={(e) => (reference.current = e.target.value)}
        ></input>
      );
    }
  };

  const CategoryCreation = () => {
    const categoryname = reference.current;
    console.log(categoryname);
    const parent = selectedCategoriers[selectedCategoriers.length - 1];
    fetch(`http://localhost:5001/categories/searchName/${parent}`, {
      method: "GET",
      "Content-Type": "application/json",
      headers: {},
    })
      .then((res) => res.json())
      .then((json) => {
        let category = json;
        const parentid = category[0]._id;
        fetch("http://localhost:5001/categories", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          body: JSON.stringify({
            name: categoryname,
            parentCategory: parentid
          }),
        })
          .then((res) => res.json())
          .catch((errors) => console.log(JSON.stringify(errors)));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const Subcategory = ({ selectedSubcategory, onChange }) => {
    const [subcateogryOptions, setSubcategoryOptions] = useState([]);
    // Haz el useEffect con el fetch a las categorias de la selectedSubcategory
    useEffect(() => {
      fetch(`http://localhost:5001/categories/name/${selectedSubcategory}`, {
        method: "GET",
        "Content-Type": "application/json",
        headers: {},
      })
        .then((res) => res.json())
        .then((json) => {
          let pushList = json;
          setSubcategoryOptions(pushList.map((category) => category.name));
        })
        .catch((error) => {
          console.error(error);
        });
    }, [selectedSubcategory]);

    return (
      <CategorySelector options={subcateogryOptions} onChange={onChange} />
    );
  };

  const MainCategories = ({ onChange }) => {
    const [subcateogryOptions, setSubcategoryOptions] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5001/categories/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          let categoriesfirst = [];
          for (const el in json) {
            if (!json[el]["parentCategory"]) {
              categoriesfirst.push(json[el]);
            }
          }
          setSubcategoryOptions(
            categoriesfirst.map((category) => category.name)
          );
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);

    return (
      <CategorySelector options={subcateogryOptions} onChange={onChange} />
    );
  };

  return (
    <div>
      <div className="main_container1">
        <img className="plus_icon" src={PlusIcon} alt="icon-plus" />
        <p className="principal_title"> Vende un nuevo producto</p>
        <div className="product_container1">
          <MainCategories
            key={"jajaxd"}
            onChange={(selected) => setSelectedCategories([selected])}
          />
          {selectedCategoriers.map((subcategory, index) => {
            return (
              <Subcategory
                selectedSubcategory={subcategory}
                onChange={(selected) => {
                  setSelectedCategories([
                    ...selectedCategoriers.slice(0, index + 1), //de esta forma cualquier cambio destruye lo que viene después,ya que cada paso carga subcategorias según la selección
                    selected,
                  ]);
                }}
              />
            );
          })}
          <p className="paragraph">
            No encuentras la subcategoría perfecta para tu producto?
            <button className="button" onClick={CategoryCreation}>
              Créala
            </button>
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
};

export default ProductForm;

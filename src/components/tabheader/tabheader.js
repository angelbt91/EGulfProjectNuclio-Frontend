import "./tabheader.css";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import TabSubHeader from "../tabsubheader/tabsubheader";

const TabHeader = () => {
  const [categories, setCategories] = useState();
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:5001/categories`)
      .then((response) => response.json())
      .then(
        (json) => {
          if (json.length < 1) return;
          const filteredCategories = json
            .map((category) => {
              const isCategoryParent =
                category.parentCategory && category.parentCategory !== "";
              return (
                !isCategoryParent && { name: category.name, id: category._id }
              );
            })
            .filter((isCategoryParent) => !isCategoryParent == false);
          console.log(filteredCategories);

          const objeto = {};

          if (filteredCategories.length > 0) {
            filteredCategories.forEach((category) => {
              objeto[category.name] = [category.id];
            });
            console.log(objeto);
          }
          /*  const subcategoriesId = [];
          for (const categories in objeto) {
            const children = json.filter((subcategories) => {
              if (!subcategories.parentCategory) {
                return subcategoriesId.push(subcategories.paren);
              }
              console.log(subcategoriesId);
            });
            objeto[categories] = children;
          } */
          // recuperar de todas las categorías aquellas cuyo padre sea igual a "key"
        }
        /*  setCategories(json);
          console.log(json); */
      );
  }, []);

  return (
    <div className="_tabheadContainer">
      <div>
        <span onClick={() => history.push("/")}>PORTADA</span>
      </div>
      <div>
        <span onClick={() => history.push("/favouritePage/")}>FAVORITOS</span>
      </div>

      {categories &&
        categories.map((category) => {
          const parentsCategory =
            category.parentCategory && category.parentCategory !== "";

          return (
            !parentsCategory && (
              <div className="tab">
                <span id="notthediv">{category.name}</span>
              </div>
            )
          );
        })}

      {/* <div>
        <TabSubHeader />
      </div> */}
    </div>
  );
};

export default TabHeader;

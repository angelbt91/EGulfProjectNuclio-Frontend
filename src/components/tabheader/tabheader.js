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
      .then((json) => {
        const filteredCategories = {};
        const filteredSubcategories = {};
        const filter = json.forEach((category) => {
          const hasCategoryParent =
            category.parentCategory && category.parentCategory !== "";
          if (!hasCategoryParent) {
            return (filteredCategories[category.name] = [category._id]);
          } else {
            return (filteredSubcategories[category.name] = [
              category.parentCategory,
            ]);
          }
        });
        let finalCategories = {};
        Object.keys(filteredCategories).forEach((category) => {
          const categoryToSearch = filteredCategories[category][0];
          console.log(categoryToSearch);
          const subcategories = Object.keys(filteredSubcategories).filter(
            (subcategory) =>
              filteredSubcategories[subcategory][0] === categoryToSearch
          );
          finalCategories[category] = subcategories;
        });
        setCategories(finalCategories);
      });
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

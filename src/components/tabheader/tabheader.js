import "./tabheader.css";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import TabSubHeader from "../tabsubheader/tabsubheader";
const agregateCategoriesAndSubcategories = (categoryList) => {
  const filteredCategories = {};
  const filteredSubcategories = {};
  categoryList.forEach((category) => {
    const hasCategoryParent =
      category.parentCategory && category.parentCategory !== "";
    if (!hasCategoryParent) {
      return (filteredCategories[category.name] = [category._id]);
    } else {
      return (filteredSubcategories[category.name] = [category.parentCategory]);
    }
  });
  console.log(filteredCategories);
  console.log(filteredSubcategories);
  let finalCategories = {};
  Object.keys(filteredCategories).forEach((category) => {
    const categoryToSearch = filteredCategories[category][0];
    const subcategories = Object.keys(filteredSubcategories).filter(
      (subcategory) =>
        filteredSubcategories[subcategory][0] === categoryToSearch
    );
    finalCategories[category] = subcategories;
  });
  console.log(finalCategories);
  return finalCategories;
};
const TabHeader = ({ id }) => {
  const [categories, setCategories] = useState();
  const history = useHistory();
  const [selectedCategory, setSelectedCategory] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5001/categories`)
      .then((response) => response.json())
      .then((json) => {
        setCategories(agregateCategoriesAndSubcategories(json));
      });
  }, []);
  return (
    <div>
      <div
        onMouseLeave={() => setSelectedCategory(null)}
        className="_headContainer"
      >
        <div className="_tabheadContainer">
          <span onClick={() => history.push("/")}>PORTADA</span>
        </div>
        <div className="_tabheadContainer">
          <span onClick={() => history.push("/favouritePage")}>FAVORITOS</span>
        </div>
        {categories &&
          Object.keys(categories).map((category) => {
            return (
              <div
                className="_tabheadContainer"
                onMouseEnter={() => setSelectedCategory(category)}
              >
                <span>{category}</span>
              </div>
            );
          })}
        {selectedCategory && (
          <div>
            <TabSubHeader
              subcategories={
                categories &&
                categories[selectedCategory] &&
                categories[selectedCategory].map((subcategory) => {
                  console.log(subcategory);
                  return (
                    <div
                      className="_tabSubheadContainer"
                      onClick={() => history.push("/searchpage/" + id)}
                    >
                      {subcategory}
                    </div>
                  );
                })
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default TabHeader;

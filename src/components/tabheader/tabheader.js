import "./tabheader.css";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import TabSubHeader from "../tabsubheader/tabsubheader";
const agregateCategoriesAndSubcategories = (categoryList) => {
  return categoryList
      .filter(category => !category.parentCategory)
      .map(parentCategory => ({name: parentCategory.name, id: parentCategory._id, subcategories: []}))
      .map(parentCategory => {
        const childs = [];

        for (const category of categoryList) {
          const categoryIsChild = (category.parentCategory && category.parentCategory === parentCategory.id);
          if (categoryIsChild) childs.push({name: category.name, id: category._id});
        }

        parentCategory.subcategories.push(...childs);
        return parentCategory;
      });
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

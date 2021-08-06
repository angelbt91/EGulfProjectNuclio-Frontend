import "./tabheader.css";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import TabSubHeader from "../tabsubheader/tabsubheader";
import {Link} from "react-router-dom";

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
          categories.map((category) => {
            return (
              <div
                className="_tabheadContainer"
                onMouseEnter={() => setSelectedCategory(category)}
              >
                <span>{category.name}</span>
              </div>
            );
          })}
        {selectedCategory && (
          <div>
              <TabSubHeader
                  subcategories={
                      selectedCategory.subcategories.map((subcategory) => {
                          return (
                              <div
                                  className="_tabSubheadContainer"
                              >
                                  <Link to={"/searchpage/" + subcategory.id}>{subcategory.name}</Link>
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

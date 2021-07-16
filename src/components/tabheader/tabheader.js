import "./tabheader.css";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import TabSubHeader from "../tabsubheader/tabsubheader";

const TabHeader = ({ subcategories }) => {
  const [categories, setCategories] = useState();
  const history = useHistory();
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5001/categories`)
      .then((response) => response.json())
      .then((json) => {
        const filteredCategories = {};
        const filteredSubcategories = {};
        json.forEach((category) => {
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
    <div>
      <div>
        <div className="_tabheadContainer">
          <div className="tab">
            <span onClick={() => history.push("/")}>PORTADA</span>
          </div>
          <div className="tab">
            <span onClick={() => history.push("/favouritePage")}>
              FAVORITOS
            </span>
          </div>
          <div onMouseLeave={() => setIsShown(false)}>
            <div>
              <div onMouseEnter={() => setIsShown(true)} className="tab">
                {categories &&
                  Object.keys(categories).map((category) => {
                    return (
                      <div>
                        <span>{category}</span>
                      </div>
                    );
                  })}

                {/*  .forEach((key) => {
                  return <span>{key.name}</span>;
                })} */}

                {console.log(categories)}
              </div>
            </div>
          </div>
          {isShown && (
            <div className="_tabSubheadContainer">
              <TabSubHeader
                subcategories={
                  categories &&
                  Object.values(categories).map((subcategory) => {
                    return subcategory;
                  })
                }
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabHeader;

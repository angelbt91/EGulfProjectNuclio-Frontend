import "./tabheader.css";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import TabSubHeader from "../tabsubheader/tabsubheader";

const TabHeader = () => {
  const [categories, setCategories] = useState();
  const history = useHistory();
  const [isShown, setIsShown] = useState(false);

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
                <span
                  onClick={() => history.push("/favouritePage")}
                  id="notthediv"
                >
                  {setCategories()}
                </span>
              </div>
            </div>
          </div>
          {isShown && (
            <div className="_tabSubheadContainer">
              <TabSubHeader />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabHeader;

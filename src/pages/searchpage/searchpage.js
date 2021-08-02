import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Card from "../../components/card/card";
import TabHeader from "../../components/tabheader/tabheader";
import "./searchpage.css";
import ReactPaginate from "react-paginate";
const SearchPage = () => {
  const [isProductSearched, setIsProductSearched] = useState();
  const { id } = useParams();

  useEffect(() => {
    //ESTO EMPEZARÁ CUANDO ALGUIEN HAGA CLIC EN UNA CATEGORÍA!!!! ONCLICK HISTORYPUSH EN TABHEADER
    fetch(`http://localhost:5001/categories/${id}/products`)
      .then((response) => {
        if (response.status != 200) {
          throw "Sorry! something went wrong";
        }
        return response.json();
      })
      .then((json) => setIsProductSearched(json))

      .catch((error) => {});
  }, []);
  console.log(isProductSearched);

  const [pageNumber, setPageNumber] = useState(0); //in which page we are
  const productPerPage = 12;
  const pagesVisited = pageNumber * productPerPage;

  const displayProducts =
    isProductSearched &&
    isProductSearched.map((product) => {
      return (
        <div className="card">
          <Card
            img={product.images[0]}
            name={product.name}
            initprice={product.currentPrice}
            nameUser={product.owner?.name}
          />
        </div>
      );
    });
  const pageCount = Math.ceil(
    isProductSearched && isProductSearched.length / productPerPage
  );
  const pageChange = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div>
      <TabHeader />
      <div className="cardsContainer">
        {displayProducts}
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={pageChange}
          containerClassName={"paginationContainer"}
          pageClassName={"pageNumber"}
          previousLinkClassName={"previousButton"}
          nextLinkClassName={"nextButton"}
          activeClassName={"paginationActive"}
        />
        {/* {isProductSearched &&
          isProductSearched.map((product) => {
            return (
              <div className="card">
                <Card
                  images={product.images}
                  name={product.name}
                  initprice={product.startPrice}
                  id={product._id}
                  nameUser={product.owner}
                />
              </div>
            );
          })} */}
      </div>
      {/*  <div>
        {isProductSearched &&
          isProductSearched
            .map((product) => product)
            .filter((product) => {
              console.log(isProductSearched);
              if (product.initprice < 5) {
                return "IT'S cheap!!";
              } else {
                return "sorry";
              }
            })}
      </div> */}
    </div>
  );
};

export default SearchPage;

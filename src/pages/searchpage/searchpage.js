import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Card from "../../components/card/card";
import TabHeader from "../../components/tabheader/tabheader";
import "./searchpage.css";
import ReactPaginate from "react-paginate";
import { API_ROOT } from "../../utils/apiHost/apiHost";

const SearchPage = ({ index }) => {
  const [isProductSearched, setIsProductSearched] = useState();
  const { id } = useParams();
  const [max, setIsMax] = useState(0);
  const [min, setIsMin] = useState(0);
  console.log(max);

  const params = min && max ? `?minPrice=${min}&maxPrice=${max}` : ``;

  useEffect(() => {
    fetch(`${API_ROOT}categories/${id}/products` + params)
      .then((response) => {
        if (response.status != 200) {
          throw "Sorry! something went wrong";
        }
        return response.json();
      })
      .then((json) => setIsProductSearched(json))

      .catch((error) => {});
  }, [id]);

  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 12;
  const pagesVisited = pageNumber * productPerPage;
  const pageCount = Math.ceil(
    isProductSearched && isProductSearched.length / productPerPage
  );
  const pageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayProducts =
    isProductSearched &&
    isProductSearched.map((product) => {
      return (
        <div className="card">
          <Card
            key={product._id}
            img={product.images[0]}
            name={product.name}
            initprice={product.currentPrice}
            id={product._id}
            nameUser={product.owner && product.owner.name}
          />
        </div>
      );
    });

  return (
    <div>
      <div>
        <div className="filterContainer">
          <h3>Price</h3>
          <p className="range">Range</p>
          <div className="priceContainer">
            <form>
              <div className="minPriceContainer">
                Min
                <input
                  type="text"
                  className="minPrice"
                  onChange={(e) => setIsMin(e.target.value)}
                />
              </div>
              <div className="maxPriceContainer">
                Max
                <input
                  type="text"
                  className="maxPrice"
                  onChange={(e) => setIsMax(e.target.value)}
                />
              </div>
              <button className="filterButton">Apply filter</button>
            </form>
          </div>
        </div>
      </div>
      <TabHeader />
      <div className="cardsContainer">
        {displayProducts}
        <div>
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
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

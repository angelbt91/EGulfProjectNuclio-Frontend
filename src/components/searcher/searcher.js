import "./searcher.css";
import SearchIcon from "../../assets/lupita.png";

const Searcher = () => {
  return (
    <div className="_searcherContainer">
      <div className="_searchContainer">
        <input type="text" placeholder="Buscar cualquier artículo" />
        <button type="submit">
          <img src={SearchIcon} alt="searchButton" />
        </button>
      </div>
      <button type="submit">
        <span>BUSCAR</span>
      </button>
    </div>
  );
};

export default Searcher;

import './searcher.css'
import Lupita from '../../assets/lupita.png';

const Searcher = () => {
    return(
        <div className= "_searcherContainer">
            <div className= "_searchContainer" >
                <input type = "text" placeholder="Buscar cualquier artículo"></input>
                <button type = "submit"><img src={Lupita}></img></button>
            </div>
            <button type = "submit"><span>BUSCAR</span></button>
        </div>
    )
}

export default Searcher;
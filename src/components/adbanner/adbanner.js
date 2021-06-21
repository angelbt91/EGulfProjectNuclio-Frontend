import './adbanner.css';
import Anunsio from '../../assets/anuncio.png';

const AdBanner = () => {
    return (
        <div className="_adContainer">
            <img src={Anunsio} alt=""></img>
            <span>Cada semana, nuevas ofertas</span>
        </div>
    )
}

export default AdBanner;
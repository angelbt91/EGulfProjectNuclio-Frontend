import './logo.css'
import Imagen from '../../assets/logoimage.png'

const Logo = () => {
    return(
        <div className="_logoContainer" >
            <img src={Imagen} alt="eGulf"/>
        </div>
    )
}

export default Logo;
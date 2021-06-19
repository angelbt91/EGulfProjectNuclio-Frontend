import './notifications.css'
import Campana from '../../assets/campana.png';

const Notifications = () =>{
    return(
        <div className = "_notifContainer">
            <button type="submit"><img src={Campana} alt=""></img></button>
            <span class="dot"></span>
        </div>
    );
}

export default Notifications;

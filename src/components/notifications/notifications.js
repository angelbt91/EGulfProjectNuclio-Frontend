import "./notifications.css";
import Bell from "../../assets/campana.png";

const Notifications = () => {
  return (
    <div className="_notifContainer">
      <button type="submit">
        <img src={Bell} alt="" />
      </button>
      <span className="dot" />
    </div>
  );
};

export default Notifications;

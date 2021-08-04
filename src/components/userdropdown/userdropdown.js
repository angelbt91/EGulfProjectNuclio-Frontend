import "./userdropdown.css";
import UserAvatar from "../../assets/UserAvatar.png";
import { useState } from "react";
import {
  Link,
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

const UserDropdown = ({ user }) => {
  const history = useHistory();
  const url = "/me/mybidspage";
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <Router>
      <div className="userDropdown_container">
        <div
          className="userDropdown_anchor"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <img
            src={UserAvatar}
            alt="userPicture"
            className="userAvatar_container"
          />
        </div>
        {showDropdown && (
          <div className="userDropdown_items">
            <Link to={url} onClick={() => history.push("/")}>
              <div className="dropdown_item">Home</div>
            </Link>
            <Link to={url} onClick={() => history.push("/me/mybidspage")}>
              <div className="dropdown_item">My bids</div>
            </Link>
            <div className="dropdown_item">Log out</div>
          </div>
        )}
      </div>
    </Router>
  );
};
export default UserDropdown;

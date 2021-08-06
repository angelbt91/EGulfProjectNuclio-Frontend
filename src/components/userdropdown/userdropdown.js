import "./userdropdown.css";
import marcianito from "../../assets/marcianito.jpeg";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { API_ROOT } from "../../utils/apiHost/apiHost";

const UserDropdown = ({ user }) => {
  const history = useHistory();

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="userDropdown_container">
      {localStorage.getItem("token") !== "" && (
        <div
          className="userDropdown_anchor"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <img
            src={marcianito}
            alt="userPicture"
            className="userAvatar_container"
          />
        </div>
      )}
      {showDropdown && (
        <div className="userDropdown_items">
          <div className="dropdown_item" onClick={() => history.push("/")}>
            Home
          </div>

          <div
            className="dropdown_item"
            onClick={() => history.push("/me/mybidspage")}
          >
            My bids
          </div>

          <div
            className="dropdown_item"
            onClick={() => {
              localStorage.setItem("token", "");
              history.push("/Login");
            }}
          >
            Log out
          </div>
        </div>
      )}
    </div>
  );
};
export default UserDropdown;

import "./userdropdown.css";
import UserAvatar from "../../assets/UserAvatar.png";
import { useState } from "react";
const UserDropdown = ({ user }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
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
          <div className="dropdown_item">Profile</div>
          <div className="dropdown_item">My bids</div>
          <div className="dropdown_item">Log out</div>
        </div>
      )}
    </div>
  );
};
export default UserDropdown;

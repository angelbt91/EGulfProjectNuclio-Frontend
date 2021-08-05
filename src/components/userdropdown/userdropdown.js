import "./userdropdown.css";
import UserAvatar from "../../assets/UserAvatar.png";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { API_ROOT } from "../../utils/apiHost/apiHost";

const UserDropdown = ({ user }) => {
  const history = useHistory();

  const [showDropdown, setShowDropdown] = useState(false);

  /*  useEffect(() => {
    fetch(`${API_ROOT}users/userId`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.token,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then(() => {});
  }, []);
 */
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
              history.push("/");
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

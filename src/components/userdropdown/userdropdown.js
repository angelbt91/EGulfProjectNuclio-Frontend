import "./userdropdown.css";
import marcianito from "../../assets/marcianito.jpeg";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { API_ROOT } from "../../utils/apiHost/apiHost";

const UserDropdown = ({ user }) => {
  const history = useHistory();
  // const [refresh, setRefresh] = useState();
  const [showDropdown, setShowDropdown] = useState(false);

  // setRefresh(localStorage.getItem("token"));

  /* const probeToken = () => {
    if (token === "") {
      setRefresh(false);
    } else {
      setRefresh(true);
    }
  }; */

  /* useEffect(() => {
    window.location.reload();
  }, [refresh]); */

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

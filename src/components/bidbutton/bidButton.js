import "./bidButton.css";
import { useHistory } from "react-router-dom";

const BidButton = () => {
  const history = useHistory();
  return (
    <button
      className="bidButtonProduct"
      onClick={() => {
        if (localStorage.getItem("token") === "") {
          history.push("/login");
        }
      }}
    >
      PUJAR
    </button>
  );
};
export default BidButton;

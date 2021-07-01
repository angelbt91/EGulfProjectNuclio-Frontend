import "./logo.css";
import LogoImg from "../../assets/logoimage.png";
import { useHistory } from "react-router";

const Logo = () => {
  const history = useHistory();
  return (
    <div className="_logoContainer">
      <img
        src={LogoImg}
        alt="eGulf"
        onClick={() => {
          history.push("/");
        }}
      />
    </div>
  );
};

export default Logo;

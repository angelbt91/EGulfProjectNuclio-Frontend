import "./logo.css";
import LogoImg from "../../assets/logoimage.png";

const Logo = () => {
  return (
    <div className="_logoContainer">
      <img src={LogoImg} alt="eGulf" />
    </div>
  );
};

export default Logo;

import "./footer.css";
import Logo from "../logo/logo";
import InstagramLogo from "./../../assets/instagram.svg";
import FacebookLogo from "./../../assets/facebook.svg";
import TwitterLogo from "./../../assets/twitter.svg";
import YouTubeLogo from "./../../assets/youtube.svg";

const Footer = () => {
  return (
    <footer>
      <hr />
      <div className="logoContainer">
        <Logo />
      </div>

      <ul className="nav-links">
        <li>
          <a href="http://localhost:3000/">Comprar</a>
        </li>
        <li>
          <a href="http://localhost:3000/">Vender</a>
        </li>
        <li>
          <a href="http://localhost:3000/">Contactar con eGulf</a>
        </li>
        <li>
          <a href="http://localhost:3000/">Acerca de eGulf</a>
        </li>
        <li>
          <a href="http://localhost:3000/">Politica de Privacidad</a>
        </li>
      </ul>
      <hr />
      <div className="copyright-social-container">
        <p>&copy; 2020 Landify UI Kit. All rights reserved</p>
        <ul className="social">
          <li>
            <a href="https://www.instagram.com">
              <img
                src={InstagramLogo}
                className="instagram-logo"
                alt="Instagram Logo"
              />
            </a>
          </li>
          <li>
            <a href="https://es-es.facebook.com">
              <img
                src={FacebookLogo}
                className="facebook-logo"
                alt="Facebook Logo"
              />
            </a>
          </li>
          <li>
            <a href="https://twitter.com">
              <img
                src={TwitterLogo}
                className="twitter-logo"
                alt="Twitter Logo"
              />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com">
              <img
                src={YouTubeLogo}
                className="youtube-logo"
                alt="YouTube Logo"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

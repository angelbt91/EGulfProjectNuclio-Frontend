import "./header.css";
import Logo from "../logo/logo";
import Searcher from "../searcher/searcher";
import Notifications from "../notifications/notifications";
import ShoppingCart from "../shoppingCart/shoppingCart";
import LoginButton from "../botonlogin/botonlogin";
import UserDropdown from "../userdropdown/userdropdown";

const Header = () => {
  return (
    <div className="_headerContainer">
      <div className="_leftHeader">
        <Logo />
        <Searcher />
      </div>
      <div className="_rightHeader">
        <LoginButton />
        <Notifications />
        <UserDropdown />
      </div>
    </div>
  );
};

export default Header;

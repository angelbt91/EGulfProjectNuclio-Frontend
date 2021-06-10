import './header.css';
import Logo from '../logo/logo';
import Searcher from '../searcher/searcher';

const Header = () => {
    return(
        <div className = "_headerContainer">
            <div className = "_leftHeader">
                <Logo />
                <Searcher />
            </div>
        </div>
    )
}

export default Header;
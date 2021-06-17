import './mainpage.css';
import Header from '../../components/header/header';
import TabHeader from '../../components/tabheader/tabheader';
import AdBanner from '../../components/adbanner/adbanner';
import Roll from '../../components/roll/roll';

const MainPage = () => {
    return(
        <div className="App">
            <Header />
            <hr className="_separatorLine1" size="1" width="20000 px" color="#D9D9D9"></hr>
            <TabHeader />
            <hr className="_separatorLine2" size="1" width="20000 px" color="#D9D9D9"></hr>
            <AdBanner />
            <Roll tittle="Anuncios"/>
            <Roll tittle="Televisores"/>
        </div>
    )
}

export default MainPage;
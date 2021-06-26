import "./mainpage.css";
import Header from "../../components/header/header";
import TabHeader from "../../components/tabheader/tabheader";
import AdBanner from "../../components/adbanner/adbanner";
import Roll from "../../components/roll/roll";
import Footer from "../../components/footer/footer";

const MainPage = () => {
  return (
    <div className="App">
      <Header />
      <hr className="_separatorLine1" size="1" width="99.9%" color="#D9D9D9" />
      <TabHeader />
      <hr className="_separatorLine2" size="1" width="99.9%" color="#D9D9D9" />
      <AdBanner />
      <Roll title="Anuncios" />
      <Roll title="Televisores" />
      <Footer />
    </div>
  );
};

export default MainPage;

import "./mainpage.css";
import TabHeader from "../../components/tabheader/tabheader";
import AdBanner from "../../components/adbanner/adbanner";
import Roll from "../../components/roll/roll";
//import SubHeader from "../../components/tabheader/subheader/subheader";

const MainPage = () => {
  return (
    <div className="App">
      <TabHeader />
      {/* <SubHeader /> */}
      <hr className="_separatorLine2" size="1" width="99.9%" color="#D9D9D9" />
      <AdBanner />
      <Roll title="Anuncios" />
      <Roll title="Televisores" />
    </div>
  );
};

export default MainPage;

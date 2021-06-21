import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from './pages/loginpage/loginpage';
import MainPage from './pages/mainpage/mainpage';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="_appBody">
      <Header />
      <hr className="_separatorLine1" size="1" width="20000 px" color="#D9D9D9"></hr>
      <TabHeader />
      <hr className="_separatorLine2" size="1" width="20000 px" color="#D9D9D9"></hr>
      <AdBanner />
      <Roll tittle="Anuncios"/>
      <Roll tittle="Televisores/>
      <Footer />
    </div>
  );
}

export default App;

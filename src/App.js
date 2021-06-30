import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import LoginPage from "./pages/loginpage/loginpage";
import MainPage from "./pages/mainpage/mainpage";
import ProductPage from "./pages/productpage/productpage";
import Header from "./components/header/header";
import "./App.css";

function App() {
  return (
    <div className="_appBody">
      <Header />
      <hr className="_separatorLine1" size="1" width="99.9%" color="#D9D9D9" />
      <Router>
        <Switch>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/productPage">
            <ProductPage />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

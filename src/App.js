import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import LoginPage from "./pages/loginpage/loginpage";
import MainPage from "./pages/mainpage/mainpage";
import ProductPage from "./pages/productpage/productpage";

function App() {
  return (
    <div className="_appBody">
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

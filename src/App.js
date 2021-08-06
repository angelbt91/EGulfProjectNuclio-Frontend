import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Footer from "./components/footer/footer";
import LoginPage from "./pages/loginpage/loginpage";
import MainPage from "./pages/mainpage/mainpage";
import ProductPage from "./pages/productpage/productpage";
import Header from "./components/header/header";
import FavouritePage from "./pages/favouritepage/favouritepage";
// import CreateProductForm from "./pages/productformpage/productformpage";
import "./App.css";
import ProductFormPage from "./pages/productformpage/productformpage";
import SearchPage from "./pages/searchpage/searchpage";

import MyBidsPage from "./pages/mybidspage/mybidspage";
import ProductCratedPage from "./pages/productcreatedpage/productcreatedpage";
import Breadcrumbs from "./components/breadcrumbs/breadcrumbs";
import SignUpPage from "./pages/signuppage/signuppage";

function App() {
  return (
    <div className="_appBody">
      <Router>
        <Header />
        <hr
          className="_separatorLine1"
          size="1"
          width="99.9%"
          color="#D9D9D9"
        />
        <Switch>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/productpage/:id">
            <ProductPage />
          </Route>
          <Route exact path="/me/favorites">
            <FavouritePage />
          </Route>
          <Route exact path="/me/productcreatedpage/">
            <ProductCratedPage />
          </Route>
          <Route exact path="/productformpage">
            <ProductFormPage />
          </Route>
          <Route exact path="/searchpage/:id">
            <SearchPage />
          </Route>
          <Route exact path="/me/mybidspage">
            <MyBidsPage />
          </Route>
          <Route exact path="/signup">
            <SignUpPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

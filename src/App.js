import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
          <Route exact path="/Product/:id">
            <ProductPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

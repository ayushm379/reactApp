import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Aboutus from './screens/Aboutus/Aboutus';
import Cart from './screens/Cart';
import Contactus from './screens/Contactus';
import Home from './screens/Home/Home';
import Portfolio from './screens/Portfolio';
import Pricing from './screens/Pricing';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/aboutus">
            <Aboutus />
          </Route>
          <Route exact path="/contactus">
            <Contactus />
          </Route>
          <Route exact path="/pricing">
            <Pricing />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
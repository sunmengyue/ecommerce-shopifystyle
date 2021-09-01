import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => <Home {...routeProps} />}
        />
        <Route
          exact
          path="/products/:id"
          render={(routeProps) => <ProductDetail {...routeProps} />}
        />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </Router>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProudcts = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };
    fetchProudcts();
  }, []);
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => <Home {...routeProps} products={products} />}
        />
        <Route
          exact
          path="/products/:id"
          render={(routeProps) => (
            <ProductDetail {...routeProps} products={products} />
          )}
        />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </Router>
  );
}

export default App;

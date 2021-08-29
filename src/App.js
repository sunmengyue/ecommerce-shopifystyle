import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import productContext from './utils/productContext';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';

function App() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <productContext.Provider
      value={{
        showSearchBar,
        setShowSearchBar,
        products,
      }}
    >
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products/:id" component={ProductDetail} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </Router>
    </productContext.Provider>
  );
}

export default App;

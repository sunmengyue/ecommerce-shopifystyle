import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import productContext from './utils/productContext';
import Home from './pages/Home';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ProductInfo from './pages/ProductInfo';

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
      value={{ showSearchBar, setShowSearchBar, products }}
    >
      <Header />
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products/:id" component={ProductInfo} />
        </Switch>
      </Router>
    </productContext.Provider>
  );
}

export default App;

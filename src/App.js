import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/products/:id" component={ProductDetail} />
      <Route path="/cart/:id?" component={Cart} />
    </Router>
  );
};

export default App;

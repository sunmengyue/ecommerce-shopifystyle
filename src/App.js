import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/profile" component={Profile} />
      <Route path="/products/:id" component={ProductDetail} />
      <Route path="/cart/:id?" component={Cart} />
      <Route exact path="/" component={Home} />
    </Router>
  );
};

export default App;

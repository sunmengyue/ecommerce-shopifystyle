import React, { useState } from 'react';
import productContext from './utils/productContext';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductFeed from './components/ProductFeed';
import Footer from './components/Footer';

function App() {
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <productContext.Provider value={{ showSearchBar, setShowSearchBar }}>
      <div className="App">
        <Header />
        <Navbar />
        <Hero />
        <ProductFeed />
        <Footer />
      </div>
    </productContext.Provider>
  );
}

export default App;

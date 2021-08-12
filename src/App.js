import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductFeed from './components/ProductFeed';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Hero />
      <ProductFeed />
      <Footer />
    </div>
  );
}

export default App;

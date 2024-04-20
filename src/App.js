import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Products from './components/products/Products';
import About from './components/about/About';
import Contact from './components/Contact US/Contact';
import ProductDetal from './components/products/ProductDetal';

function App() {
  return (
    <div className="App">
       <Header/>
      
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/pro" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/con" element={<Contact />} />
        <Route path='/productdetal' element={<ProductDetal/>}/>
      
      </Routes>
    </div>
  );
}

export default App;

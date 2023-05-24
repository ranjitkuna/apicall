import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from './components/home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './components/about';
import Contact from './components/contact';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Nopage from './components/nopage';
import Apicall from './components/apicall';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar />
      <Routes>
      
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/apicall' element={<Apicall />}></Route>
        <Route path='*' element={<Nopage />}></Route>
     
      </Routes>

      <Footer />
      
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from './components/home';
import { BrowserRouter,Routes,Route, Form } from 'react-router-dom';
import About from './components/about';
import Contact from './components/contact';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Nopage from './components/nopage';
import Apicall from './components/apicall';
import Login from './components/login';
import Classcomp from './components/classcomp';
import Parent from './components/parent';


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
        <Route path='/login' element={<Login />}></Route>
        <Route path='/classcom' element={<Classcomp />}></Route>
        <Route path='/parent' element={<Parent />}></Route>
        <Route path='*' element={<Nopage />}></Route>
     
      </Routes>

      <Footer />
      
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;


import React from 'react'
  import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import Project from './Pages/Project';
import Services from './Pages/Services';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Signup from './Pages/Signup';
import Login from './Pages/Login';


function App() {  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/service' element={<Services/>}/>
        <Route exact path='/project' element={<Project/>}/>
        <Route exact path='/blog' element={<Blog/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

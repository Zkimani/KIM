// App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/pages/home/home';
//import About from './component/pages/about/about';

function App() {
 return (
    <Routes>
      <Route path='/' element= {<Home/>}/>
{/*       <Route path="about" element={<About/>}/>
 */}      
    </Routes>
  )}
export default App;
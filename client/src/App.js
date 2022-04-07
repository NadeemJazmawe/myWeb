import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import Header from './Pages/Header/Header';
import AboutMe from './Pages/AboutMe/AboutMe';
import Resume from './Pages/Resume/Resume';
import Contact from './Pages/Contact/Contact';
import Projects from './Pages/Project/Projects';
import SkillsAndAbilities from './Pages/SkillsAndAbilities/SkillsAndAbilities';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<AboutMe />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/skill+abilities' element={<SkillsAndAbilities />} />
        <Route path='/project' element={<Projects />} /> 
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

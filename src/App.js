import { SpeedInsights } from "@vercel/speed-insights/react";
import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home  from './components/Home/home';
import About from './components/About/about';
import Skills from './components/Skills/skills';
import Projects from './components/Projects/projects';
import Qualification from './components/Qualification/Qualification';
import Devs from './components/Devs/Devs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollUp from './components/ScrollUp/ScrollUp';
const App=() =>{
  return(
    <>
      <Header/>
      <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Qualification/>
      <Devs/>
      <Contact/>
      <Footer/>
      <ScrollUp/>
      <SpeedInsights />
      </main>
       
    </>
  )
} 
export default App;

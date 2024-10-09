import React from 'react'
import Home from './components/Home';
import Project from './components/Project';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import ReactPlayer from 'react-player'

function App() {
  return (
    <div className='bg-gray-100'>


      <Header />
      <Home />
      <Project/>
      <About />
      <Contact />
    </div>
  )
}

export default App
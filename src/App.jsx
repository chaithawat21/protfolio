import React from 'react'
import Home from './components/Home';
import Project from './components/Project';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Project />
        <About />
      </main>
      <footer>
        <Contact />
      </footer>
    </>
  )
}

export default App
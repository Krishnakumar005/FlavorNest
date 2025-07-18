import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
// import Contact from './pages/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Menu />
      <About />
      {/* <Contact /> */}
    </div>
  )
}

export default App

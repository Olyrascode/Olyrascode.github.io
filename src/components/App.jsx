import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import Home from '../pages/Home';
import Projets from '../pages/Projets';
import '../styles/style.css'
import Cv from '../pages/Cv';
import Contact from '../pages/Contact';


function App() {

  return (
<Router>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="Projets" element={<Projets />} />
       <Route path="Cv" element={<Cv />} />
       <Route path="Contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App

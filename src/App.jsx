
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Apropos from './components/pages/Apropos';
import Home from './components/pages/Home';
import PageError from './components/pages/PageError';
import Logements from './components/pages/Logements';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Logements/:id" element={<Logements />} />
        <Route path="Apropos" element={<Apropos />} />
        <Route path="*" element={<PageError />} />
      </Routes>
    </Router>
  );
}

export default App;

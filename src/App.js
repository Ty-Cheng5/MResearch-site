import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Research from './pages/Research';
import Resources from './pages/Resources';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import About from './pages/About';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
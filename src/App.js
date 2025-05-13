import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';


function App() {
  return (
    <Router>
    <div className="App">
      <Header />   
      <main className="Main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </main>
      </div>
    </Router>
  );
}

export default App;

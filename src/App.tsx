import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
import JaipurDirectory from './components/JaipurDirectory';
import LocationPage from './components/LocationPage';
import Contact from './components/Contact';

const Home = () => (
  <>
    <Banner />
    <About />
    <Testimonials />
    <FAQ />
  </>
);

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div className={isDarkMode ? 'dark' : ''}>
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/jaipur" element={<JaipurDirectory />} />
            <Route path="/jaipur/:location" element={<LocationPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
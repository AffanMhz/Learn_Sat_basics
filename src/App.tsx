import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Rasterization from './pages/Rasterization';
import SatelliteData from './pages/SatelliteData';
import MachineLearning from './pages/MachineLearning';
import QGIS from './pages/QGIS';
import ISROHackathon from './pages/ISROHackathon';
import Preparation from './pages/Preparation';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="pb-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rasterization" element={<Rasterization />} />
            <Route path="/satellite-data" element={<SatelliteData />} />
            <Route path="/machine-learning" element={<MachineLearning />} />
            <Route path="/qgis" element={<QGIS />} />
            <Route path="/isro-hackathon" element={<ISROHackathon />} />
            <Route path="/preparation" element={<Preparation />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

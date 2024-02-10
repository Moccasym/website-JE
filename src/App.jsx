import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CoreConcepts from './components/Section/CoreConcepts';
import CookieBanner from './components/CookieBanner';
import CommissionTable from './components/CommisionTable';
import Datenschutz from './components/Datenschutz'; // Import Datenschutz component
import Impressum from './components/Impressum'; // Import Impressum component

function App() {
  return (
    <BrowserRouter>
      <CookieBanner />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/datenschutz" element={<DatenschutzPage />} />
        <Route path="/impressum" element={<ImpressumPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const HomePage = () => (
  <>
    <Header />
    <Home />
    <CommissionTable />
    <main>
      <CoreConcepts />
    </main>
    <About />
    <Contact />
    <Footer />
  </>
);

const DatenschutzPage = () => (
  <>
    <Datenschutz />
    <Footer />
  </>
);

const ImpressumPage = () => (
  <>
    <Impressum />
    <Footer />
  </>
);

export default App;

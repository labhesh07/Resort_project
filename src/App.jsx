import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { useLenis } from './lib/lenis';
import { Navbar } from './components/site/Navbar';
import { Hero } from './components/site/Hero';
import { About } from './components/site/About';
import { Rooms } from './components/site/Rooms';
import { Amenities } from './components/site/Amenities';
import { Dining } from './components/site/Dining';
import { Attractions } from './components/site/Attractions';
import { Gallery } from './components/site/Gallery';
import { Testimonials } from './components/site/Testimonials';
import { Contact } from './components/site/Contact';
import { Footer } from './components/site/Footer';

function ResortHome() {
  useLenis();
  return (
    <div className="App grain relative" data-testid="resort-home">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Amenities />
        <Dining />
        <Attractions />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Toaster
        position="bottom-right"
        theme="dark"
        toastOptions={{
          style: {
            background: 'rgba(15,15,15,0.85)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(212,175,55,0.25)',
            color: '#FFFFF0',
            fontFamily: "'Outfit', sans-serif",
          },
        }}
      />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ResortHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

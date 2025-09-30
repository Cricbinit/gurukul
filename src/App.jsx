import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/shared/ScrollToTop';

import Navbar from './components/navbar/Navbar';
import Contact from './components/Contact/Contact';

// import Services from './components/Services/Services';
import About from './components/About/About';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';
// import Support from './components/Support/Support';
import Home from './components/Home/Home';
import ParentStories from './components/ParentStories/ParentStories';


const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
     <section
      id="main-app"
      className="w-full "
    > <Routes>
        {/* Uncomment when you add these components */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
         <Route path="/faq" element={<Faq />} />
        <Route path="/parent-stories" element={<ParentStories />} />
        {/* <Route path="/support" element={<Support />} /> */}
      </Routes>

    </section>
     
      <Footer />
    </Router>
  );
};

export default App;

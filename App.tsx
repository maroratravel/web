
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Membership from './pages/Membership';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import Blog from './pages/Blog';
import { LanguageProvider } from './contexts/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="filosofia" element={<About />} />
            <Route path="el-club" element={<Membership />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contacte" element={<Contact />} />
            <Route path="legal" element={<Legal />} />
          </Route>
        </Routes>
      </HashRouter>
    </LanguageProvider>
  );
};

export default App;

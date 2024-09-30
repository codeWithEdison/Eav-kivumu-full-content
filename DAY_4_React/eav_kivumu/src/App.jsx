import React from 'react'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Loyout from './pages/Loyout';

const App = () => {
  return (
    <BrowserRouter>
      <Loyout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Loyout>
    </BrowserRouter>
  );
}

export default App;

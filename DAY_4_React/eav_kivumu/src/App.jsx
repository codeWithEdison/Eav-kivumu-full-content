import React from 'react'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Loyout from './pages/Loyout';
import Others from './pages/Others';
import Music from './components/Music';
import Films from './components/Films';
import Form from './components/Form';
import Timer from './components/UseEffect';
import Context1 from './components/Context';
import { UserProvider } from './components/Context';
import Ref from './components/Ref';
import CalBack from './components/CalBack';
import Counter from './pages/Counter';
import Signin from './pages/Login';

const App = () => {
  return (

    <UserProvider>
    <BrowserRouter>
      <Loyout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Signin />} />
          
          <Route path="/other" element={<Others />} >
          <Route path="music" element={<Music />} />
          <Route path="films" element={<Films />} /> 
          </Route>
          <Route path="*" element={<Counter/>} />   
        </Routes>
      </Loyout>
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;

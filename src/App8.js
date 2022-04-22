import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';

function App8() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} exact={true} />
        <Route path="/about" element={<About />} />
        <Route path="/movie-detail" element={<Detail />} />
        {/* <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} />
        <Route path="/movie-detail" component={Detail} /> */}
      </Routes>
    </div>
  );
}

export default App8;

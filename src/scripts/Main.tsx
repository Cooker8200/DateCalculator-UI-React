import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DateCalculator from './dateCalculator/DateCalculator';
import Home from './Home';
import Mason from './mason/Mason';
import NotFound404 from './NotFound404';

const Main: React.FC = () => (
  <>
      <BrowserRouter basename="/home">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/date-calculator" element={<DateCalculator />} />
        <Route path="/mason" element={<Mason />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  </>
)

export default Main;

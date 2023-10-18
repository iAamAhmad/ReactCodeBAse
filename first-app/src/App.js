import React from 'react';
import './styles/app.css'
import Tailwind from './componenets/Tailwind';
import FirstComponent from './componenets/FirstComponent';
import ThirdComponent from './componenets/ThirdComponent';
import SecondComponent from './componenets/SecondComponent';
import ForthComponent from './componenets/ForthComponent';

import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tailwind />} />
        <Route path="/first" element={<FirstComponent />} />
        <Route path="second" element={<SecondComponent />} />
        <Route path="third" element={<ThirdComponent />} />
        <Route path="forth" element={<ForthComponent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
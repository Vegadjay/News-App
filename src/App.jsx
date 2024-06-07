import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from '../componants/Navbar.jsx';
import News from '../componants/News.jsx';

const App = ({ category = 'general' }) => {
  const [mode, setMode] = useState("light");
  const [modemsg, setModemsg] = useState("Enable Dark Mode");
  const [color, setTextcolor] = useState("black");

  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#212529';
      setModemsg("Enable Light Mode");
      setTextcolor("white");
    } else {
      setModemsg("Enable Dark Mode");
      document.body.style.backgroundColor = 'white';
      setMode('light');
      setTextcolor("black");
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} togglemode={toggleMode} togglemsg={modemsg} textcolor={color} />
        <Routes>
          <Route path="/" element={<News mode={mode} togglemode={toggleMode} textcolor={color} country="in" category={category} />} />
          <Route path="/sports" element={<News mode={mode} togglemode={toggleMode} textcolor={color} country="in" category="sports" />} />
          <Route path="/business" element={<News mode={mode} togglemode={toggleMode} textcolor={color} country="in" category="business" />} />
          <Route path="/entertainment" element={<News mode={mode} togglemode={toggleMode} textcolor={color} country="in" category="entertainment" />} />
          <Route path="/general" element={<News mode={mode} togglemode={toggleMode} textcolor={color} country="in" category="general" />} />
          <Route path="/health" element={<News mode={mode} togglemode={toggleMode} textcolor={color} country="in" category="health" />} />
          <Route path="/science" element={<News mode={mode} togglemode={toggleMode} textcolor={color} country="in" category="science" />} />
          <Route path="/technology" element={<News mode={mode} togglemode={toggleMode} textcolor={color} country="in" category="technology" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
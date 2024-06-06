import React, { useState } from 'react';
import Navbar from '../componants/Navbar.jsx';
import News from '../componants/News.jsx';
const App = () => {
  const [mode, useMode] = useState("light")
  const [modemsg, setmsgMode] = useState("Enable Dark Mode");
  const [color, setTextcolor] = useState("black")
  function toggleMode() {
    if(mode === "light") {
      useMode("dark");
      document.body.style.backgroundColor='#212529';
      setmsgMode("Enable Light Mode");
      setTextcolor("white");
    }
    else {
      setmsgMode("Enable Dark Mode");
      document.body.style.backgroundColor='white';
      useMode('light');
      setTextcolor("black");
    }
   }
  return (
    <>
      <Navbar mode={mode} togglemode={toggleMode} togglemsg={modemsg} textcolor={color}/>
      <News mode={mode} togglemode={toggleMode} textcolor={color}/>
    </>
  );
};

export default App;
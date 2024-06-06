import React, { useState } from 'react';
import Navbar from '../componants/Navbar.jsx';
import News from '../componants/News.jsx';
const App = () => {
  const [mode, useMode] = useState('light')
  function toggleMode() {
    if(mode == 'light') {
      useMode('dark');
    }
    else {
      useMode('light');
    }
   }
  return (
    <>
      <Navbar mode={mode} togglemode={toggleMode} />
      <News />
    </>
  );
};

export default App;
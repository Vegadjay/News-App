// App.jsx
import React, { useReducer, useRef, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import Navbar from '../componants/Navbar.jsx';
import News from '../componants/RenderingNews.jsx';

const App = ({ category = 'general' }) => {
  const [mode, setMode] = useState("light");
  const [modemsg, setModemsg] = useState("Enable Dark Mode");
  const [color, setTextcolor] = useState("black");
  const [progress, setProgress] = useState(0);
  const [border, setborderColor] = useState('black');
  const mode1 = useRef("light");

  function toggleMode() {
    if (mode1.current === "light") {
      setMode("dark");
      mode1.current = "dark";
      setModemsg("Disable Dark Mode");
      document.body.style.backgroundColor = "#121212";
      setTextcolor("white");
      setborderColor('black');
    } else {
      setMode('light');
      mode1.current = "light";
      setModemsg("Enable Dark Mode");
      document.body.style.backgroundColor = 'white';
      setTextcolor("black");
      setborderColor('white');
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} togglemode={toggleMode} togglemsg={modemsg} textcolor={color} />
        <LoadingBar
          color='#0000ff'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
          height={1}
          className="position-fixed top-0 start-0 end-0"
          style={{ height: '5px' }}
        />
        <div>
          <Routes>
            <Route path="/" element={<News setProgress={setProgress} mode={mode} togglemode={toggleMode} textcolor={color} country="us" category={category} bordercolor={border} />} />
            <Route path="/sports" element={<News setProgress={setProgress} mode={mode} togglemode={toggleMode} textcolor={color} country="us" category="sports" />} />
            <Route path="/business" element={<News setProgress={setProgress} mode={mode} togglemode={toggleMode} textcolor={color} country="us" category="business" />} />
            <Route path="/entertainment" element={<News setProgress={setProgress} mode={mode} togglemode={toggleMode} textcolor={color} country="us" category="entertainment" />} />
            <Route path="/general" element={<News setProgress={setProgress} mode={mode} togglemode={toggleMode} textcolor={color} country="us" category="general" />} />
            <Route path="/health" element={<News setProgress={setProgress} mode={mode} togglemode={toggleMode} textcolor={color} country="us" category="health" />} />
            <Route path="/science" element={<News setProgress={setProgress} mode={mode} togglemode={toggleMode} textcolor={color} country="us" category="science" />} />
            <Route path="/technology" element={<News setProgress={setProgress} mode={mode} togglemode={toggleMode} textcolor={color} country="us" category="technology" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
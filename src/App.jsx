// src/App.jsx
import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import LogoIntro from './components/LogoIntro';

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // After 4 seconds, show the main content
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!showContent ? <LogoIntro /> : <Home />}
    </>
  );
}

export default App;

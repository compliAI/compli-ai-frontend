// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './styles/theme';
// Make sure these components are properly imported
// If these are the components causing issues, ensure they're correctly exported
import GetStarted from './pages/GetStarted';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Make sure Home and GetStarted are valid React components */}
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<GetStarted />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;


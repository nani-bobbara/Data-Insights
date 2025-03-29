
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// We're just redirecting to the web-portal app for the root application
import WebApp from './projects/web-portal/src/App';

const App = () => {
  return (
    <Router>
      <WebApp />
    </Router>
  );
};

export default App;

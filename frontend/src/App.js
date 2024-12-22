import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageLayout from './components/PageLayout';  // Import PageLayout
import Home from './components/Home';  // Import your Home component

const App = () => {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />  {/* Home page route */}
          {/* You can add more routes here as needed */}
        </Routes>
      </PageLayout>
    </Router>
  );
};

export default App;

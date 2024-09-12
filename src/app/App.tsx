import React from 'react';
import { Header } from '@widgets/header';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routing';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes />
    </Router>
  );
};

export default App;

import React from 'react';
import Header from './component/Header';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Dashboard from './scenes/dashboard/index';
import Home from './scenes/dashboard/home';

function App() {
  const [theme, setTheme] = useState('light')

  return (
    <>
      <Header theme={theme} setTheme={setTheme}/>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home />}
          />
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
          <Route
            path="*"
            element={<Navigate to="/" />}
          />
        </Routes>
      </Router>
    </>
    );
}

export default App;

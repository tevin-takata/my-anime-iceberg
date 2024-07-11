import React from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Home.jsx';
import AboutMe from './AboutMe.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Route>
      </Routes>
    </Router>
)

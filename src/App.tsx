import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Therapist from './pages/Therapist';
import Popup from './pages/Popup';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-sky-50">
        <Routes>
          <Route path="/popup" element={<Popup />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="settings" element={<Settings />} />
            <Route path="therapist" element={<Therapist />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
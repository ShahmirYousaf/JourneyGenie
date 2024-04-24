import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'; 
import App from "./App";
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
// import reportWebVitals from './reportWebVitals';
import Navigation from './components/navigation/navigation'
import ScrollNav from './components/scroll-nav/scroll-nav'
import { BrowserRouter } from 'react-router-dom'
import App from './App';

ReactDOM.createRoot(
  document.getElementById('root')).render(
    <BrowserRouter>
      <App />
      <Navigation />
      <ScrollNav />
    </BrowserRouter>
);
// reportWebVitals(console.log);

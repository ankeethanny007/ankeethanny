import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import reportWebVitals from './reportWebVitals';
import Navigation from './components/navigation/navigation'
import ScrollNav from './components/scroll-nav/scroll-nav'
import { BrowserRouter } from 'react-router-dom'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Navigation />
      <ScrollNav />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
// reportWebVitals(console.log);

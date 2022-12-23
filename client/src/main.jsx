import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router, Route, Link, BrowserRouter } from 'react-router-dom';
import { CoinProvider } from './context/CoinContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <CoinProvider>
  <App/>
  </CoinProvider>
  </BrowserRouter>
  
    
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

import { ResultContextProvider } from './context/ResultContextProvider'

import './index.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResultContextProvider>
      <Router>
        <App />
      </Router>
    </ResultContextProvider>
  </React.StrictMode>
)

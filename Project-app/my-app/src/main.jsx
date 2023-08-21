import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Parent from './Parent.jsx'
import Child from './Child.jsx'
import Home from './Home.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Parent name = " ragu"></Parent>
    <Child name = "ragu"></Child>
    <Home name = " raguraman"></Home>
    
    
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './styles/index.scss'
import { App } from '.'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename='/AyaanMotionAcademy'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

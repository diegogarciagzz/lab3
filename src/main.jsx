import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Focus } from './Focus.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Focus />
  </StrictMode>,
)

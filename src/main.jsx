import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ClimaApp } from './ClimaApp'
import './style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ClimaApp/>
  </StrictMode>
)

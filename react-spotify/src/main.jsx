import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Spotify from'./Spotify.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Spotify />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Define a function to ensure the lord-icon elements are properly initialized
function initializeLordIcons() {
  // Wait for DOM content to be fully loaded
  document.addEventListener('DOMContentLoaded', () => {
    // If there's a lordicon initialize function available, call it
    if (window.lordIconElement) {
      window.lordIconElement.init();
    }
  });
}

// Initialize icons
initializeLordIcons();

// Create root
const root = createRoot(document.getElementById('root'));

// Render app
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

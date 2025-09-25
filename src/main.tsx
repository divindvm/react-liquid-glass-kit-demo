import React from 'react'
import ReactDOM from 'react-dom/client'
import Components from './Components.tsx'
import './index.css'
import 'react-liquid-glass-kit/dist/index.css'

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Components />
  </React.StrictMode>,
);

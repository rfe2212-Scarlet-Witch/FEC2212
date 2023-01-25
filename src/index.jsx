import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';

function App() {
  return (
    <div className="app">
      <h1>Checking one last time</h1>
      <div>Mantaqaa</div>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
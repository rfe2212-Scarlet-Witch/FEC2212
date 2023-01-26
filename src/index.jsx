import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
//import for overview
//import for QnA
//import for reviews

function App() {
  return (
    <div className="app">
      <h1>To be used by overview component</h1>
      <div>To be used by QnA component</div>
      <div>To be used by review component</div>
    </div>
  );
}
// var test = document.getElementById;
// console.log('This IS THE TEST', test);
const root = createRoot(document.getElementById('root'));
root.render(<App/>);

export default App;
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import Overview from './Components/Overview.jsx';
import QnA from './Components/QnA/QandA.jsx'
//import for reviews

function App() {
  return (
    <div className="app">
      <Overview/>
      <QnA />
      <div>To be used by review component</div>
    </div>
  );
}
// var test = document.getElementById;
// console.log('This IS THE TEST', test);
const root = createRoot(document.getElementById('root'));
root.render(<App/>);

export default App;
import React from 'react';
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

export default App;
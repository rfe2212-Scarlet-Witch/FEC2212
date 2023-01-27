import React from 'react';
import './index.scss';
import Overview from './Components/Overview.jsx';
import QnA from './Components/QnA/QandA.jsx'
import RnR from './Components/RnR/RnR.jsx'
//import for reviews

function App() {
  return (
    <div className="app">
      <Overview/>
      <QnA />
      <RnR/>
      <div className="review-comp">To be used by review component</div>
    </div>
  );
}

export default App;
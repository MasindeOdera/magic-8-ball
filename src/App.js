import React from 'react';
import Question from './Question';
import Magic8Ball from './Magic8Ball';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Magic 8 Ball</h1>
      <Question />
      <Magic8Ball />
    </div>
  );
}

export default App;

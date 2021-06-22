import './App.css';
import Dashboard from './components/Dashboard';
import RBTGraph from "./components/RBTGraph";
import React, { useState, useEffect } from 'react';

function App() {
  const [insertVal, setInsertVal] = useState('');

  const changeInsertVal = (val) => {
    setInsertVal(val);    
  }

  useEffect(() => {
  }, [insertVal]);

  return (
    <div className="App">
      <h1>RBTViz</h1>
      <Dashboard setVal={changeInsertVal}/>
      <RBTGraph insertVal={insertVal}/>
    </div>
  );
}

export default App;
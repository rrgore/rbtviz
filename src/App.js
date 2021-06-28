import './App.css';
import Dashboard from './components/Dashboard';
import RBTGraph from "./components/RBTGraph";
import React, { useState, useEffect } from 'react';

function App() {
  const [insertVal, setInsertVal] = useState('');
  const [deleteVal, setDeleteVal] = useState('');
  const [findVal, setFindVal] = useState('');

  const changeInsertVal = (val) => {
    setInsertVal(val);    
  }

  // const changeDeleteVal = (val) => {
  //   setInsertVal(val);    
  // }

  // const changeInsertVal = (val) => {
  //   setInsertVal(val);    
  // }

  useEffect(() => {
  }, [insertVal]);

  return (
    <div className="App">
      <h1>RBTViz</h1>
      <Dashboard setInsert={changeInsertVal} setDelete={setDeleteVal} setFind={setFindVal}/>
      <RBTGraph insertVal={insertVal} deleteVal={deleteVal} findVal={findVal}/>
    </div>
  );
}

export default App;
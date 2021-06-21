import './App.css';
import Dashboard from './components/Dashboard';
import RBTGraph from "./components/RBTGraph";

function App() {
  return (
    <div className="App">
      <h1>RBTViz</h1>
      <Dashboard />
      <RBTGraph />
    </div>
  );
}

export default App;
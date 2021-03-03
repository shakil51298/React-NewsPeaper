import logo from './logo.svg';
import './App.css';
import { Button,Card } from 'react-bootstrap';
import News from './Components/News/News';
import Header from './Components/HEader/Header';
import Topheadline from './Components/TopHEadline/Topheadline';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Topheadline></Topheadline>
      <Header></Header>

      </header>
    </div>
  );
}

export default App;

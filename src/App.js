import logo from './logo.svg';
import './App.css';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import Homepage from './components/Homepage/Homepage';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Homepage2 from './components/Homepage2/Homepage2';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Router>
        <Routes>
          <Route exact path='/' element={<Homepage/>}/>
          <Route exact path='/menu' element={<Menu/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

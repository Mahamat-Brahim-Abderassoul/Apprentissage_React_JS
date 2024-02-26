import logo from './logo.svg';
import './App.css';

let result = " Mahamat a 20 ans et il est a la faculte .";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mon premier tutoriel pour faire le projet React JS 
        </p>
        <p> alert(result)</p>

      </header>
    </div>
  );
}

export default App;

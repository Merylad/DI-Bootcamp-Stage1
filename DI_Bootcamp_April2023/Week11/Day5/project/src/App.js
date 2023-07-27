import logo from './logo.svg';
import './App.css';
import DisplayQuote from './components/RandomQuotes';
import Todo from './components/Todo';
import SuperHeroes from './components/SuperHeroes';

function App() {
  return (
    <div className="App">
      {/* <DisplayQuote /> 
      <Todo /> */}
      <SuperHeroes />
    </div>
  );
}

export default App;

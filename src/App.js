import logo from './logo.svg';
import './App.css';
import Balance from './Balance';
import AccountActions from './AccountActions';
import AddTodo from './AddTodo';
import Todos from './Todos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Account Redux</h1>    
          </header>
          <Balance/>
          <AccountActions/>
          <AddTodo/>
          <Todos/>
    </div>
  );
}

export default App;

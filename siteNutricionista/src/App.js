import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Oie</h1>
      <Link to="/">Home</Link>
      <Link to="../admin">Admin</Link>
      <Link to="../agendamentos">Agendamento</Link>
      <Link to="../login">Login</Link>
    </div>
  );
}

export default App;

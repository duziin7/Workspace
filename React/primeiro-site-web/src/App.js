import logo from './logo.svg';
import './App.css';
import Cabecalho from './components/Cabecalho';
import Principal from './components/Principal';
import Rodape from './components/Rodape';

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <Principal />
      <Rodape />
    </div>
  );
}

export default App;

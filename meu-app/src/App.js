// import logo from './logo.svg';
import Header from './Header'; //componente criado e importado
import Counter from './Counter';
import './App.css';

function App() {
  return (
    <div>
      <Header name="React app" list={["About", "Buy", "Contact", "Pedrinho"]}/>
      <Counter count={2}/>
    </div>
  );
}

export default App;

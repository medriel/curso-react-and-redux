import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Exercício react-redux (Simples)</h1>
      <div className="line">
        <Card title="Card1" red>
          X
        </Card>
      </div>
      <div className="line">
        <Card title="Card2" green>
          Y
        </Card>
      </div>
      <div className="line">
        <Card title="Card3" blue>
          Z
        </Card>
      </div>
    </div>
  );
}

export default App;

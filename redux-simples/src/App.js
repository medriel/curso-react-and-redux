import './App.css';
import Card from './components/Card';
import Interval from './components/Interval'

function App() {
  return (
    <div className="App">
      <h1>Exercício react-redux (Simples)</h1>
      <div className="line">
        <Interval />
      </div>
      <div className="line">
        <Card title="Card2" green>
          2
        </Card>
        <Card title="Card3" blue>
          3
        </Card>
        <Card title="Card4" purple>
          4
        </Card>
      </div>

    </div>
  );
}

export default App;

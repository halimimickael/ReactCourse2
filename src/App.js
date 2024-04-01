import './App.css';
import Counter from './comps/Counter';
import FoodsApi from './comps/FoodsApi';
import Message from './comps/Message';
import Values from './comps/Values';

function App() {
  return (
    <div className="container">
      <FoodsApi />
      <hr />
      <Values />
      <hr />
      <Message txt="Hello" clr="red"/>
      <Message txt="Bye"/>
      <hr />
      <Counter />
    </div>
  );
}

export default App;

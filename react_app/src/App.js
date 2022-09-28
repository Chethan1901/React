import './App.css';
import  Greet   from './components/greet';
import Welcome from './components/welcome';
import Hello from './components/hello';
import Message from './components/message';
import Counter from './components/counter';

function App() {
  return (
    <div className="App">
    {/* <Greet name = "apple" type = "fruit">
      <p>this is a child</p>
      </Greet>
    <Greet name = "ball" type = "object"/>
    <Greet name = "cat" type = "animal"/>
    <Hello/>
    <Welcome/> */}
    {/* <Message/> */}
    <Counter/>

    </div>
  );
}

export default App;

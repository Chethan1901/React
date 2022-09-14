import './App.css';
import  Greet   from './components/greet';
import Welcome from './components/welcome';
import Hello from './components/hello';

function App() {
  return (
    <div className="App">
    <Greet name = "apple" type = "fruit">
      <p>this is a child</p>
      </Greet>
    <Greet name = "ball" type = "object"/>
    <Greet name = "cat" type = "animal"/>
    <Hello/>
    <Welcome/>
    </div>
  );
}

export default App;

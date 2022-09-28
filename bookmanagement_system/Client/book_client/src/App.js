import './App.css';
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import Main from './Component/main';

function App() {
  return (
    <>
      <Header />
      <div style={{ overflow: "auto" }}>
        <Main />
        <Navbar />
      </div>
    </>
  );
}

export default App;

//Note : in-line styling in React JSx must be sent as object)key-value pair
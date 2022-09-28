import Tasks from "./Components/Task.js";
import Header from "./Components/Header.js";

import "../src/index.css";
import Button from "./Components/Button.js";

function App(props) {
	return (
		<div className="container">
			<Header title={props.title} />
      <Tasks/>
		</div>
	);
}

export default App;

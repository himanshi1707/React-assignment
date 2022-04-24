import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Components/ClientSide/MainComponent";

function App(props) {
  return (
      <Router>
        <Route strict exact path="/" history={props.history}>
          <Main />
        </Route>
      </Router>
  );
}

export default App;

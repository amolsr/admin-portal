import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={SignIn} />
        <Route path="*">
          <h1>Not Found</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

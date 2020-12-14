import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import Main from "./components/Main";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Table from "./components/table";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Dashboard>
            <Main />
          </Dashboard>
        </Route>
        <Route path="/commission/:platform">
          <Dashboard>
            <Table />
          </Dashboard>
        </Route>
        <Route path="/" component={SignIn} />
        <Route path="*">
          <h1>Not Found</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import Main from "./components/Main";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Table from "./components/table";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/dashboard/commission/:platform">
          <Dashboard>
            <Table type="Commission" />
          </Dashboard>
        </Route>
        <Route path="/dashboard/shipping/:platform">
          <Dashboard>
            <Table type="Shipping" />
          </Dashboard>
        </Route>
        <Route path="/dashboard/fixedfees/:platform">
          <Dashboard>
            <Table type="Fixed Fees" />
          </Dashboard>
        </Route>
        <Route path="/dashboard/collectionfees/:platform">
          <Dashboard>
            <Table type="Collection Fees" />
          </Dashboard>
        </Route>
        <Route path="/dashboard">
          <Dashboard>
            <Main />
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

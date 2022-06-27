import { Route, Switch } from "wouter";
import "./App.css";
import Home from "./pages/Home";
import Stats from "./pages/Stats";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>HeyURL!</span>
      </header>
      <Switch>
        <Route component={Home} path="/" />
        <Route component={Stats} path="/stats/:id" />
      </Switch>
    </div>
  );
}

export default App;

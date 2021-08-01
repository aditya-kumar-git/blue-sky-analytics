import NavBar from "Components/NavBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from 'Screens/Home'

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </Router>
  );
}

export default App;

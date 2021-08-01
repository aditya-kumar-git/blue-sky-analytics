import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from 'Screens/Home'

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Switch>
        <Route path="/" component={Home} exact />
        {/* <Route path="/item/:tem" component={Product} /> */}
      </Switch>
    </Router>
  );
}

export default App;

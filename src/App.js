import {
  BrowserRouter as Router,
 Switch,
 Route
} from 'react-router-dom'


import Login from "./pages/login";
import Reset from './pages/reset';
import Forget from './pages/forget';
import Dashboard from './pages/dashboard'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />

          <Route exact path="/forget" component={Forget} />

          <Route exact path="/reset" component={Reset} />

          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

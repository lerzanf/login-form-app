import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login'
import Success from './components/Success';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/"><Login/></Route>
        <Route path="/success"><Success/></Route>
      </Switch>
    </Router>
  );
}

export default App

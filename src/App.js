import './app.scss';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/movies'>
          <Home type='movie' />
        </Route>
        <Route path='/series'>
          <Home type='series' />
        </Route>
        <Route>
          <Watch />
        </Route>
        <Route>
          <Register />
        </Route>
        <Route>
          <Login />
        </Route>
      </Switch>
    </Router>
  )
};

export default App;

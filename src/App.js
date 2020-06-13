import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Experiments from './pages/Experiments';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path='/'>
              <Home />
            </Route>
            <Route path='/experiments'>
              <Experiments />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import ComingSoon from './pages/ComingSoon/ComingSoon';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/experiments'>
              <ComingSoon />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
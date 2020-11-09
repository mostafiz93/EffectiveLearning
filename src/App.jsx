import React from 'react';
import './App.scss';
import './layout.css';
import Auth from './components/login/auth';
import Body from './components/sidebar/body';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route path='/' component={Auth} exact />
            <Route path='/' component={Body} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

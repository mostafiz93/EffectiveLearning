import React from "react";
import "./App.scss";
import "./layout.css";
import Auth from "./components/login/auth";
import Sidebar from './components/layout';
import Example from './components/sidebar/example'
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (	
      <Router>		
        <Switch>
            <Route path="/example" component={Example} />
            <Route path="/home" component={Sidebar} />
            <Route path="/" component={Auth} />
          </Switch>
      </Router> 
    );
  }
}

export default App;
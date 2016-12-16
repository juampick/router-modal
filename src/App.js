import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import A from './components/A'
import B from './components/B'
import C from './components/C'
import ModalContainer from './components/ModalContainer'
import './App.css';

class App extends Component {
  render() {
    return <Router history={browserHistory}>
      <Route path="/" component={ModalContainer}>
        <IndexRoute component={A} />
        <Route path="a" component={A}/>
        <Route path="b" component={B}/>
        <Route path="c" component={C}/>
      </Route>
    </Router>;
  }
}

export default App;

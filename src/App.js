import React, {Component} from 'react';
import './App.css';
import Main from "./containers/Main/Main";
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={Main} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;

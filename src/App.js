import React, {Component} from 'react';
import './App.css';
import Main from "./containers/Main/Main";
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Algorithm from "./containers/Algorithm/Algorithm";
import DataBases from "./containers/DataBases/DataBases";
import Know from "./containers/Know/Know";
import Solutions from "./containers/Solutions/Solutions";
import Vulnerability from "./containers/Vulterability/Vulterability";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/algorithm"  component={Algorithm} />
            <Route path="/databases" component={DataBases} />
            <Route path="/know" component={Know} />
            <Route path="/solutions" component={Solutions} />
            <Route path="/vulnerability" component={Vulnerability} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;

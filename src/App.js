import React from 'react';
import Header from './components/Header'
import Layout from './components/Layout'
import Popular from './components/Popular'
import Battle from './components/Battle'
import Results from './components/Battle/Results'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header/>
      <Layout>
        <Switch>
          <Route exact path='/' component={Popular} />
          <Route exact path='/battle' component={Battle} />
          <Route path='/battle/results' component={Results} />
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;

import React from 'react';
import Header from './components/Header'
import Layout from './components/Layout'
import Loading from './components/Loading'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Popular = React.lazy(() => import('./components/Popular'))
const Battle = React.lazy(() => import('./components/Battle'))
const Results = React.lazy(() => import('./components/Battle/Results'))

function App() {
  return (
    <Router>
      <Header/>
      <Layout>
        <React.Suspense fallback={<Loading />} >
          <Switch>
            <Route exact path='/' component={Popular} />
            <Route exact path='/battle' component={Battle} />
            <Route path='/battle/results' component={Results} />
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </React.Suspense>
      </Layout>
    </Router>
  );
}

export default App;

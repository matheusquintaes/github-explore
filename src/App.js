import React from 'react';
import Header from './components/Header'
import Layout from './components/Layout'
import Popular from './components/Popular'
import Results from './components/Battle/Results'
import Battle from './components/Battle'

function App() {
  return (
    <div>
      <Header/>
      <Layout>
          {/* <Popular/> */}
          {/* <Battle/> */}
          <Results/>
      </Layout>
    </div>
  );
}

export default App;

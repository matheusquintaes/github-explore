import React from 'react';
import Header from './components/Header'
import Layout from './components/Layout'
import Panel from './components/Panel'
import Popular from './components/Popular'

function App() {
  return (
    <div>
      <Header/>
      <Layout>
        <Panel title="Popular Github Repos">
          <Popular/>
        </Panel>
      </Layout>
    </div>
  );
}

export default App;

import React from 'react';
import Header from './components/Header/'
import Popular from './components/Popular'
import GlobalStyles from "./styles/global"

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header/>
      <Popular/>
    </div>
  );
}

export default App;

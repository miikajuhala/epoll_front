import './App.css';
import React from 'react';
import Navigation from './Navigation/Navigation';
import Helmet from 'react-helmet';


function App() {

  

  return (
    <>
    {/* helmet for backroundcolor */}
    <Helmet>
      <style>{'body { background-color: #79c7e8; }'}</style>
    </Helmet>

    {/* navigation that renders the app */}
    <Navigation >
    </Navigation>
  </>
  );
}

export default App;

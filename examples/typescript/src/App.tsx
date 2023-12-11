import React from 'react';
import logo from './logo.svg';
import ldLogo from './ld-logo1.png';
import './App.css';
import { useFlags } from 'launchdarkly-react-client-sdk';

function App() {
  const { devTestFlag, bottomTextFlag, testFlag } = useFlags();
  
  return (
    <div className="App">
      <header className="App-header">
      <h1>
        {testFlag}
      </h1>
      {devTestFlag ? <img src={ldLogo} className="App-logo" alt="ld logo" /> : <img src={logo} className="App-logo" alt="logo" />}
      <p>
        {bottomTextFlag}
      </p>
      </header>
    </div>
  );
}

export default App;

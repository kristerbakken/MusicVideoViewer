import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // @ts-ignore
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <video id="videoPlayer"  autoPlay>
          <source src="/video" type="video/mp4"/>
        </video>
      </header>
    </div>
  );
}

export default App;

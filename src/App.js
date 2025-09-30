import React from 'react';
import logo from './logo.svg';
import './styles/main.scss';
// import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      {/* Just placeholder component */}
      {/* <Hero/> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Img Path */}
        <img src="./images/logo192.png"></img>
        {/* Place HTML here */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

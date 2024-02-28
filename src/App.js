import './App.css';
import _ from 'lodash'
import { useEffect, useState } from 'react';
import Tab from './Tabs/Tab';

function App() {

  const token = 'this-should-be-secret'
  const input = 'http://localhost:3001/images/'
  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <img src={'http://localhost:3001/js/test.js'} /> */}
      {/* <header className="App-header">
        <form 
          style={{width: '100%'}}
          onSubmit={(e) => {
          e.preventDefault()
          setSubmitted(true)
        }}>
          <input style={{width: '100%'}} onChange={e => setValue(e.target.value)}/>
        </form>

        {submitted && <img src={value} onError={(e) => console.log('error', e)}/>}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Tab />
    </div>
  );
}

export default App;

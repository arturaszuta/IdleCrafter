import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TopBar } from './components/topbar';
import { SideBar } from './components/topbar copy';

function App() {
  return (
    <div className="App">
      <div className='AppContainer'>
        <div className='TopBar'>
          <TopBar />
        </div>
        <div className='SideBar'>
          <SideBar />
        </div>

        <div className='MainContentArea'>

        </div>

        <div className='LogArea'>

        </div>
      </div>
    </div>
  );
}

export default App;

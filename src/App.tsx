import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TopBar } from './components/topbar';
import { SideBar } from './components/sidebar';



function App() {

  const [screen, setScreen] = useState('mining');

  const changeScreens = (screenName: string) => {
    setScreen(screenName);
    console.log(screenName);
  }




  return (
    <div className="App">
      <div className='AppContainer'>
        <div className='TopBar'>
          <TopBar />
        </div>
        <div className='SideBar'>
          <SideBar
            changeScreens={changeScreens} 
          />
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

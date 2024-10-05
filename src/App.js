import React from 'react';
import './App.css';
import ViewModule from './Main Files/ViewModule';
import NavModule from './Main Files/NavModule';

function App() {
  return (
    <div className="App">
      <div className="NavModuleContainer">
        <NavModule />
      </div>
      <div className="ViewModuleContainer">
        <ViewModule />
      </div>
    </div>
  );
}

export default App;

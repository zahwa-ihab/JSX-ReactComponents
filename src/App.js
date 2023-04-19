import React from 'react'
import './App.css';
import FullName from './Components/Profile/FullName';
import { Address } from './Components/Profile/Address';
import ProfilePhoto from './Components/Profile/ProfilePhoto';

function App() {
  
  return (
    <> 
    <h2>hello</h2>
    <ProfilePhoto />
    <FullName />
    <Address />
    </>
    
  );
}

export default App;

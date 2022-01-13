import React from 'react';
import logo from './logo.svg';
import './App.css';
import TypeInfo from './component/TypeInfo';
import { isJsxFragment } from 'typescript';
import People from './component/People';


function App() {

  const personName = {
   first : 'ifrat',
   last : 'saad'
  }
  return (
    <div className="App">
      <TypeInfo name = 'jhon doe' notificationCount={30} isLoggedin={true}/>
      <People name = {personName}/>
    </div>
  );
}

export default App;

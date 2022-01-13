import React from 'react';
import logo from './logo.svg';
import './App.css';
import TypeInfo from './component/TypeInfo';
import People from './component/People';
import PersonList from './component/PersonList';


function App() {

  const personName = {
   first : 'ifrat',
   last : 'saad'
  }

  const nameList = [
    {
      first : "john",
      last : "doe"
    },
    {
      first : 'bruce',
      last : 'wayne'
    },
    {
      first : 'watlin',
      last: 'yevedu'
    }
  ]
  return (
    <div className="App">
      <TypeInfo name = 'jhon doe' notificationCount={30} isLoggedin={true}/>
      <People name = {personName}/>
      <PersonList names = {nameList}/>
    </div>
  );
}

export default App;

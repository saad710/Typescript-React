import React from 'react';
import logo from './logo.svg';
import './App.css';
import TypeInfo from './component/TypeInfo';
import People from './component/People';
import PersonList from './component/PersonList';
import Status from './component/Status';
import TextHead from './component/TextHead';
import Oscar from './component/Oscar';


function App() {

  const personName = {
    first: 'ifrat',
    last: 'saad'
  }

  const nameList = [
    {
      first: "john",
      last: "doe"
    },
    {
      first: 'bruce',
      last: 'wayne'
    },
    {
      first: 'watlin',
      last: 'yevedu'
    }
  ]
  return (
    <div className="App">
      <TypeInfo name='jhon doe' notificationCount={30} isLoggedin={true} />
      <People name={personName} />
      <PersonList names={nameList} />
      <Status status='loading' />
      <TextHead>ThIS Is a Heading Tag</TextHead>
      <Oscar>
        <TextHead>ThIS Is a Heading Tag</TextHead>
      </Oscar>
    </div>
  );
}

export default App;

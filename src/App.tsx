import React from 'react';
import logo from './logo.svg';
import './App.css';
import TypeInfo from './component/TypeInfo';
import People from './component/People';
import PersonList from './component/PersonList';
import Status from './component/Status';
import TextHead from './component/TextHead';
import Oscar from './component/Oscar';
import Button from './component/Button';
import Input from './component/Input';
import Container from './component/Container';
import { List } from './component/generics/List';
import { ThemeContextProvider } from './component/context/ThemeContext';
import { Box } from './component/context/Box';
import { UserContextProvider } from './component/context/UserContext';
import { User } from './component/state/User';
import { DomRef } from './component/refs/DomRef';
import { MutableRef } from './component/refs/MutableRef';
import { Toast } from './component/templateliterals/Toast';
import { CustomButton } from './component/html/Button';
import { Text } from './component/polymorphic/Text';



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
      <Button handleClick={(event, id) => console.log('button clicked', event, id)}></Button>
      <Input value='dd' handleChange={event => console.log(event.target.value)} />
      <Container styles={{ border: "1px solid red", padding: '1rem' }} />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <DomRef />
      <MutableRef />
      {/* <Counter message='The count value is ' /> */}
      <List
        items={[
          {
            id: 1,
            first: 'Bruce',
            last: 'Wayne'
          },
          {
            id: 2,
            first: 'Clark',
            last: 'Kent'
          },
          {
            id: 3,
            first: 'Princess',
            last: 'Diana'
          }
        ]}
        onClick={item => console.log(item)}
      />
      <Toast position='center' />
      <CustomButton variant='primary' onClick={() => console.log('Clicked')}>
        Button Label
      </CustomButton>
      <Text size='lg' as='h1'>
        Heading
      </Text>
      <Text size='md' as='p'>
        Paragraph
      </Text>
      <Text size='sm' color='secondary' as='label' htmlFor='someId'>
        Label
      </Text>
    </div>
  );
}

export default App;

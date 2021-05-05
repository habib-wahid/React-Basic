
//cntrl+k+c comment
//cntrl+k+u uncomment

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header';
import State from './Components/State';
import Event from './Components/Event';
import EventHandler  from './Components/EventHandler';
import LoginControl from './Components/LoginControl';
import LoginButton from './Components/LoginButton';
import Mailbox from './Components/Mailbox';
import ListComponent from './Components/ListComponent';
import ReactForm from './Components/ReactForm';
import Calculator from './Components/Calculator';
import WelcomeDialog from './Components/WelcomeDialog';
import Count from './Components/Count';

function App() {

  const name = 'habib';
  const tweet = "I tweet ";
  const age = 25;
  var messages = ['React','Re:React','Re:Re:React'];
  const numbers=[1,2,3,4,5];
  
  return (
    <div className="App">
     <Header name={name} tweet={tweet} age={age}/>
     <State />
     <Event />
     <EventHandler />
     <LoginControl />
     <Mailbox unreadMessages = {messages} />
     <ListComponent numbers={numbers} />
     <ReactForm />
     <Calculator />
     <WelcomeDialog />
     <Count a={10} b = {15} />

    </div>
   
  );
}

export default App;

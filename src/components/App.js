import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {uuid} from 'uuidv4';
import './App.css';
import Header from './Header';
import ContactList from './contactlist';
import AddContact from './addcontact';

function App() {
  // const contacts = [
  //   {
  //     id : "1",
  //     name : "ayush",  
  //     email : "ayush@123",
  //   },
  //   {
  //     id : "2",
  //     name : "ayu",
  //     email : "ayu@123",
  //   },
  // ];
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addcontacthandler = (contact) =>{
    console.log(contact);
    setContacts([...contacts, {id: uuid(),...contact}]);
  }

  const removecontact = (id)=>{ 
    const newcontact = contacts.filter((contact) =>{
      return contact.id !== id;
    });
   setContacts(newcontact);
  };

  useEffect(() => {
    const takedata = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(takedata) setContacts(takedata);
  },[]);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);

  return (
   <div className="ui container">
     <Router>
     <Header/>
     <Switch>
       <Route path="/" exact 
       render={(props)=>(
        <ContactList {...props} contacts={contacts} getcontactid={removecontact}/>
       )}
       />
       <Route path="/add" 
      //  component={() => <AddContact addcontacthandler={addcontacthandler}/>}
      render={(props)=>(
        <AddContact {...props} addcontacthandler={addcontacthandler}/>
       )}
       />
     </Switch>
     {/* <AddContact addcontacthandler={addcontacthandler}/>
     <ContactList contacts={contacts} getcontactid={removecontact}/> */}
     </Router>
    
   </div>
  );
}

export default App;

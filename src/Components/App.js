import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import { uuid } from 'uuidv4'
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import EditContact from './EditContact';
import api from '../api/contacts';
import axios from 'axios';


function App() {
  const LOCAL_STORAAGE_KEY = "contacts"
  const [contacts, setContacts] = useState([]);
  //retriveContacts
  const retriveContacts = async () => {
    debugger;
    const response = await api.get("/contacts");
    return response.data
  }
  const addContactHandler = async (contact) => {
    const request = {
      id: uuid(),
      ...contact
    }

    const response = await api.post("/contacts", request)
    setContacts([...contacts, response.data])
  }

  const updateContactHandler = async (contact) => {
    
    const response = await api.put(`/contacts/${contact.id}`, contact)
    const {id, name, email} = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? {...response.data} : contact;
      })
    )
  }



  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retriveContacts();
      if (allContacts) setContacts(allContacts)
    }
    getAllContacts();
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAAGE_KEY, JSON.stringify(contacts))
  }, [contacts])


  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`)
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    })

    setContacts(newContactList)
  }

  return (
    <div class="ui container">

      <Router>
        <Header />
        <hr />
        <Switch>
          <Route path="/" exact render={(props) => (<ContactList {...props} contacts={contacts} getContactId={removeContactHandler} />)}></Route>
          <Route path="/add" render={(props) => (<AddContact {...props} addContactHandler={addContactHandler} />)}></Route>
          <Route path="/edit" render={(props) => (<EditContact {...props} updateContactHandler={updateContactHandler} />)}></Route>
          <Route path="/contact/:id" component={ContactDetails}></Route>
        </Switch>
      </Router>

    </div>

  );
}

export default App;

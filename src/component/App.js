import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import Welcome from './welcome';

import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
// import { uuid } from 'uuidv4';





function App() {



  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setcontact] = useState([])
  const handlercon = (contact) => {
    // const newitem = { id: new Date().getTime().toString()}
    console.log(contact)
    setcontact([...contacts, contact])
  }

  useEffect(() => {
    const retrivecontacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (retrivecontacts) setcontact(retrivecontacts)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  const deleteitem = (id) => {
    console.log(id)
    console.log("this is delete")
    setcontact(contacts.filter((item) => item.name !== id))
  }

  return (
    <div className="App">
    
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={ <Navigate to ="/list"/>} />

          <Route
            path="add"
            element={ < AddContact  handlercon={handlercon} />} />

          <Route
            path="list"
            element={< ContactList  deleteitem={deleteitem} contact={contacts} />} />
        </Routes>
      </BrowserRouter>
      {/* <AddContact handlercon={handlercon} />
      <ContactList deleteitem={deleteitem} contact={contacts} /> */}
    </div>
  );
}

export default App;


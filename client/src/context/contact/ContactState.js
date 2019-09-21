import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        type: "professional",
        id: 4,
        name: "santa",
        email: "santa.roy@gmail.com",
        phone: "+91-9775279300"
      },
      {
        type: "personal",
        id: 3,
        name: "Sreetama",
        email: "sreetama.sen@gmail.com",
        phone: "+91-9775279300"
      },
      {
        type: "professional",
        id: 2,
        name: "Ritam",
        email: "ritam.bhat@gmail.com",
        phone: "+91-9123911061"
      },
      {
        type: "personal",
        id: 1,
        name: "Asoke",
        email: "asoke.bhattacharjee@gmail.com",
        phone: "+91-7980550185"
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add Contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;

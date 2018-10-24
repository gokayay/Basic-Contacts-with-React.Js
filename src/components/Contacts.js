import React, {Component} from 'react';
import PropTypes from 'prop-types';
import List from './List';
import Form from './Form';

//this is a stateless component

const Contacts = (props) => 
            <div>
                <List contacts={props.contacts}/>
                <Form addContact={props.addContact}/>            
            </div>


//this props came from App.js
    Contacts.propTypes={
        contacts: PropTypes.array.isRequired,
        addContact: PropTypes.func
    };

export default Contacts;
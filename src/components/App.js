import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../logo.svg';
import '../App.css';
import Contacts from './Contacts';
import Footer from './Footer';

class App extends Component {
  constructor(){
    super();
    this.addContact=this.addContact.bind(this);
  }

  //this state holds Contact List
  state={
    contacts:[{
        name:"Gokay AY",
        phone:"1111111111"
    },
    {
        name:"LeBron James",
          phone:"2323232323"
      },
      {
        name:"Dwyane Wade",
        phone:"3333333333"
      },
      {
        name:"Kyrie Irving",
        phone:"2222222222"
      },
      {
        name:"Kevin Love",
        phone:"0000000000"
      },    
    ]
  };
  
  //this function goes to Contact.js as prop function
    addContact(contact){
      const { contacts } =this.state;
      this.setState({
        contacts: [ ...this.state.contacts, contact ]
      });
    };

    render() {
      return(
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Contacts with React</h1>
            <br></br>
          </header>
  
         <Contacts 
          addContact={this.addContact}
          contacts={this.state.contacts}
         />
        <Footer/>
        <br></br>
        </div>
       
      );
    }
  }
  
  export default App;
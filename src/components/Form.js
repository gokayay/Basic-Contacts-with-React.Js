import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Form extends Component{
    constructor(){
        super();
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    
    //this prop came from Contacts.js
    static propTypes={
        addContact: PropTypes.func
    };

    //this state will get used onSubmit function 
    state={
        name:'',
        phone:''
    };

    //this function changes form's values
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    //this function submits contacts
    onSubmit(e){
        e.preventDefault();
        this.props.addContact({
            ...this.state
        });
        this.setState({
            name:'',
            phone:''
        });
    };

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <input 
                    name={"name"} id={"name"} 
                    value={this.state.name}  
                    onChange={this.onChange}
                    placeholder={"Enter a name"}/>
                    <br></br>
                    <input 
                    name={"phone"} id={"phone"} 
                    value={this.state.phone}  
                    onChange={this.onChange}
                    placeholder={"Enter a phone number"}/>
                    <br></br>
                    <br></br>
                    <button>Add</button>
                    <br></br><br></br>
                </form>
            </div>
        );
    }

}

export default Form;
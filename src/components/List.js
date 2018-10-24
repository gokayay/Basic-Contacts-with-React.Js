import React, {Component} from 'react';
import './List.css';
import PropTypes from 'prop-types';

class List extends Component{

    state={
        filterText:''
    };

    //this prop came from Contacts.js
    static propTypes={
        contacts: PropTypes.array.isRequired
    };

    onChangeFilterText = (e) => {
        this.setState({
            filterText: e.target.value
        })
    };

    render(){
        const filteredContacts = this.props.contacts.filter(
			contact => {
				return contact.name.toLowerCase().indexOf(
					this.state.filterText.toLowerCase()
				) !== -1
			}
		);
        return (
			<div className={"listArea"}>
				<input
					value={this.state.filterText}
					onChange={this.onChangeFilterText}
					name={"filter"}
					id={"filter"}
					placeholder={"Filter by name"}/>
                <br></br><br></br>
				<ul className={"list"}>
					{
						filteredContacts.map(contact =>
							<li key={contact.phone}>
								<span className={"name"}>{contact.name}</span>
								<span className={"phone"}>{contact.phone}</span>
								<span className={"clearfix"}></span>
							</li>
						)
					}
				</ul>
			</div>
		);
    }

}

export default List;
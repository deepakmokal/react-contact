import React from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

export default class ContactList extends React.Component {
    
    render(){
        const deleteContact = (id) =>{
            this.props.getContactId(id)
        }
        const renderContactList = this.props.contacts.map((contact) => {
            return <ContactCard contact = { contact } clickHandler = {deleteContact} key = {contact.id} />
            
        })
        return (
            <div className="ui celled list">
            <div style={{textAlign: "right"}}>
            <Link to="/add">
            <button className="ui button blue"> + Add Contact </button>
            </Link>
            </div>
                <h3>List of contact</h3>
            
                {renderContactList}
            </div>
        )
    }
}
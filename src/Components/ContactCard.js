import React from "react";
import { Link } from 'react-router-dom';

const ContactCard = (props) => {
    
     const {id, name, email} = props.contact
    return (
        <div className="item">
        <img className="ui avatar image" src= "https://i.pravatar.cc/300" alt="user"/>
            <div className="content">
            <Link to= {{pathname: `/contact/${id}`, state: {contact: props.contact}}}>
                <div className="header">{name}</div>
                <div>{email}</div>
            </Link>
            </div>

            <i className="ui right floated icon trash alternate outline red"
            style={{cursor:'pointer', marginLeft: '10px'}} 
               onClick = {()=> props.clickHandler(props.contact.id) } 
            >
            </i>
            <Link to= {{pathname: `/edit`, state: {contact: props.contact}}}>
            <i className="ui right floated icon edit alternate outline blue"
            style={{cursor:'pointer'}} 
               
            >
            </i>
            </Link>
        </div>

    );
}

export default ContactCard
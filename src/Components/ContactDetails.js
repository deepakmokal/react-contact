import React from "react";
import { Link } from 'react-router-dom';

const ContactDetails = (props) => {
    console.log(props);
    const { name, email } = props.location.state.contact
    return (
        <div className="main">
            <div class="ui card floated centered">
                <div class="image">
                    <img src="https://i.pravatar.cc/300" />
                </div>
                <div class="content">
                    <a class="header">{name}</a>
                    <div class="meta">
                        <span class="date">{email}</span>
                    </div>

                </div>

            </div>

            <div className="" style={{ textAlign: "center" }}>
                <Link to="/">
                    <button className="ui button blue">
                        Go to Contact List
                    </button>
                </Link>
            </div>
        </div>



    )
}
export default ContactDetails

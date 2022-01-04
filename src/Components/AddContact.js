import React from "react";

class AddContact extends React.Component {
     state = {
        name: "",
        email: ""
       };

      addContactToList = (e) => {
          e.preventDefault()
           if(this.state.name === "" || this.state.email === ""){
               alert("All Fields are Mandatory")
               return
           }
           this.props.addContactHandler(this.state)
           this.setState({name:'', email: ''});
           this.props.history.push('/');

           
       }
       render(){
        return (
            <div className="ui main">
                <h3>Add Contact</h3>
                <form className="ui form" onSubmit= {this.addContactToList}>
    
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="name"
                        value = {this.state.name}
                        onChange = {(e) => this.setState({name: e.target.value})}
                        />
    
                    </div>
    
                    <div className="field">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Email"
                         value = {this.state.email}
                         onChange = {(e)=> this.setState({email: e.target.value})}   
                        />
                    </div>
    
                    <button className="ui button blue"> Save</button>
                </form>
            </div>
        )

       }
    
}

export default AddContact
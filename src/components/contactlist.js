import React from "react";
import { Link } from 'react-router-dom';
import Contatcard from "./contactcard";

const ContactList = (props) => {

    const deletecontact = (id) =>{
        props.getcontactid(id);
    }
  // const contacts = [
  //   {
  //     id: "1",
  //     name: "oti",
  //     email: "oti@gmail.com"
  //   },
  // ];  

  const rendercontactlist = props.contacts.map((contact)=> {
    return(
        // <div className="item">
        //     <div className="content">
        //         <div className="header">{contact.name}</div>
        //         <div>{contact.email}</div>    
                
        //     </div>
        //     <i className="trash alternate outline icon"></i>
        // </div>
        <Contatcard contact={contact} clickhandler={deletecontact} key={contact}/>
    );
  });
  return(
    <div className="main">
      <h2>ContactList
        <Link to="/add">
        <button className="ui button blue right">AddContact</button>
        </Link>
      </h2>
      <div className="ui celled list">{rendercontactlist}</div>
    </div>
  );
};

export default ContactList;
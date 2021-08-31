import React from 'react';

const Contatcard = (props) =>{
    const {id, name, email} = props.contact;
    return(
        <div className="item">
        <div className="content">
            <div className="header">{name}</div>
            <div>{email}</div>    
            
        </div>
        <i className="trash alternate outline icon" style={{ color: "red", marginTop: "7px"}}
            onClick={()=> props.clickhandler(id)}
        ></i>
    </div>
    );
}

export default Contatcard;
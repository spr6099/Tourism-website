import React from "react";

function Card(props) {
    return(
        <div className="card">
            <img src={props.imgSrc}/>
            <h3>{props.Name}</h3>
            <p>ph no: {props.PhoneNo}</p>
            <p>Email: {props.Email}</p>
        </div>
    )
}

export default Card
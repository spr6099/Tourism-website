import React from "react";

function Card(props) {
    return(
        <div className="card">
            <img src = {props.cardContent.imgSrc}/>
            <h3> {props.cardContent.PlaceName}</h3>
            <p>{props.cardContent.PlaceDescription}</p>
            
            
        </div>
    )
}

export default Card
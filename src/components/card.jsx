import React, { useState } from "react";

function Card(props) {

  let [btnText, setBtnText] = useState("Add to favourite");   //useState
  let [className, setClassname] = useState(" ");

  function addToFavourite() {
    setBtnText((prevState) => {
      if (prevState == "Add to favourite") {
        return "Added to favourite";
      } else {
        return "Add to favourite";
      }
    });

    setClassname((prevState) => {
      if (prevState == " ") {
        return "active"; //.active ->button  bgColor: red;
      } else {
        return " ";
      }
    });
  }
  return (
    <div className={`card ${className}`}>
      <img src={props.cardContent.Image} />
      <h3> {props.cardContent.Place}</h3>
      <p>{props.cardContent.Description}</p>
      <button onClick={addToFavourite}>{btnText}</button>
    </div>
  );
}

export default Card;

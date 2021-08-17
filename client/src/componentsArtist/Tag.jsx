import React from "react";

export default function Tag(props) {
  if (props.tag === "accepted") {
    return (
    <div className="w3-container">
      <span className="w3-tag w3-xlarge w3-padding w3-red" id="w3-container_finishTag" style={{transform:"rotate(-20deg)"}}>Accepted</span>              
    </div>)
  } else if (props.tag === "finished") {
    return (
    <div className="w3-container">
      <span className="w3-tag w3-xlarge w3-padding w3-green" id="w3-container_finishTag" style={{transform:"rotate(-20deg)"}}>Finished</span>              
    </div>)
  } else if (props.tag === "in process") {
    return (
    <div className="w3-container">
      <span className="w3-tag w3-xlarge w3-padding w3-blue" id="w3-container_finishTag" style={{transform:"rotate(-20deg)"}}>In Process</span>              
    </div>) 
  } else {
    return <p></p>
  }
}
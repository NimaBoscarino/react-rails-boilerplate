import React from "react";
import "./Button.css"

export default function Button(props) {
  return (
    <button
      className="btn btn-outline-primary button_artist"
      onClick={props.onClick}
      hidden={props.hidden}
    >
      {props.name}
    </button>
  );
}
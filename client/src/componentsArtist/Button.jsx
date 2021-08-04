import React from "react";

export default function Button(props) {
  return (
    <button
      className="button_artist"
      onClick={props.onClick}
      hidden={props.hidden}
    >
      {props.name}
    </button>
  );
}
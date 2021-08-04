import React from "react";

export default function Button(props) {
  return (
    <button
      className="button_artist"
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
}
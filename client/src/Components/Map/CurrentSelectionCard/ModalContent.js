import React from "react";
import PlaceHolderPic from "../../../global-assets/yaletown.jpg";

function ModalContent() {
  return (
    <div className='modal-content'>
      <img className='modal-picture' src={PlaceHolderPic} alt={""} />
      <p>this is modal content in its own</p>
    </div>
  );
}

export default ModalContent;

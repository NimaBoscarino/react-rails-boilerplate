import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function ModalContent() {
  return (
    <ModalBody>
      <div className='row'>
        <div className='form-group col-md-4'>
          <label>Name:</label>
          <input
            type='text'
            value={this.state.name}
            onChange={this.handleChangeName}
            className='form-control'
          />
        </div>
      </div>
      <div className='row'>
        <div className='form-group col-md-4'>
          <label>Team:</label>
          <input
            type='text'
            value={this.state.team}
            onChange={this.handleChangeTeam}
            className='form-control'
          />
        </div>
      </div>
      <div className='row'>
        <div className='form-group col-md-4'>
          <label>Country:</label>
          <input
            type='text'
            value={this.country}
            onChange={this.handleChangeCountry}
            className='form-control'
          />
        </div>
      </div>
    </ModalBody>
  );
}

export default ModalContent;

import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ModalContent from "./ModalContent";
import { FiImage } from "react-icons/fi";

export default class CurrentSelectionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: false };

    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Button variant='primary' size='sm' block onClick={this.toggle}>
          <FiImage /> See More Images
        </Button>
        <Modal isOpen={this.state.modal}>
          <ModalHeader>
            Gastown Pub
            <Button color='danger' onClick={this.toggle}>
              Close
            </Button>
          </ModalHeader>
          <ModalBody className='modal-box'>
            <div className='row'>
              <ModalContent />
            </div>
            <div className='row'>
              <ModalContent />
            </div>
            <div className='row'>
              <ModalContent />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color='danger' onClick={this.toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

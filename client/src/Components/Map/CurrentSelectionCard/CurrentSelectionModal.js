import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { FiImage } from "react-icons/fi";
import Carousel from "./CarouselModal";

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
        <Button
          className='see-images-button'
          outline
          color='light'
          size='sm'
          block
          onClick={this.toggle}>
          <FiImage /> See More Images
        </Button>
        <Modal isOpen={this.state.modal} className='modal-container' centered>
          <ModalHeader className='modal-header-box'>{this.props.place.name}</ModalHeader>
          <ModalBody className='modal-body'>
            <Carousel images={this.props.place.yelp_photos}/>
          </ModalBody>
          <ModalFooter className='modal-footer-div'>
            <Button outline color="light" onClick={this.toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default class CurrentSelectionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: false, name: "", team: "", country: "" };

    this.toggle = this.toggle.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeTeam = this.handleChangeTeam.bind(this);
    this.handleChangeCountry = this.handleChangeCountry.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }
  handleChangeTeam(event) {
    this.setState({ team: event.target.value });
  }
  handleChangeCountry(event) {
    this.setState({ country: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Button color='success' onClick={this.toggle}>
          See More Images
        </Button>
        <Modal isOpen={this.state.modal}>
          <form onSubmit={this.handleSubmit}>
            <ModalHeader>The Gastown Pub</ModalHeader>
            <ModalBody>
              <div className='row'>
                <div className='form-group col-md-4'>
                  <p>this image</p>
                </div>
              </div>
              <div className='row'>
                <div className='form-group col-md-4'>
                  <p>this image</p>
                </div>
              </div>
              <div className='row'>
                <div className='form-group col-md-4'>
                  <p>this image</p>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <input
                type='submit'
                value='Submit'
                color='primary'
                className='btn btn-primary'
              />
              <Button color='danger' onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }
}

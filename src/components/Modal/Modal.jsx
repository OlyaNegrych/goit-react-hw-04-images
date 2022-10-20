import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalImg } from '../Modal/Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  handleCloseModal = e => {
    if (e.target.nodeName === 'IMG') {
      return;
    }
    this.props.onCloseModal();
  };

  render() {
    return createPortal(
      <Overlay onClick={this.handleCloseModal}>
        <ModalImg>
          <img
            src={this.props.image.largeImageURL}
            alt={this.props.image.tags}
          />
        </ModalImg>
      </Overlay>,
      modalRoot
    );
  }
}

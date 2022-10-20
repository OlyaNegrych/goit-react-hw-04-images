import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../Modal/Modal';
import {
  ImageGalleryItem,
  ImageGalleryItemIMG,
} from './ImageGalleryItem.styled';

export class GalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    return (
      <>
        <ImageGalleryItem key={this.props.image.id}>
          <ImageGalleryItemIMG
            src={this.props.image.webformatURL}
            alt={this.props.image.tags}
            onClick={this.toggleModal}
          />
        </ImageGalleryItem>
        {this.state.showModal && (
          <Modal
            image={this.props.image}
            onCloseModal={this.toggleModal}
          />
        )}
      </>
    );
  }
}

GalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};

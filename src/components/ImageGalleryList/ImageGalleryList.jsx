import { GalleryItem } from 'components/GalleryItem/GalleryItem';
import React from 'react';
import PropTypes from 'prop-types';
import { ImageGallery } from './ImageGallery.styled';

export const ImageGalleryList = ({ images }) => {
    return <ImageGallery>{images.map(image => (<GalleryItem key={image.id} image={image} />))}</ImageGallery>;
}

ImageGalleryList.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};


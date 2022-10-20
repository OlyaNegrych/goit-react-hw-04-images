import PropTypes from 'prop-types';
import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import {
  ImageGalleryItem,
  ImageGalleryItemIMG,
} from './ImageGalleryItem.styled';

export const GalleryItem = ({ image }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(state => !state);
  };

  return (
    <>
      <ImageGalleryItem key={image.id}>
        <ImageGalleryItemIMG
          src={image.webformatURL}
          alt={image.tags}
          onClick={toggleModal}
        />
      </ImageGalleryItem>
      {showModal && (
        <Modal image={image} onCloseModal={toggleModal} />
      )}
    </>
  );
};

GalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};


// export class GalleryItem extends Component {
//   state = {
//     showModal: false,
//   };

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//   render() {
//     return (
//       <>
//         <ImageGalleryItem key={this.props.image.id}>
//           <ImageGalleryItemIMG
//             src={this.props.image.webformatURL}
//             alt={this.props.image.tags}
//             onClick={this.toggleModal}
//           />
//         </ImageGalleryItem>
//         {this.state.showModal && (
//           <Modal image={this.props.image} onCloseModal={this.toggleModal} />
//         )}
//       </>
//     );
//   }
// }

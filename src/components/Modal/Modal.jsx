import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalImg } from '../Modal/Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ image, onCloseModal }) => {

  useEffect(() => {
     const handleEscDown = e => {
       if (e.code === 'Escape') {
         onCloseModal();
       }
     };
    window.addEventListener('keydown', handleEscDown);

    return () => {
      window.removeEventListener('keydown', handleEscDown);
    };
  }, [onCloseModal]);

  const handleCloseModal = e => {
    if (e.target.nodeName === 'IMG') {
      return;
    }
    onCloseModal();
  };

  return createPortal(
    <Overlay onClick={handleCloseModal}>
      <ModalImg>
        <img src={image.largeImageURL} alt={image.tags} />
      </ModalImg>
    </Overlay>,
    modalRoot
  );
};


// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onCloseModal();
//     }
//   };

//   handleCloseModal = e => {
//     if (e.target.nodeName === 'IMG') {
//       return;
//     }
//     this.props.onCloseModal();
//   };

//   render() {
//     return createPortal(
//       <Overlay onClick={this.handleCloseModal}>
//         <ModalImg>
//           <img
//             src={this.props.image.largeImageURL}
//             alt={this.props.image.tags}
//           />
//         </ModalImg>
//       </Overlay>,
//       modalRoot
//     );
//   }
// }
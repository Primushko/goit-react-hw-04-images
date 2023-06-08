import { useEffect } from 'react';
import PropTypes from 'prop-types';
// import { Component } from 'react';
import { Overlay, ModalContent } from './Modal.module';

export const Modal = ({ largeImageURL, alt, onCloseModal }) => {
  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onCloseModal]);

  const handleBackdropClick = ({ target, currentTarget }) => {
    if (currentTarget === target) {
      onCloseModal();
    }
  };

  return (
    <Overlay className="overlay" onClick={handleBackdropClick}>
      <ModalContent className="modal">
        <img src={largeImageURL} alt={alt} />
      </ModalContent>
    </Overlay>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onCloseModal: PropTypes.func.isRequired,
};
// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeydown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeydown);
//   }

//   handleKeydown = e => {
//     if (e.code === 'Escape') {
//       this.props.onCloseModal();
//     }
//   };

//   handleBackdropClick = ({ target, currentTarget }) => {
//     if (currentTarget === target) {
//       this.props.onCloseModal();
//     }
//   };

//   render() {
//     const { largeImageURL, alt } = this.props;

//     return (
//       <Overlay className="overlay" onClick={this.handleBackdropClick}>
//         <ModalContent className="modal">
//           <img src={largeImageURL} alt={alt} />
//         </ModalContent>
//       </Overlay>
//     );
//   }
// }

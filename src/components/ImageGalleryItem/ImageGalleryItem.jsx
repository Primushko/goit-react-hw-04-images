import { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import { GalleryItem, GalleryImg } from './ImageGalleryItem.module';
// import { Component } from 'react';
export const ImageGalleryItem = ({
  galleryItem: { webformatURL, largeImageURL, tags },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(isModalOpen => !isModalOpen);
  };

  return (
    <>
      <GalleryItem className="gallery-item" onClick={toggleModal}>
        <GalleryImg src={webformatURL} alt={tags} />
      </GalleryItem>
      {isModalOpen && (
        <Modal
          largeImageURL={largeImageURL}
          alt={tags}
          onCloseModal={toggleModal}
        />
      )}
    </>
  );
};
ImageGalleryItem.propTypes = {
  galleryItem: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};

// export class ImageGalleryItem extends Component {
//   state = {
//     isModalOpen: false,
//   };

//   toggleModal = () => {
//     this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen }));
//   };

//   render() {
//     const {
//       galleryItem: { webformatURL, largeImageURL, tags },
//     } = this.props;

//     return (
//       <>
//         <GalleryItem className="gallery-item" onClick={this.toggleModal}>
//           <GalleryImg src={webformatURL} alt={tags} />
//         </GalleryItem>
//         {this.state.isModalOpen && (
//           <Modal
//             largeImageURL={largeImageURL}
//             alt={tags}
//             onCloseModal={this.toggleModal}
//           />
//         )}
//       </>
//     );
//   }
// }
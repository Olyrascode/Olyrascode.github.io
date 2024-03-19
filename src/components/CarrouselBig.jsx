import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CarrouselBig = ({ currentIndex, images, onClose }) => {
    const [centerIndex, setCenterIndex] = useState(currentIndex);
    const [showModal, setShowModal] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    useEffect(() => {
        setCenterIndex(currentIndex);
    }, [currentIndex]);

    const handlePrev = () => {
        setCenterIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCenterIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrevScreen = () => {
        setSelectedImageIndex(prevIndex => (prevIndex === 0 ? images[centerIndex].screen.length - 1 : prevIndex - 1));
    };

    const handleNextScreen = () => {
        setSelectedImageIndex(prevIndex => {
            const screenLength = images[centerIndex].screen.length;
            return prevIndex === screenLength - 1 ? 0 : prevIndex + 1;
        });
    };

    const handleCenterImageClick = (index) => {
        setShowModal(true);
        setIsModalOpen(true);
        setSelectedImageIndex(0);
        setCenterIndex(index);
        
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setIsModalOpen(false);
    };

    return (
        <div className='carrousel-big'>
     {showModal && (
  <div className="modal" style={{ backgroundColor: images[centerIndex]['background-color'] }}>
      <button onClick={handleCloseModal} className="close-btn"><img src="src/assets/Img/close.png" alt="" /></button>
      <p>{images[centerIndex].description}</p>
      {images[centerIndex].screen && (
          <img src={images[centerIndex].screen[selectedImageIndex]} alt={`Image ${selectedImageIndex + 1}`} className='modalImage' />
      )}
      <div className="carrouselScreen">
          <button onClick={handlePrevScreen} className="carousel-btn">&#10094;</button>
          {images[centerIndex].screen && images[centerIndex].screen.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index + 1}`} className={selectedImageIndex === index ? 'screenImage selected' : 'screenImage'} onClick={() => setSelectedImageIndex(index)} />
          ))}
          <button onClick={handleNextScreen} className="carousel-btn">&#10095;</button>
      <div className="pagination">
          {images[centerIndex].screen && images[centerIndex].screen.map((image, index) => (
              <button key={index} className={selectedImageIndex === index ? 'pagination-dot active' : 'pagination-dot'} onClick={() => setSelectedImageIndex(index)} />
          ))}
      </div>
      </div>
      <a className='logoGithub' href={images[centerIndex].link}><img src="./src/assets/Img/github-mark.png" alt="" /></a>
  </div>
)}

            <button onClick={onClose} className="close-btn"><img src=".\src\assets\Img\close.png" alt="" /></button>

            <div className="carousel-images">
                <div className='sideContainer'>
                    <img src={images[(centerIndex - 1 + images.length) % images.length].src} alt="carousel" className='imageSide' onClick={handlePrev} />
                </div>
                <div className='centerContent'>
                    <h3 className={`title ${isModalOpen ? 'move-left' : ''}`} style={{ color: images[centerIndex].color }}>{images[centerIndex].title.toUpperCase()}</h3>
                    <div className='centerContainer'>
                        <img src={images[centerIndex].src} alt="carousel" className='imageCenter' onClick={() => handleCenterImageClick(centerIndex)} />
                    </div>
                    <div className='more' onClick={() => handleCenterImageClick(centerIndex)}>
                        <img className='moreCross' src=".\src\assets\Img\close.png" alt="" />
                        <div className='bar'></div>
                        <p>Explore</p>
                    </div>
                </div>
                <div className='sideContainer'>
                    <img src={images[(centerIndex + 1) % images.length].src} alt="carousel" className='imageSide' onClick={handleNext} />
                </div>
            </div>
        </div>
    );
};

CarrouselBig.propTypes = {
    currentIndex: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        screen: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    })).isRequired,
    onClose: PropTypes.func.isRequired
};

export default CarrouselBig;
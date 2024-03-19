
import React, { useState, useEffect } from 'react';
import CarrouselBig from './CarrouselBig';

const Carousel = () => {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showCarrouselBig, setShowCarrouselBig] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    useEffect(() => {
        // Charger les données depuis le fichier JSON
        fetch('./src/assets/Img/Carrousel.json')
            .then(response => response.json())
            .then(data => setImages(data))
            .catch(error => console.error('Erreur lors du chargement des images:', error));
    }, []);

    const handlePrev = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    };

    const handleWheel = event => {
        if (event.deltaY < 0) {
            handlePrev();
        } else {
            handleNext();
        }
    };

    const handleImageClick = index => {
        setShowCarrouselBig(true);
        setSelectedImageIndex(index);
    };

    const handleCloseCarrouselBig = () => {
        setShowCarrouselBig(false);
    };

    return (
        <div>
            {!showCarrouselBig && (
                <div className='carrousel' onWheel={handleWheel}>
                    {/* <button onClick={handlePrev} className='arrow'>Précédent</button> */}
                    {images.map((image, index) => (
                        <img key={index} src={image.src} alt={image.title} className='imageCarrousel' onClick={() => handleImageClick(index)} />
                    ))}
                    {/* <button onClick={handleNext} className='arrow'>Suivant</button> */}
                </div>
            )}
            {showCarrouselBig && (
                <CarrouselBig currentIndex={selectedImageIndex} images={images} onClose={handleCloseCarrouselBig} />
            )}
        </div>
    );
};

export default Carousel;


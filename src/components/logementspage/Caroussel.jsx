import { useState, } from 'react';
import { useParams } from 'react-router-dom';
import data from '../logements.json';
import Arrow from '../assets/images/arrow.png';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { id } = useParams();
  const pictures = data.find(item => item.id === id)?.pictures;

  // useEffect(() => {
  // //   // Mettez à jour l'index du carrousel lorsque l'id sélectionné change
  // //   // const selectedData = data.find(item => item.id === id);
  // //   // const selectedIndex = selectedData ? data.indexOf(selectedData) : 0;

  // // }, [id]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (pictures.length || 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (pictures.length || 1)) % (pictures.length || 1));
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <img onClick={goToPrev} src={Arrow} alt="Flèche gauche" className="arrow left-arrow" />
        {pictures && pictures.length > 0 && (
          <img src={pictures[currentIndex]} alt="Couverture" className="cover-image" />
        )}
        <img onClick={goToNext} src={Arrow} alt="Flèche droite" className="arrow right-arrow" />
      </div>
    </div>
  );
}

export default Carousel;

// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import data from '../logements.json';
// import Arrow from '../assets/images/arrow.png';

// function Carousel() {
//   const [currentIndex, setCurrentIndex] = useState(0); // Initialisez à 0 ici
//   const { id } = useParams();
//   const pictures = data.find(item => item.id === id)?.pictures;

//   useEffect(() => {
//     // Mettez à jour l'index du carrousel lorsque l'id sélectionné change
//     const selectedData = data.find(item => item.id === id);
//     const selectedIndex = selectedData ? data.indexOf(selectedData) : 0;

//     // Mettez à jour l'index initial uniquement si pictures existe
//     setCurrentIndex(pictures && pictures.length > 0 ? 0 : 0);
//   }, [id, pictures]);

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % (pictures.length || 1));
//   };

//   const goToPrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + (pictures.length || 1)) % (pictures.length || 1));
//   };

//   return (
//     <div className="carousel-container">
//       <div className="carousel">
//         <img onClick={goToPrev} src={Arrow} alt="Flèche gauche" className="arrow left-arrow" />
//         {pictures && pictures.length > 0 && (
//           <img src={pictures[currentIndex]} alt="Couverture" className="cover-image" />
//         )}
//         <img onClick={goToNext} src={Arrow} alt="Flèche droite" className="arrow right-arrow" />
//       </div>
//     </div>
//   );
// }

// export default Carousel;





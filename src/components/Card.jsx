// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

// function Card({id, title, cover, onClick }) {
//     return (
//       <Link to="Logements">
//         <div className="card">
//           <img src={cover} alt="Cover" className="card_cover" />
//           <h1 className='card_title'>{title}</h1>
//         </div>
//       </Link>
//     );
//   }
  
//   Card.propTypes = {
//     cover: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired
//   };
  
//   export default Card;

// Card.jsx
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Card({ id, title, cover }) {
  return (
    <Link to={`Logements/${id}`}>
      <div className="card">
        <img src={cover} alt="Cover" className="card_cover" />
        <h1 className='card_title'>{title}</h1>
      </div>
    </Link>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Card;

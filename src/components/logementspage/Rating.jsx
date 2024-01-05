import React from "react";
import { useParams } from "react-router-dom";
import data from '../logements.json';
import '../styles/_Rating.scss'


function Rating() {
    const { id } = useParams();
    const logement = data.find(item => item.id === id) || {};
    const rating = logement.rating || 0; // Si le rating n'est pas défini, utilisez 0

    const generateStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            const starColor = i <= rating ? 'yellow' : 'gray';
            stars.push(<Star key={i} fill={starColor} />);
        }
        return stars;
    };

    return (
        <div>
            {generateStars()}
        </div>
    );
}

const Star = ({ fill }) => (
    <div className={`star ${fill}`} />
);

export default Rating;

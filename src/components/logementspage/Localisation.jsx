import { useParams } from "react-router-dom";
import data from '../logements.json';

function Localisation() {
    const { id } = useParams();

    // Utilisez l'id pour trouver le titre correspondant dans vos données (logements.json)
    const location  = data.find(item => item.id === id)?.location || "Titre par défaut";

    return (
        <div>
            <h2 className="location">{location}</h2>
        </div>
    );
}

export default Localisation;
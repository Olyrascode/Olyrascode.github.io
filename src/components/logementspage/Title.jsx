import { useParams } from "react-router-dom";
import data from '../logements.json';

function Title() {
    const { id } = useParams();

    // Utilisez l'id pour trouver le titre correspondant dans vos données (logements.json)
    const title = data.find(item => item.id === id)?.title || "Titre par défaut";

    return (
        <div>
            <h1 className="titleLogement">{title}</h1>
        </div>
    );
}

export default Title;

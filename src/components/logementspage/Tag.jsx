import { useParams } from "react-router-dom";
import data from '../logements.json';

function Tag() {
   
    const { id } = useParams();
    const tag  = data.find(item => item.id === id)?.tags || "Tags du logement";
   
    return (
        <div className="tagsDiv">
    <ul className="tagsLogement">
    {tag.map((item, index) =>
    <li className="tagsBox" key={index}>{item}</li>
    )}
    </ul>
    </div>
)
}

export default Tag
import { useState } from 'react';
import { useParams } from "react-router-dom";
import data from '../components/logements.json';

import Arrow from './assets/images/arrow.png';

// const { id } = useParams();
const Dropdown = () => {
    const [descriptionOpen, setDescriptionOpen] = useState(false);
    const [equipementsOpen, setEquipementsOpen] = useState(false);

    const toggleDescription = () => {
        setDescriptionOpen(!descriptionOpen);
    };

    const toggleEquipements = () => {
        setEquipementsOpen(!equipementsOpen);
    };
    const { id } = useParams();
    const descriptionContent = data.find(item => item.id === id)?.description || 'Description du logement';
    const equipementContent = data.find(item => item.id === id)?.equipments || 'Equipement du logement';

    return (
        <div className='item'>
            <div className='item_box'>
                <div className='item_content'>

                <h1>Description</h1>
                <div
                    className={`arrow_div ${descriptionOpen ? 'arrow-rotate' : ''} ${descriptionOpen === false ? 'arrow-reverse' : ''}`}
                    onClick={toggleDescription}
                    >
                    <img className='arrow' src={Arrow} alt="fleche boite" />
                </div>
                    </div>
            {descriptionOpen && (
                <div className='item_text'>
                    <p>{descriptionContent}</p>
                </div>
            )}
            </div>
      
                <div className='item_box'>
                    <div className='item_content'>

                    <h1>Equipements</h1>
                    <div
                        className={`arrow_div ${equipementsOpen ? 'arrow-rotate' : ''} ${equipementsOpen === false ? 'arrow-reverse' : ''}`}
                        onClick={toggleEquipements}
                        >
                        <img className='arrow' src={Arrow} alt="fleche boite" />
                    </div>
                    </div>
                    {equipementsOpen && (
                        <div className='item_text'>
                            <ul>
                            {equipementContent.map((item, index) =>
                            <li key={index}>{item}</li>
                            )}
                            </ul>
                        </div>)}

                </div>
             </div>
    );
};

export default Dropdown


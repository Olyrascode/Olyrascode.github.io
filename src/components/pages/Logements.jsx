
// import { useParams } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Dropdown from "../Dropdown";
import Carousel from "../logementspage/Caroussel";

import Title from '../logementspage/Title';
import Localisation from "../logementspage/Localisation";
import Tag from '../logementspage/Tag';
import Host from '../logementspage/Host';
import Rating from '../logementspage/Rating';

function Logements() {
    // const { id } = useParams(); // Utilisez useParams pour obtenir les paramètres d'URL



    return (
        <div>
            <Header />
            <Carousel />
            <div className="logementinfos">
                <div className="logementHostlocation">
                    <div className="leftPanel">
            <Title />
            <Localisation />
            <Tag />
                    </div>
            <div className="rightPanel">
            <Host />
            <Rating />
            </div>
                </div>
                <div className="dropdown">
            <Dropdown />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Logements;

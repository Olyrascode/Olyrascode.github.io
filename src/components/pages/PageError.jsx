import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

function PageError() {
    return (
        <div>
            <Header />
            <div className='error'>
                <p className="errorNumber">404</p>
                <p className="errorText"> Oups! La page que vous demandez n existe pas.</p>
                <Link className='returnHome' to="/">Retourner sur la page d acceuil</Link>
            </div>
            <Footer />
        </div>
    )
}
export default PageError;
import BannerHome from './assets/images/bannerHome.png';
function Banner() {
    return (
        <div className='banner'>
            <img className='banner_img' src={BannerHome} alt="banniere image" />
            <h1 className="banner_tilte">Chez vous, partout et ailleurs</h1>
        </div>
    )
}export default Banner
import pic from '../components/data.png';
import '../components/Header.css'
function Header(){
    return(
        <>
        <div className="header">
            <div className='header-content'>
                <img src={pic} alt="" />
                <h1>Market Dashboard</h1>
            </div>
        </div>
        </>
    )
}
export default Header;
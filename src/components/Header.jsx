import HeaderMenu from "./HeaderMenu";
import ProfileImage from "../images/tuka.png";
import "../styles/Header.css";

const Header = () => {
    return(
        <div className='header-app'>
            <div className="header-app-menu">
                <HeaderMenu title= {'Gmail'} />
                <HeaderMenu title= {'Images'} />
                <ProfileImage />
            </div>
        </div>
    )
}

export default Header;
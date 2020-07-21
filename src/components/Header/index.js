import React from "react";
import Logo from "../../assets/img/logo.svg";
import Background from "../../assets/img/header-background.svg";


const Header = ()=>{
    return( 
        <header className="header" style={{backgroundImage: `url(${Background})`}}>
            <img className="header__logo" src={Logo} alt="logo"></img>
        </header>
    )
}

export default Header;
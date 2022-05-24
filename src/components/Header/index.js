import React from "react";
import Menu from "../Menu";
import Icon from "../Icon";
import image from "../../assets/imgs/Logo.png";
import "./Header.scss";


function Header( {user} ) {

    return(
        <div className="header">
            <img src={image} alt="Icon"/>
            <Menu></Menu>
            <Icon user={user}></Icon>
        </div>
    );

}

export default Header;
import React from "react";
import Menu from "../Menu";
import Icon from "../Icon";
import image from "../../assets/imgs/Logo.png";
import "./Header.scss";


function Header() {

    return(
        <div className="header">
            <img src={image} alt="Icon"/>
            <Menu></Menu>
            <Icon></Icon>
        </div>
    );

}

export default Header;
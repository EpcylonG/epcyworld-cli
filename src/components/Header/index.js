import React from "react";
import Menu from "../Menu";
import Icon from "../Icon";
import image from "../../assets/imgs/Logo.png";
import Button from "../Button";
import "./Header.scss";


function Header( {user} ) {

    return(
        <div className="header">
            <img src={image} alt="Icon"/>
            <Menu></Menu>
            { user && user.id ? <Icon user={user}></Icon> : <Button redirect="/login">Sign In</Button> }
        </div>
    );

}

export default Header;
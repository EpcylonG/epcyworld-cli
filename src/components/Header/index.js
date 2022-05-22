import React from "react";
import Menu from "../Menu";
import Icon from "../Icon";
import "./Header.scss";


function Header() {

    return(
        <div className="header">
            <Menu></Menu>
            <Icon></Icon>
        </div>
    );

}

export default Header;
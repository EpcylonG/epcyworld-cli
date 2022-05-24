import React from "react";
import MenuItem from "../MenuItem";

import "./Menu.scss";

function Menu() {

    const menuArray = ["Home", "Glosary", "About Game", "FAQ", "Other Games"]


    return(
        <div className="menu">
            {menuArray.map(item => {
                return (
                    <div key={item}>
                        <MenuItem>{item}</MenuItem>
                    </div>
                );
            })}
        </div>
    );

}

export default Menu;
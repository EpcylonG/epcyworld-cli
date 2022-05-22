import React from "react";

import "./MenuItem.scss";


function MenuItem( { children }) {

    return(
        <button className="menu-item" onClick={() => {console.log("")}}>
            {children}
        </button>
    );

}

export default MenuItem;
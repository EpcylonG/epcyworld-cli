import React from "react";
import { useNavigate } from "react-router-dom";

import "./MenuItem.scss";


function MenuItem( { redirect, children }) {

    const navigate = useNavigate();

    return(
        <button className="menu-item" onClick={() => {navigate(redirect)}}>
            {children}
        </button>
    );

}

export default MenuItem;
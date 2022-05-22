import React from "react";
import { useNavigate } from "react-router-dom";

function Button() {

    const navigate = useNavigate();

    function handleClick(redirect){
        switch(redirect){
            case "/": navigate("/"); break;
            case "/profile": navigate("/profile"); break;
            default: break;
        }
    }

    return(
        <>
            <button onClick={() => handleClick("/")}>Home</button>
            <button onClick={() => handleClick("/profile")}>Profile</button>
        </>
    );

}

export default Button;
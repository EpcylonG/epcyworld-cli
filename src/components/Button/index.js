import React from "react";
import { useNavigate } from "react-router-dom";

function Button( { redirect, type, onClick, children}) {

    const navigate = useNavigate();

    function handleClick(){
        if(!redirect) { onClick(); return; }
        switch(redirect){
            case "/": navigate("/"); break;
            case "/profile": navigate("/profile"); break;
            case "/login": navigate("/login"); break;
            case "/signup": navigate("/signup"); break;
            default: break;
        }
    }

    return(
        <>
            <button type={type} onClick={() => handleClick()}>{children}</button>
        </>
    );

}

export default Button;
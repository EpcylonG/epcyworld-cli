import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { removeUser } from "../../redux/user-slice";

function Profile( { user } ) {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(!user.isLogged) navigate("/");
    })

    function logOut(){
        dispatch(removeUser());
        navigate("/");
    }
    
    return(
        <div>
            <h1>
                Profile Page
            </h1>
            
            <Button onClick={() => {logOut()}}>Logout</Button>
            <Button redirect="/">Home</Button>
        </div>
    );
    
}

export default Profile;
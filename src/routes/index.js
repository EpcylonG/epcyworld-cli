import React from "react";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from 'react-redux';
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import SignUp from "../pages/SignUp";

function Router(){

    const user = useSelector((state) => state.user);

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home user={user}/> } />
                <Route path="/profile" element={ <Profile user={user}/> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="/signup" element={ <SignUp /> } />
            </Routes>
        </BrowserRouter>
    );
    
}

export default Router;
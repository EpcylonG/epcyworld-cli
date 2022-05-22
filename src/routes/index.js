import React from "react";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Button from "../components/Button";
import Home from "../pages/Home";
import Profile from "../pages/Profile";

function Router(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/profile" element={ <Profile /> } />
            </Routes>
            <Button></Button>
        </BrowserRouter>
    );
    
}

export default Router;
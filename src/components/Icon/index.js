import React from "react";
import image from "../../assets/imgs/default_profile.png";
import "./Icon.scss";

function Icon(){

    return(
        <div className="profile-img">
            <img src={image} alt="Icon"/>
        </div>
    );

}

export default Icon;
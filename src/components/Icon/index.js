import React, { useRef } from "react";
import image from "../../assets/imgs/default_profile.png";
import "./Icon.scss";

function Icon(){

    const ref = useRef(null);

    // const [profilePicture, setProfilePicture ]= useState(image)

    function handleClick(){ ref.current.click(); }

    function handleAccept(){
        console.log(ref.current.value);
        //! CROP AND UPLOAD

    }

    return(
        <div className="profile-img" onClick={handleClick}>
            <img src={image} alt="Icon"/>
            <input type="file" ref={ref} style={{display: 'none'}} accept=".png, .jpg, .jpeg" onChange={handleAccept}/>
        </div>
    );

}

export default Icon;
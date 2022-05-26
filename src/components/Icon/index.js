import React, { useRef } from "react";
import image from "../../assets/imgs/default_profile.png";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import "./Icon.scss";

function Icon( {user} ){

    const ref = useRef(null);
    const navigate = useNavigate();


    // const [profilePicture, setProfilePicture ]= useState(image)

    function handleClick(){ 
        // ref.current.click(); 
        navigate("/profile")
    }

    function handleAccept(){
        console.log(ref.current.value);
        //! CROP AND UPLOAD

    }

    return(
        <>
            {user && user.email ? user.email:
                <><Button redirect="/login">Login</Button>
                <Button redirect="/signup">Register</Button></>
            }
            <div className="profile-img" onClick={handleClick}>
                <img src={image} alt="Icon"/>
                <input type="file" ref={ref} style={{display: 'none'}} accept=".png, .jpg, .jpeg" onChange={handleAccept}/>
            </div>
        </>
    );

}

export default Icon;
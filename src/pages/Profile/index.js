import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { removeUser } from "../../redux/user-slice";
import {
    ref,
    uploadBytes
  } from 'firebase/storage';
  import { storage } from '../../db/firebase';

function Profile( { user } ) {

    const file = useRef(null);
    const [fileUpload, setFileUpload] = useState()
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(!user.isLogged) navigate("/");
    })

    const handleChange = (e) => { 
        file.current.click();
        setFileUpload(e)
    }
    
    function handleAccept(){
        const imgRef = ref(storage, `profile-images/` + fileUpload.name);
        console.log(fileUpload)
        uploadBytes(imgRef, fileUpload);
    }

    function logOut(){
        dispatch(removeUser());
        navigate("/");
    }
    
    return(
        <div>
            <h1>
                Profile Page
            </h1>
            <h2>Upload Gif</h2>
            <input type="file" ref={file} accept=".gif" onChange={handleChange}></input>
            <h2>Upload Meme</h2>
            <input type="file" ref={file} accept=".png, .jpg, .jpeg" onChange={(e) => handleChange(e.target.files[0])}></input>
            <Button onClick={() => {handleAccept()}}>Upload</Button>
            <Button onClick={() => {logOut()}}>Logout</Button>
            <Button redirect="/">Home</Button>
        </div>
    );
    
}

export default Profile;
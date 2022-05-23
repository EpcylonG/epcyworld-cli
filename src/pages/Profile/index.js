import React from "react";
import { useSelector } from 'react-redux';

function Profile() {

    const user = useSelector((state) => state.user);
    
    return(
        <div>
            <h1>
                Profile Page
            </h1>
            {user.email}
        </div>
    );
    
}

export default Profile;
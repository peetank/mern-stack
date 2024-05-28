import React, {useContext} from "react";
import ChangeProfile from "../components/ChangeProfile";
import { AppContext } from "../App";

const Profile = () => {
    const {username} = useContext(AppContext);
    return (
        <div> 
            Profile Page. Username is: {username}  
            <ChangeProfile />
        </div>
    )
}

export default Profile;
import React, { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import {auth} from "../../firebase.js";

function ProfilePage () {
  const user = useContext(UserContext);
  const {photoURL, displayName, email} = user;
  
  return (
    <div className = "mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8">
      <div className="flex flex-col items-center">
        <div
          style={{
            background: `url(${photoURL || 'https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png'})  no-repeat center center`,
            backgroundSize: "cover",
            height: "80px",
            width: "80px"
          }}
          className="border border-yellow-300">
        </div>
        <div className = "md:pl-4">
          <h2 className = "text-2xl font-semibold">{displayName}</h2>
          <h3 className = "italic">{email}</h3>
        </div>
      </div>
      <button className = "w-full py-3 bg-red-600 mt-4 text-white" onClick = {() => {auth.signOut()}}>Sign out</button>
    </div>
  ) 
};

export default ProfilePage;


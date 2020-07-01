import React, { useContext } from "react";
import { Router } from "@reach/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ItemsPage from "./ItemsPage";
import { UserContext } from "../providers/UserProvider"; 
import PasswordReset from "./PasswordReset";


function Application() {
  const user = useContext(UserContext);
  return (
        user ? <ItemsPage /> :
        <Router>
          <SignUp path="signUp" />
          <SignIn path="/" />
          <PasswordReset path = "passwordReset" />
          {/* <ProfilePage path = "profilePage"/> */}
        </Router>
      
  );
}

export default Application;

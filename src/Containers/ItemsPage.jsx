import React, { useContext } from "react";
import Items from "../Components/Items"
import ProfilePage from "../Components/ProfilePage"
import UserProvider from "../providers/UserProvider";

function ItemsPage() {  
  return (
    <UserProvider>
      <Items/>
    </UserProvider>
  );
}

export default ItemsPage;

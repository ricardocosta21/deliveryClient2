import React, { useContext } from "react";
import Items from "../Components/Items"
import UserProvider from "../providers/UserProvider";

function ItemsPage() {  
  return (
    <UserProvider>
      <Items/>
    </UserProvider>
  );
}

export default ItemsPage;

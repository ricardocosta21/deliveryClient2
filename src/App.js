import React, { useContext } from "react";
import Application from "./Containers/Application";
import UserProvider from "./providers/UserProvider";

function App() {  
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}

export default App;

import React, { useContext } from "react";
import {Switch, Route, BrowserRouter as Router, withRouter} from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { UserContext } from "../providers/UserProvider";
import PasswordReset from "./PasswordReset";
import ProfilePage from "../Components/ProfilePage";
import PageNotFound from "../Components/PageNotFound";
import Items from "../Components/Items";

function Application() {
  const user = useContext(UserContext);
  return user ? (
    <Items />
  ) : (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={withRouter(SignIn)} />
          <Route path="/passwordreset" component={withRouter(PasswordReset)} />
          <Route path="/signup" component={withRouter(SignUp)} />
          <Route path="/profilepage" component={withRouter(ProfilePage)} />
          <Route path="" component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default Application;

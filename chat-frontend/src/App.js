import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Chat from "./Chat";
import Login from "./Login";

import UnauthedRoute from "./UnauthedRoute";
import AuthedRoute from "./AuthedRoute";

const App = () => (
  <Router>
    <Switch>
      <UnauthedRoute path="/auth/login" component={Login} />
      <AuthedRoute path="/" component={Chat} />
    </Switch>
  </Router>
);

export default App;

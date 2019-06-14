import React from "react";
import Navbar from "./components/Navbar";
import { Container } from "semantic-ui-react";
import { Switch, Route } from "react-router-dom";
import AccountProfile from "./components/AccountProfile";

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path='/' render={() => <div>Home</div>} />
        <Route
          exact
          path='/account/profile'
          render={() => <AccountProfile />}
        />
      </Switch>
    </Container>
  </>
);

export default App;

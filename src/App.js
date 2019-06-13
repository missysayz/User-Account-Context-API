import React from "react";
import Navbar from "./components/Navbar";
import { Container } from "semantic-ui-react";
import { Switch, Route } from "react-router-dom";
import AccountForm from "./components/AccountForm";

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path='/' render={() => <div>Home</div>} />
        <Route exact path='/components/AccountForm' component={AccountForm} />
      </Switch>
    </Container>
  </>
);

export default App;

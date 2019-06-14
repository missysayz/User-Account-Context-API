import React from "react";
import Navbar from "./components/Navbar";
import { Container, Header } from "semantic-ui-react";
import { Switch, Route } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import styled from "styled-components";

const AppContainer = styled.div`
  background: linear-gradient(to bottom right, aliceblue, black);
`;

const App = () => (
  <>
    <Navbar />
    <AppContainer>
      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <div>
              <Header as='h1' textAlign='center'>
                User Account with React Context API{" "}
              </Header>
            </div>
          )}
        />
        <Route exact path='/user/profile' render={() => <UserProfile />} />
      </Switch>
    </AppContainer>
  </>
);

export default App;

import React from "react";
import { Card } from "semantic-ui-react";
import { UserConsumer } from "../providers/UserProvider";

const Account = () => (
  <UserConsumer>
    {value => (
      <Card>
        <Card.Content>
          <Card.Header>
            {value.firstName}
            {value.lastName}
          </Card.Header>
          <Card.Meta>Email {value.email}</Card.Meta>
        </Card.Content>
        <Card.Content>
          <p>Avatar {value.avatar}</p>
        </Card.Content>
        <Card.Content>
          <p>Favorite color {value.favoriteColor}</p>
        </Card.Content>
      </Card>
    )}
  </UserConsumer>
);

export default Account;

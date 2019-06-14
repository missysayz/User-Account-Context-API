import React, { useContext } from "react";
import { Card } from "semantic-ui-react";
import { UserContext } from "../providers/UserProvider";

const User = () => {
  const { firstName, lastName, email, avatar, favoriteColor } = useContext(
    UserContext
  );

  return (
    <Card>
      <Card.Content>
        <Card.Header>
          {firstName}
          {lastName}
        </Card.Header>
        <Card.Meta>Email {email}</Card.Meta>
      </Card.Content>
      <Card.Content>
        <p>Avatar {avatar}</p>
      </Card.Content>
      <Card.Content>
        <p>Favorite color {favoriteColor}</p>
      </Card.Content>
    </Card>
  );
};

export default User;

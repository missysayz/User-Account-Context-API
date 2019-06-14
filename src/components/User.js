import React, { useContext } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { UserContext } from "../providers/UserProvider";

const User = () => {
  const { firstName, lastName, email, avatar, favoriteColor } = useContext(
    UserContext
  );

  return (
    <Card color='blue'>
      <Card.Content>
        <Image floated='right' size='mini' src='/missy-small.png' />
        <Icon name='user' />
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
        <p>Favorite color: {favoriteColor}</p>
      </Card.Content>
    </Card>
  );
};

export default User;

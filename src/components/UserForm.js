import React from "react";
import { Form } from "semantic-ui-react";
import { UserConsumer } from "../providers/UserProvider";

class UserForm extends React.Component {
  state = {
    firstName: this.props.firstName,
    lastName: this.props.lastName,
    email: this.props.email,
    avatar: this.props.avatar,
    favoriteColor: this.props.favoriteColor
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = e => {
    e.preventDefault();
    const user = { ...this.state };
    this.props.updateUser(user);
  };

  render() {
    const { firstName, lastName, email, avatar, favoriteColor } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label='New First Name'
          type='text'
          name='firstName'
          value={firstName}
          onChange={this.handleChange}
        />
        <Form.Input
          label='New Last Name'
          type='text'
          name='lastName'
          value={lastName}
          onChange={this.handleChange}
        />
        <Form.Input
          label='New E-mail'
          type='text'
          name='email'
          value={email}
          onChange={this.handleChange}
        />
        <Form.Input
          label='Avatar'
          type='image'
          name='avatar'
          value={avatar}
          onChange={this.handleChange}
        />
        <Form.Select
          label='Favorite Color'
          name='favoriteColor'
          value={favoriteColor}
          onChange={this.handleChange}
          options={colorOptions}
        />
        <Form.Button color='blue'>Save</Form.Button>
      </Form>
    );
  }
}

const ConnectedUserForm = props => {
  return (
    <UserConsumer>
      {value => (
        <UserForm
          {...props}
          firstName={value.firstName}
          lastName={value.lastName}
          email={value.email}
          avatar={value.avatar}
          favoriteColor={value.favoriteColor}
          updateUser={value.updateUser}
        />
      )}
    </UserConsumer>
  );
};

const colorOptions = [
  { key: "r", text: "Red", value: "Red" },
  { key: "b", text: "Blue", value: "Blue" },
  { key: "y", text: "Yellow", value: "Yellow" },
  { key: "o", text: "Orange", value: "Orange" },
  { key: "g", text: "Green", value: "Green" },
  { key: "a", text: "Aqua", value: "Aqua" }
];

export default ConnectedUserForm;

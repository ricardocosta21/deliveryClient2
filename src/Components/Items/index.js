/*
 * FeaturePage
 *
 * List all the features
 */
import React from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";

import Contacts from "../Contacts";
import Form from "../Form";
import styles from "./Items.css";

export default class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      newName: "",
      contacts: [],
    };

    this.handleChange = this.handleIdChange.bind(this);
    this.handleChange = this.handleNameChange.bind(this);
    this.handleChange = this.handleNewNameChange.bind(this);

    this.handlePost = this.handlePost.bind(this);
    this.handleGetAll = this.handleGetAll.bind(this);
    this.handlePut = this.handlePut.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleIdChange = (event) => {
    this.setState({
      id: event.target.value,
    });
  };

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleNewNameChange = (event) => {
    this.setState({
      newName: event.target.value,
    });
  };

  Item(id, name) {
    this.id = id;
    this.name = name;
  }

  // Get Message
  handleGetAll(e) {
    fetch(
      "http://ec2-18-222-140-190.us-east-2.compute.amazonaws.com:8888/api/categories"
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ contacts: data });
      })
      .catch(console.log);
    // added debug message
    //e.preventDefault();
  }

  // Post Message
  handlePost(e) {
    fetch(
      "http://ec2-18-222-140-190.us-east-2.compute.amazonaws.com:8888/api/categories",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: Number(this.state.id),
          name: this.state.name,
        }),
      }
    ).then(() => {
      this.handleGetAll();
    });

    e.preventDefault();
  }

  // Put Message
  handlePut(e) {
    fetch(
      "http://ec2-18-222-140-190.us-east-2.compute.amazonaws.com:8888/api/categories?newName=" +
        this.state.newName,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: Number(this.state.id),
          name: this.state.name,
        }),
      }
    ).then(() => {
      this.handleGetAll();
    });

    e.preventDefault();
  }

  // Delete Message
  handleDelete(e) {
    fetch(
      "http://ec2-18-222-140-190.us-east-2.compute.amazonaws.com:8888/api/categories?id=" +
        this.state.id,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      this.handleGetAll();
    });

    e.preventDefault();
  }

  componentDidMount() {
    this.handleGetAll();
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Items">
        <FormGroup className="something" controlId="id" bsSize="large">
          <input
            autoFocus
            type="id"
            value={this.state.id}
            onChange={this.handleIdChange}
          />
        </FormGroup>

        <FormGroup className="something" controlId="name" bsSize="large">
          <FormControl
            type="name"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </FormGroup>
        <div className="Buttons">
          <Button onClick={this.handleGetAll}>Get</Button>
          <Button onClick={this.handlePost}>Post</Button>
          <Button onClick={this.handlePut}>Put</Button>
          <input
            type="text"
            value={this.state.newName}
            onChange={this.handleNewNameChange}
          />
          <Button onClick={this.handleDelete}>Delete</Button>
        </div>
        
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}

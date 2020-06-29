import React, {View} from "react";
import styles from "./Contacts.css";

import {Card, Button, ListGroup} from "react-bootstrap";

const Contacts = ({ contacts }) => (
  <div className="cardContainer">
    <center>
      <h1>Contact List</h1>

      {contacts.map((contact, index) => (
        <div key={index}>
          <Card className="cardContainer"> 
            <Card.Body className="DottedBox">
              <Card.Title>{contact.id} - {contact.name}</Card.Title>
            </Card.Body>
          </Card>
        </div>
      ))}
    </center>

  </div>
);

export default Contacts;

/*
 * FeaturePage
 *
 * List all the features
 */
import React, { useContext, useState, useEffect } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import ReactDOM from 'react-dom';
import Contacts from "../Contacts";
import Form from "../Form";
import styles from "./Items.css";
import { UserContext } from "../../providers/UserProvider";
import { navigate } from "@reach/router";
import { auth } from "../../firebase";
import ProfilePage from "../../Containers/ProfilePage.jsx";

function Items() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [newName, setNewName] = useState("");
  const [contacts, setContacts] = useState([]);

  // state = {
  //   id: "",
  //   name: "",
  //   newName: "",
  //   contacts: [],
  // };

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNewNameChange = (e) => {
    setNewName(e.target.value);
  };

  // const Item = (id, name) => {
  //   this.id = id;
  //   this.name = name;
  // };

  // Get Message
  const handleGetAll = (e) => {
    fetch(
      "http://ec2-18-222-140-190.us-east-2.compute.amazonaws.com:8888/api/categories"
    )
      .then((res) => res.json())
      .then((data) => {
        setContacts({ data });
      })
      .catch(console.log);
    // added debug message
    //e.preventDefault();
  };

  // Post Message
  const handlePost = (e) => {
    fetch(
      "http://ec2-18-222-140-190.us-east-2.compute.amazonaws.com:8888/api/categories",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: Number(id),
          name: name,
        }),
      }
    ).then(() => {
      handleGetAll();
    });

    e.preventDefault();
  };

  // Put Message
  const handlePut = (e) => {
    fetch(
      "http://ec2-18-222-140-190.us-east-2.compute.amazonaws.com:8888/api/categories?newName=" +
        newName,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: Number(id),
          name: name,
        }),
      }
    ).then(() => {
      handleGetAll();
    });

    e.preventDefault();
  };

  // Delete Message
  const handleDelete = (e) => {
    fetch(
      "http://ec2-18-222-140-190.us-east-2.compute.amazonaws.com:8888/api/categories?id=" +
        id,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      handleGetAll();
    });

    e.preventDefault();
  };

  useEffect(() => {
    setTimeout(() => {
      handleGetAll();
    });
  });

  // const componentDidMount = () => {
  //   this.handleGetAll();
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  //  const user = useContext(UserContext);

  return (
    <div className="Items">
      <FormGroup className="something" controlId="id" bsSize="large">
        <input autoFocus type="id" value={id} onChange={handleIdChange} />
      </FormGroup>

      <FormGroup controlId="name" bsSize="large">
        <FormControl type="name" value={name} onChange={handleNameChange} />
      </FormGroup>
      <div className="Buttons">
        <Button onClick={handleGetAll}>Get</Button>
        <Button onClick={handlePost}>Post</Button>
        <Button onClick={handlePut}>Put</Button>
        <input type="text" value={newName} onChange={handleNewNameChange} />
        <Button onClick={handleDelete}>Delete</Button>
      </div>


      {/* <Contacts contacts={contacts} /> */}

        {/* ReactDOM.render(
    <Contacts contacts={contacts} />,
    document.getElementById('root') */}

      {/* <ProfilePage/> */}

      {/* <div className="image-gallery" hidden={!selectedProduct}>
          <ProductImage product={selectedProduct} />
          <ProductThumbs selectProduct={selectProduct} catalogs={catalogs} />
        </div> */}

    </div>
  );
}

export default Items;

import React, {View} from "react";
import styles from "./Contacts.css";
import {Card} from "react-bootstrap";


function Contacts({ contacts }) {

  // const contacts1 = ['alligator', 'snake', 'lizard'];

  return (
    <div className="image-scroller">
      {contacts.map((contact, index) => (
        <div key={index} >
          <Card.Title>{contact.id}</Card.Title>
        </div>
      ))}
    </div>
  );
}

// const Contacts = (contacts) => {

//    return (
//   <div>
//     <center>
//       <h1>Contact List</h1>


//       {contacts.map((contact, index) => (
//         <div key={index}>
//           <Card className="cardContainer"> 
//             <Card.Body>
//               <Card.Title>{contact.id} - {contact.name}</Card.Title>
//             </Card.Body>
//           </Card>
//         </div>
//       ))}
//     </center>

//   </div>
//    )
// };

export default Contacts;

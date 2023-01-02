import { Delete } from "@material-ui/icons";
import React from "react";

const Profile = ({
  id,
  fname,
  lname,
  username,
  email,
  address,
  phone,
  gender,
  onDelete
}) => {

  function handleDelete() {
    onDelete(id)
  }

  return (
    <section>
    <div className="delete" onClick={handleDelete}>
        <Delete />
      </div>
      <div className="">
        <h4>First Name</h4>
        <p>{fname}</p>
      </div>
      <div className="">
        <h4>Last Name</h4>
        <p>{lname}</p>
      </div>
      <div className="">
        <h4>UserName</h4>
        <p>{username}</p>
      </div>
      <div className="">
        <h4>Email</h4>
        <p>{email}</p>
      </div>
      <div className="">
        <h4>Address</h4>
        <p>{address}</p>
      </div>
      <div className="">
        <h4>Phone number</h4>
        <p>{phone}</p>
      </div>
      <div className="">
        <h4>Gender</h4>
        <p>{gender}</p>
      </div>
      
    </section>
  );
};

export default Profile;

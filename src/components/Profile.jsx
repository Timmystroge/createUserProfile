import React from "react";
// import { Link } from "react-router-dom";

const Profile = ({id, fname, lname, username, email,address, phone, gender}) => {
  return (
    <div className="profilecard">
      <h2>Profile Card</h2>
      <h4 className="link">
        {/* <Link to="/">Create Profile Card</Link> */}
      </h4>
      <div className="wrapper">
        <section>
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
      </div>
    </div>
  );
};

export default Profile;

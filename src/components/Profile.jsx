import React from "react";
// import { Link } from "react-router-dom";

const Profile = () => {
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
            <p>Lorem</p>
          </div>
          <div className="">
            <h4>Last Name</h4>
            <p>Lorem</p>
          </div>
          <div className="">
            <h4>UserName</h4>
            <p>Lorem</p>
          </div>
          <div className="">
            <h4>Email</h4>
            <p>Lorem</p>
          </div>
          <div className="">
            <h4>Address</h4>
            <p>Lorem</p>
          </div>
          <div className="">
            <h4>Phone number</h4>
            <p>Lorem</p>
          </div>
          <div className="">
            <h4>Gender</h4>
            <p>Lorem</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;

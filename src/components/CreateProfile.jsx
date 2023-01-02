import React, { useState } from "react";
// import { Link } from "react-router-dom";

const CreateProfile = (props) => {
  // user Details State
  const [UserDetails, setUserDetails] = useState({
    firstName: "",
    LastName: "",
    userName: "",
    emailAddress: "",
    address: "",
    phone: "",
    gender: "",
  });

  // get all inputed values from form
  function handleChnage(event) {
    // destructure event.targets
    const { name, value } = event.target;

    setUserDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  }

  // when form submit button clicked
  function handleClick(e) {
    // prevent form auto reloading
    e.preventDefault();

    // destructure all inout
    const { fname, lname, username, email, address, phone, gender } =
      UserDetails;

    // checking if one of the input fields is empty
    if (
      fname === "" ||
      lname === "" ||
      username === "" ||
      email === "" ||
      address === "" ||
      phone === "" ||
      gender === ""
    ) {
      alert("Empty Field! Please Fill all Inout Filed");
      return true;
    } else {
      props.onAdd(UserDetails);
      alert("Profile created");
    }
  }

  return (
    <>
      <main className="main">
        <h1>
          Create <code className="code">Profile</code>
        </h1>
        <form action="">
          <input
            type="text"
            onChange={handleChnage}
            name="firstName"
            placeholder="First Name"
          />
          <input
            type="text"
            onChange={handleChnage}
            name="LastName"
            placeholder="Last Name"
          />
          <input
            type="text"
            onChange={handleChnage}
            name="userName"
            placeholder="UserName"
          />
          <input
            type="text"
            onChange={handleChnage}
            name="emailAddress"
            placeholder="Email"
          />
          <input
            type="text"
            onChange={handleChnage}
            name="address"
            placeholder="Address"
          />
          <input
            type="text"
            onChange={handleChnage}
            name="phone"
            placeholder="Phone Number"
          />
          <select name="gender" onChange={handleChnage}>
            <option value="">--Select--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <button onClick={handleClick}> Create Profile </button>
        </form>
        <h4 className="link">
          {/* <Link to="/profile">View Profile Card</Link> */}
        </h4>
      </main>
    </>
  );
};

export default CreateProfile;

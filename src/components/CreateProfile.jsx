
import React, { useState } from "react";

const CreateProfile = (props) => {
  // isExpanded
  const [isExpanded, setIsExpanded] = useState(false);

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
      alert("Profile Created SuccessFully");
      // clear all input
      setUserDetails({
        firstName: "",
        LastName: "",
        userName: "",
        emailAddress: "",
        address: "",
        phone: "",
        gender: "",
      })
      // set isExpanded back to false
      setIsExpanded(false)
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
            value={UserDetails.firstName}
            onClick={() => {
              setIsExpanded(true);
            }}
          />

          {isExpanded && (
            <input
              type="text"
              onChange={handleChnage}
              name="LastName"
              placeholder="Last Name"
              value={UserDetails.LastName}
            />
          )}
          {isExpanded && (
            <input
              type="text"
              onChange={handleChnage}
              name="userName"
              placeholder="UserName"
              value={UserDetails.userName}
            />
          )}
          {isExpanded && (
            <input
              type="text"
              onChange={handleChnage}
              name="emailAddress"
              placeholder="Email"
              value={UserDetails.emailAddress}
            />
          )}
          {isExpanded && (
            <input
              type="text"
              onChange={handleChnage}
              name="address"
              placeholder="Address"
              value={UserDetails.address}
            />
          )}
          {isExpanded && (
            <input
              type="text"
              onChange={handleChnage}
              name="phone"
              placeholder="Phone Number"
              value={UserDetails.phone}
            />
          )}
          {isExpanded && (
            <select name="gender" onChange={handleChnage} value={UserDetails.gender}>
              <option value="">--Select--</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          )}
          {isExpanded && (
            <button onClick={handleClick}> Create Profile  </button>
          )}
        </form>
      </main>
    </>
  );
};

export default CreateProfile;

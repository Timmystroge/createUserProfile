import React, { useState } from "react";
import CreateProfile from "./components/CreateProfile";
import Profile from "./components/Profile";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NotFound from "./components/404";

const App = () => {
  // profile state
  const [createProfile, setProfile] = useState([]);

  // destructure all inout
  // const { fname, lname, username, email, address, phone, gender } = UserDetails;

  function addNewProfile(profile) {
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
      setProfile((prevProfile) => {
        return [...prevProfile, profile];
      });
      // feedback
      alert("profile created");
      console.log(createProfile)
    }
  }
  return (
    <>
      <div>
        <CreateProfile onAdd={addNewProfile}/>
        <Profile />
      </div>

      {/* <Router>
        <Routes>
          <Route exact path="/" element={<CreateProfile />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router> */}
    </>
  );
};

export default App;

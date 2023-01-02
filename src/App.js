import React, { useState } from "react";
import CreateProfile from "./components/CreateProfile";
import Profile from "./components/Profile";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NotFound from "./components/404";

const App = () => {
  // profile state
  const [createNewProfile, setProfile] = useState([]);

  function addNewProfile(profile) {
    setProfile((prevProfiles) => {
      return [...prevProfiles, profile];
    });
    console.log(createNewProfile);
  }
  return (
    <>
      <div>
        <CreateProfile onAdd={addNewProfile} />
        {createNewProfile.map((profileCreated, index) => {
          <Profile
            key={index}
            id={index}
            fname={profileCreated.firstName}
            lname={profileCreated.LastName}
            username={profileCreated.userName}
            email={profileCreated.emailAddress}
            address={profileCreated.address}
            phone={profileCreated.phone}
            gender={profileCreated.gender}
          />;
        })}
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

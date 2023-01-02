import React, { useState } from "react";
import CreateProfile from "./components/CreateProfile";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/404";

const App = () => {
  // show profile
  const [showProfile, setShowProfile] = useState(false);
  function showProfiles() {
    setShowProfile(true);
  }
  function hideProfiles() {
    setShowProfile(false);
  }
  // show profile ends

  // profile state
  const [createNewProfile, setProfile] = useState([]);

  function addNewProfile(profile) {
    setProfile((prevProfiles) => {
      return [...prevProfiles, profile];
    });
    console.log(createNewProfile);
  }

  //delet profile
  function deleteProfile(id) {
    if (confirm("Are you sure") === true) {
      setProfile((prevVals) => {
        return prevVals.filter((newValues, index) => {
          return index != id;
        });
      });
    } else {
      return false;
    }
  }
  
  return (
    <>
      {/* ======= Router ====== */}
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<CreateProfile onAdd={addNewProfile} />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
      {/* ======= Router ====== */}

      <div>
        <div className="profilecard">
          {createNewProfile != "" ? (
            showProfile === false ? (
              <button className="btn" onClick={showProfiles}>
                View Profile Card
              </button>
            ) : (
              <button className="btn" onClick={hideProfiles}>
                Hide Profile Card
              </button>
            )
          ) : null}
          {/* display profils if show profile is clicked */}
          {showProfile && (
            <div className="wrapper">
              {createNewProfile.map((profileCreated, index) => {
                return (
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
                    onDelete={deleteProfile}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;

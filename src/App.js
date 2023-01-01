import React from "react";
import CreateProfile from "./components/CreateProfile";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/404";

const App = () => {
  return (
    <>
      <div>
        {/* <CreateProfile /> */}
        {/* <Profile /> */}
      </div>

      <Router>
        <Routes>
          <Route exact path="/" element={<CreateProfile />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;

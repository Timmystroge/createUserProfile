import React from "react";
const Note = ({ key, title, content }) => {
  return (
    <>
      <main className="guestLayout">
        <div className="note">
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
      </main>
    </>
  );
};

export default Note;

import React from "react";

const ReactStylingPractice = () => {
  const date = new Date();
  const time = date.getHours();

  let greeting;

  let customStyle = {
    color: "",
  };

  if (time < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (time < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Evening";
    customStyle.color = "blue";
  }

  return (
    <div>
      <h1 className="heading" style={customStyle}>
        {greeting}
      </h1>
    </div>
  );
};

export default ReactStylingPractice;

import React from "react";

export const CommandList = ({ commandList }) => {
  return (
    <div>
      <ul>
        {commandList.map((command, index) => {
          return <li key={index}>{command}</li>;
        })}
      </ul>
    </div>
  );
};

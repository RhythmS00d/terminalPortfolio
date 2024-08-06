import React from "react";

export const CommandList = ({ commandList }) => {
  return (
    <section className="list-container">
      <ul>
        {commandList.map((command, index) => {
          return <li key={index}>{command}</li>;
        })}
      </ul>
    </section>
  );
};

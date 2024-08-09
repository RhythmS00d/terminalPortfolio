import React from "react";
import { UserStates } from "../contexts/AppContext";

export const CommandList = () => {
  const {commandList} = UserStates();
  
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

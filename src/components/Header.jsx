import React from "react";

import { UserStates } from "../contexts/AppContext";

export const Header = () => {
  const { setCurrentPage } = UserStates();
  return (
    <header>
      <div>
        <button
          value="Terminal"
          onClick={(e) => setCurrentPage(e.target.value)}
        >
          Terminal
        </button>
        <button value="Resume" onClick={(e) => setCurrentPage(e.target.value)}>
          Resume
        </button>
      </div>
    </header>
  );
};

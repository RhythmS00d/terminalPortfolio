import { useState } from "react";

// components imports
import { CommandList } from "./components/CommandList";
import { TerminalInput } from "./components/TerminalInput";
import { Resume } from "./components/Resume";
import { Header } from "./components/Header";

import "./App.css";

import { UserStates } from "./contexts/AppContext";

function App() {
  const { currentPage } = UserStates();

  return (
    <main>
      <Header />
      {currentPage === "Terminal" ? (
        <div className="content">
          <CommandList />
          <TerminalInput />
        </div>
      ) : (
        <Resume />
      )}
    </main>
  );
}

export default App;

import { useState } from "react";

// components imports
import { CommandList } from "./components/CommandList";
import { TerminalInput } from "./components/TerminalInput";
import { Resume } from "./components/Resume";
import { Header } from "./components/Header";

import "./App.css";

function App() {
  const [commandList, setCommandList] = useState([
    <div className="welcome-container">
      <p>
        <span className="visitor">visitor</span>@
        <span className="location">example</span>:-$ welcome
      </p>
      <p>Welcome to my terminal based portfolio. (Version 1.0.0)</p>
      <p>----</p>
      <p>
        This project's source code can be found in this{" "}
        <a target="_blank" href="https://github.com/RhythmS00d/terminalPortfolio">
          Github Repo
        </a>
        .
      </p>
      <p>----</p>
      <p>For a list of available commands, type 'help'.</p>
    </div>,
  ]);
  const [currentPage, setCurrentPage] = useState("Terminal");

  return (
    <main>
      <Header setCurrentPage={setCurrentPage} />
      {currentPage === "Terminal" ? (
        <div className="content">
          <CommandList commandList={commandList} />
          <TerminalInput setCommandList={setCommandList} />
        </div>
      ) : (
        <Resume />
      )}
    </main>
  );
}

export default App;

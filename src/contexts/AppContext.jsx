import { useState, useEffect, useContext, createContext } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [commandList, setCommandList] = useState([
    <div className="welcome-container">
      <p>
        <span className="visitor">visitor</span>@
        <span className="location">{window.location.host}</span>
        :-$ welcome
      </p>
      <p>Welcome to my terminal based portfolio. (Version 1.0.0)</p>
      <p>----</p>
      <p>
        This project's source code can be found in this{" "}
        <a
          target="_blank"
          href="https://github.com/RhythmS00d/terminalPortfolio"
        >
          Github Repo
        </a>
        .
      </p>
      <p>----</p>
      <p>For a list of available commands, type 'help'.</p>
    </div>,
  ]);
  const [currentPage, setCurrentPage] = useState("Terminal");

  const states = {currentPage, setCurrentPage, commandList, setCommandList}

  return <AppContext.Provider value={states}>{children}</AppContext.Provider>;
};

export const UserStates = () => {
  return useContext(AppContext);
};
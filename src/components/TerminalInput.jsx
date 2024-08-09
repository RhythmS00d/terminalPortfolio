import React from "react";
import { useState, useRef } from "react";

import { triggerCommand } from "../utils/triggerCommand";
import { UserStates } from "../contexts/AppContext";

export const TerminalInput = () => {
  const [inputValue, setInputValue] = useState("");
  const { setCommandList } = UserStates();
  const inputRef = useRef();

  const handleKeyDown = (key) => {
    if (inputValue.length < 1) return;

    if (key.toLowerCase() === "enter" || key.toLowerCase() === "return") {
      triggerCommand(inputValue, setCommandList);
      setInputValue("");
      inputRef.current.focus();
      inputRef.current.scrollIntoView();
    }
  };

  return (
    <section className="input-container">
      <label htmlFor="terminal-input">
        <span className="visitor">visitor</span>@
        <span className="location">{window.location.host}</span>
        :-$
        <input
          id="terminal-input"
          type="text"
          placeholder="Enter command here....."
          value={inputValue.toLowerCase()}
          onChange={(e) => setInputValue(e.target.value.toLowerCase())}
          autoFocus
          ref={inputRef}
          onKeyDown={(e) => handleKeyDown(e.key)}
        />
      </label>
    </section>
  );
};

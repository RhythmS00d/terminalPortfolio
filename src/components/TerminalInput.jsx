import React from "react";
import { useState, useRef } from "react";

import { triggerCommand } from "../utils/triggerCommand";

export const TerminalInput = ({ setCommandList, setModal, modal }) => {
  const [inputValue, setInputValue] = useState("/");
  const inputRef = useRef();

  const handleKeyDown = () => {
    if(inputValue.length < 2) return;

    if(inputValue.substring(1) === 'help') {
      setModal(true);
      inputRef.current.blur();
      return;
    }
    triggerCommand(inputValue, setCommandList)
    setInputValue("/");
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter command here....."
        value={inputValue.toLowerCase()}
        onChange={(e) =>
          e.target.value.length < 1 ? "/" : setInputValue(e.target.value)
        }
        autoFocus={!modal}
        ref={inputRef}
        onKeyDown={(e) => (e.key === "Enter" ? handleKeyDown() : () => {})}
      />
      <button type="button" onClick={handleKeyDown}>
        go
      </button>
    </div>
  );
};

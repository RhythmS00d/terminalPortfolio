import React from "react";
import { useState, useRef } from "react";

export const TerminalInput = ({ setCommandList }) => {
  const [inputValue, setInputValue] = useState("/");
  const inputRef = useRef();

  const handleKeyDown = () => {
    if(inputValue.length < 2) return;
    
    setCommandList((prev) => [...prev, inputValue]);
    setInputValue("/");
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter command here....."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        autoFocus
        ref={inputRef}
        onKeyDown={(e) => (e.key === "Enter" ? handleKeyDown() : () => {})}
      />
      <button type="button" onClick={handleKeyDown}>
        go
      </button>
    </div>
  );
};

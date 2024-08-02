import { useState } from "react";

// components imports
import { CommandList } from "./components/CommandList";
import { CustomButton } from "./components/CustomButton";
import { HelpModal } from "./components/HelpModal";
import { TerminalInput } from "./components/TerminalInput";

function App() {
  const [commandList, setCommandList] = useState([]);

  return (
    <main>
      <CommandList commandList={commandList} />
      <TerminalInput setCommandList={setCommandList} />
    </main>
  );
}

export default App;

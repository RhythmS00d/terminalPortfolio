import { useState } from "react";

// components imports
import { CommandList } from "./components/CommandList";
import { CustomButton } from "./components/CustomButton";
import { HelpModal } from "./components/HelpModal";
import { TerminalInput } from "./components/TerminalInput";

import "./App.css"

function App() {
  const [commandList, setCommandList] = useState([]);
  const [modal, setModal] = useState(false);

  return (
    <main>
      <HelpModal modal={modal} setModal={setModal}/>
      <CommandList commandList={commandList} />
      <TerminalInput setCommandList={setCommandList} setModal={setModal} modal={modal}/>
    </main>
  );
}

export default App;

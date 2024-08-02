import { CommandList } from "./components/CommandList";
import { CustomButton } from "./components/CustomButton";
import { HelpModal } from "./components/HelpModal";
import { TerminalInput } from "./components/TerminalInput";

function App() {
  return (
    <main>
      <CommandList />
      <CustomButton />
      <HelpModal />
      <TerminalInput />
    </main>
  );
}

export default App;

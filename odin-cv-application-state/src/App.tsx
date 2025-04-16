import { CVEdit } from "./components/CVEdit";
import { CVPreview } from "./components/CVPreview";
import { CVProvider } from "./context/CVProvider";

function App() {
  return (
    <CVProvider>
      <CVEdit /> <CVPreview />
    </CVProvider>
  );
}

export default App;

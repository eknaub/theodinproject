import { CVEdit } from "./components/CVEdit";
import { CVPreview } from "./components/CVPreview";
import { CVProvider } from "./context/CVProvider";
import "./app.css";

function App() {
  return (
    <CVProvider>
      <div className="appContainer">
        <CVEdit /> <CVPreview />
      </div>
    </CVProvider>
  );
}

export default App;

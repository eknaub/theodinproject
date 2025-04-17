import { useCVContext } from "../context/CVProvider";
import "./cvEdit/styles/cvEdit.css";

export function CVEditActions() {
  const { clearCvData, loadCvData } = useCVContext();

  return (
    <div className="cvEditButtons">
      <button onClick={clearCvData}>Clear CV</button>
      <button onClick={loadCvData}>Load CV</button>
    </div>
  );
}

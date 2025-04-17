import { useCVContext } from "../../context/CVProvider";
import "./styles/cvPreviewHeader.css";

export function CVPreviewHeader() {
  const { cvData } = useCVContext();

  return (
    <div className="cvPreviewHeader">
      <h1>{cvData.person.name}</h1>
      <div className="cvPreviewHeader_subinfo">
        <p>{cvData.person.email}</p>
        <p>{cvData.person.phone}</p>
        <p>{cvData.person.address}</p>
      </div>
    </div>
  );
}

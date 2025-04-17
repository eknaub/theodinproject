import { CVPreviewBody } from "./cvPreview/CVPreviewBody";
import { CVPreviewHeader } from "./cvPreview/CVPreviewHeader";
import "./cvPreview/styles/cvPreview.css";

export function CVPreview() {
  return (
    <div className="cvPreviewContainer">
      <CVPreviewHeader />
      <CVPreviewBody />
    </div>
  );
}

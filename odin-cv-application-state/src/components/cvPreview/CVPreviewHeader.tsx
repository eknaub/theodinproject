import { useCVContext } from "../../context/CVProvider";

export function CVPreviewHeader() {
  const { cvData } = useCVContext();

  return (
    <div>
      <h1>{cvData.person.name}</h1>
    </div>
  );
}

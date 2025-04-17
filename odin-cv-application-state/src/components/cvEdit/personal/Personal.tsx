import { useCVContext } from "../../../context/CVProvider";
import { CVEditWrapper } from "../CVEditWrapper";
import "../styles/cvEdit.css";

export function Personal() {
  const { cvData, updateCvData } = useCVContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateCvData({
      ...cvData,
      person: {
        ...cvData.person,
        [name]: value,
      },
    });
  };

  return (
    <CVEditWrapper>
      <h2>Personal Details</h2>
      <form className="cvEditForm">
        <label>
          Name
          <input
            type="text"
            name="name"
            value={cvData.person.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={cvData.person.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone
          <input
            type="tel"
            name="phone"
            value={cvData.person.phone}
            onChange={handleChange}
          />
        </label>
        <label>
          Address
          <input
            type="text"
            name="address"
            value={cvData.person.address}
            onChange={handleChange}
          />
        </label>
      </form>
    </CVEditWrapper>
  );
}

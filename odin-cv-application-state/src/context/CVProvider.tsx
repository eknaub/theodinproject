import { createContext, useContext, useState } from "react";
import { CV, Education, Experience } from "../utils/interfaces";
import { dummyCV, dummyCVWithEmptyFields } from "../utils/mockData";

interface CVContextType {
  cvData: CV;
  updateCvData: (newData: Partial<CV>) => void;
  editingEducationIndex: number | null;
  editingExperienceIndex: number | null;
  updateEditingEducationIndex: (index: number | null) => void;
  updateEditingExperienceIndex: (index: number | null) => void;
  handleEditEducation: (index: number) => void;
  toggleEducationVisibility: (index: number) => void;
  handleAddEducation: () => void;
  handleSaveEducation: (education: Education, isNew: boolean) => void;
  handleCancelEducation: () => void;
  handleDeleteEducation: () => void;
  handleEditExperience: (index: number) => void;
  handleAddExperience: () => void;
  handleSaveExperience: (experience: Experience, isNew: boolean) => void;
  handleCancelExperience: () => void;
  handleDeleteExperience: () => void;
  toggleExperienceVisibility: (index: number) => void;
  clearCvData: () => void;
  loadCvData: () => void;
}

const CVContext = createContext<CVContextType | null>(null);

export function CVProvider({ children }: { children: React.ReactNode }) {
  const [cvData, setCvData] = useState<CV>(dummyCV);
  const [editingEducationIndex, setEditingEducationIndex] = useState<
    number | null
  >(null);
  const [editingExperienceIndex, setEditingExperienceIndex] = useState<
    number | null
  >(null);

  const updateCvData = (newData: Partial<CV>) => {
    setCvData((prevData) => ({ ...prevData, ...newData }));
  };

  const updateEditingEducationIndex = (index: number | null) => {
    setEditingEducationIndex(index);
  };

  const updateEditingExperienceIndex = (index: number | null) => {
    setEditingExperienceIndex(index);
  };

  const handleCancelEducation = () => {
    setEditingEducationIndex(null);
  };

  const handleCancelExperience = () => {
    setEditingExperienceIndex(null);
  };

  const handleEditEducation = (index: number) => {
    setEditingEducationIndex(index);
  };

  const handleAddEducation = () => {
    setEditingEducationIndex(-1);
  };

  const handleSaveEducation = (education: Education, isNew: boolean) => {
    setEditingEducationIndex(null);

    if (isNew) {
      setCvData((prevData) => ({
        ...prevData,
        education: [...prevData.education, education],
      }));
    } else {
      setCvData((prevData) => {
        const updatedEducation = prevData.education.map((edu, i) =>
          i === editingEducationIndex ? education : edu
        );
        return { ...prevData, education: updatedEducation };
      });
    }
  };

  const handleDeleteEducation = () => {
    const updatedEducation = cvData.education.filter(
      (_, i) => i !== editingEducationIndex
    );
    updateCvData({ ...cvData, education: updatedEducation });
    setEditingEducationIndex(null);
  };

  const toggleEducationVisibility = (index: number) => {
    const updatedEducation = cvData.education.map((edu, i) =>
      i === index ? { ...edu, isVisible: !edu.isVisible } : edu
    );
    updateCvData({ ...cvData, education: updatedEducation });
  };

  const handleEditExperience = (index: number) => {
    setEditingExperienceIndex(index);
  };

  const handleAddExperience = () => {
    setEditingExperienceIndex(-1);
  };

  const handleSaveExperience = (experience: Experience, isNew: boolean) => {
    setEditingExperienceIndex(null);

    if (isNew) {
      setCvData((prevData) => ({
        ...prevData,
        experience: [...prevData.experience, experience],
      }));
    } else {
      setCvData((prevData) => {
        const updatedExperience = prevData.experience.map((exp, i) =>
          i === editingExperienceIndex ? experience : exp
        );
        return { ...prevData, experience: updatedExperience };
      });
    }
  };

  const handleDeleteExperience = () => {
    const updatedExperience = cvData.experience.filter(
      (_, i) => i !== editingExperienceIndex
    );
    updateCvData({ ...cvData, experience: updatedExperience });
    setEditingExperienceIndex(null);
  };

  const toggleExperienceVisibility = (index: number) => {
    const updatedExperience = cvData.experience.map((exp, i) =>
      i === index ? { ...exp, isVisible: !exp.isVisible } : exp
    );
    updateCvData({ ...cvData, experience: updatedExperience });
  };

  const clearCvData = () => {
    setCvData(dummyCVWithEmptyFields);
  };

  const loadCvData = () => {
    setCvData(dummyCV);
  };

  return (
    <CVContext.Provider
      value={{
        cvData,
        updateCvData,
        editingEducationIndex,
        editingExperienceIndex,
        updateEditingEducationIndex,
        updateEditingExperienceIndex,
        handleEditEducation,
        toggleEducationVisibility,
        handleAddEducation,
        handleSaveEducation,
        handleCancelEducation,
        handleDeleteEducation,
        handleEditExperience,
        handleAddExperience,
        handleSaveExperience,
        handleCancelExperience,
        handleDeleteExperience,
        toggleExperienceVisibility,
        clearCvData,
        loadCvData,
      }}
    >
      {children}
    </CVContext.Provider>
  );
}

export function useCVContext() {
  const context = useContext(CVContext);
  if (!context) {
    throw new Error("useCVContext must be used within a CVProvider");
  }
  return context;
}

import { createContext, useContext, useState } from "react";
import { CV } from "../utils/interfaces";
import { dummyCV } from "../utils/mockData";

const defaultContextValue = {
  cvData: dummyCV,
  setCvData: () => {},
};

const CVContext = createContext(defaultContextValue);

export function CVProvider({ children }: { children: React.ReactNode }) {
  const [cvData, setCvData] = useState<CV>(dummyCV);

  return (
    <CVContext.Provider value={{ cvData, setCvData }}>
      {children}
    </CVContext.Provider>
  );
}

export function useCVContext() {
  return useContext(CVContext);
}

import { Person, Education, Experience, CV } from "./interfaces";

export const dummyPerson: Person = {
  name: "Jane Smith",
  email: "janesmith@example.com",
  phone: "987-654-3210",
  address: "456 Elm St, Metropolis, USA",
};

export const dummyEducation: Education[] = [
  {
    institution: "Metropolis University",
    degree: "Master of Business Administration",
    startDate: "2018-09-01",
    endDate: "2020-06-15",
    location: "Metropolis, USA",
    isVisible: true,
  },
  {
    institution: "Metropolis College",
    degree: "Bachelor of Arts in Economics",
    startDate: "2014-09-01",
    endDate: "2018-06-15",
    location: "Metropolis, USA",
    isVisible: true,
  },
];

export const dummyExperience: Experience[] = [
  {
    company: "Global Corp",
    position: "Project Manager",
    startDate: "2021-01-01",
    endDate: "2024-12-31",
    location: "Metropolis, USA",
    description:
      "Led cross-functional teams to deliver projects on time and within budget.",
    isVisible: true,
  },
  {
    company: "Finance Solutions",
    position: "Analyst",
    startDate: "2020-07-01",
    endDate: "2020-12-31",
    location: "Metropolis, USA",
    description: "Conducted data analysis and prepared financial reports.",
    isVisible: true,
  },
];

export const dummyCV: CV = {
  person: dummyPerson,
  education: dummyEducation,
  experience: dummyExperience,
};

export const dummyCVWithEmptyFields: CV = {
  person: {
    name: "",
    email: "",
    phone: "",
    address: "",
  },
  education: [],
  experience: [],
};

export interface Person {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface Education {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  location: string;
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
}

export interface CV {
  person: Person;
  education: Education[];
  experience: Experience[];
}

export interface CV {
  basics: Basics;
  work: Array<Work>;
  volunteer: Array<Volunteer>;
  education: Array<Education>;
  awards: Array<Awards>;
  certificates: Array<Certificates>;
  publications: Array<Publications>;
  skills: Array<string>;
  languages: Array<Languages>;
  interests: Array<string>;
  references: Array<References>;
  projects: Array<Projects>;
  openGraph: OpenGraph;
}

import type { CertificateType, ProjectType } from './enums/cvTypes';

interface Basics {
  name: string;
  label: string;
  subLabel: string;
  subLabelAuthor: string;
  image: string;
  email: string;
  phone: string;
  url: string | null;
  summary: string;
  location: Location;
  profiles: Array<Profiles>;
}

interface Location {
  city: string;
  region: string;
}

interface Profiles {
  network: string;
  username: string;
  url: string;
}

interface Work {
  name: string;
  position: string;
  url: string;
  startDate: DateStr;
  endDate: DateStr | null;
  summary: string;
  highlights: Highlight;
}

type DateStr = `${string}-${string}-${string}`;

interface Volunteer {
  organization: string;
  position: string;
  url: string;
  startDate: DateStr;
  endDate: DateStr;
  summary: string;
  highlights: Highlight;
}

interface Awards {
  title: string;
  date: string;
  awarder: string;
  awarderUrl: string;
  summary: string;
  url: string;
}

interface Certificates {
  name: string;
  date: DateStr;
  issuer: string;
  issuerUrl: string;
  type: CertificateType; // Enum
  url: string;
  summary: string;
  highlights: Highlight;
}

interface Publications {
  name: string;
  publisher: string;
  publisherUrl: string;
  releaseDate: DateStr;
  url: string;
  summary: string;
}

interface Education {
  institution: string;
  url: string;
  area: string;
  studyType: string;
  startDate: DateStr | null;
  endDate: DateStr | null;
  courses: Array<Url>;
}

interface Url {
  name: string;
  url: string;
}

interface Languages {
  language: string;
  fluency: string;
}

interface Projects {
  name: string;
  type: ProjectType; // Enum
  description: string;
  highlights: Highlight;
  url: string | null;
  github?: string;
}

interface References {
  name: string;
  relationship: string;
  reference: string;
  url: string;
  image: string;
}

interface OpenGraph {
  titleOG: string;
  description: string;
  url: string;
  previewImage: string;
}

type Highlight = string[];

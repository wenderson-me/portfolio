export interface ExperienceItem {
  id: string;
  period: string;
  title: string;
  company: string;
  description: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  year: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin?: string;
  location: string;
}

export interface Language {
  code: 'pt' | 'en';
  name: string;
}

export interface Theme {
  mode: 'light' | 'dark';
}

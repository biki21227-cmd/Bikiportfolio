export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  liveUrl: string;
  githubUrl?: string;
  image: string;
  category: 'Full-Stack' | 'Web Apps' | 'APIs & Services';
  year: string;
  featured: boolean;
  status: 'Live Production' | 'Active';
  hosting: string;
  metrics: { label: string; value: string }[];
  techStack: string[];
  keyFeatures: string[];
  architecture: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: number; // 1-100
    experience: string;
    iconName?: string;
  }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  technologies: string[];
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  projectType: string;
  message: string;
}

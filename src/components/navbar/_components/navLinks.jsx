import { BadgeInfo, BriefcaseBusiness, ChartColumn, University } from "lucide-react";

export const navLinks = [
  { 
    name: "Intro", 
    id: "intro",
    description: "An introduction to Minsu and overview of the portfolio",
    icon: <BadgeInfo />
  },
  { 
    name: "Education", 
    id: "education",
    description: "Details about Minsu's educational background and qualifications",
    icon: <University />
  },
  { 
    name: "Skills", 
    id: "skills",
    description: "A list of Minsu's technical skills and competencies",
    icon: <ChartColumn />
  },
  { 
    name: "Projects", 
    id: "projects",
    description: "Showcase of Minsu's notable projects and achievements",
    icon: <BriefcaseBusiness />
  },
];

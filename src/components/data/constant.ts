export interface Testimonial {
  image: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  impact: string;
}

export interface CareerOutcome {
  title: string;
  value: string;
}

export interface Module {
  title: string;
  duration: string;
  description: string;
  weeks: number;
  hours: number;
  projects: number;
  quizzes: number;
  videoId: string;
}

export interface Price {
  monthly: string;
  fullCourse: string;
}

export interface Course {
  id: string;
  title: string;
  provider: string;
  type: string;
  image: string;
  rating: string;
  students: string;
  level: string;
  timeline: string;
  lastUpdated: string;
  languages: string[];
  price: Price;
  description: string;
  skills: string[];
  modules: Module[];
  testimonials: Testimonial[];
  careerOutcomes: CareerOutcome[];
}
export const courses: Course[] = [
  {
    id: "microsoft-front-end",
    title: "Microsoft Front-End Developer",
    provider: "Microsoft",
    type: "Professional Certificate",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800&h=600",
    rating: "4.7",
    students: "750K+ learners",
    level: "Beginner level",
    timeline: "6 months at 10 hrs/week",
    lastUpdated: "April 2024",
    languages: ["English", "Spanish"],
    price: {
      monthly: "$50/month",
      fullCourse: "$250 one-time",
    },
    description: `Learn front-end development with Microsoft. Master HTML, CSS, JavaScript, and React to build stunning web applications.`,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "UI/UX Design",
      "Version Control",
      "Web Development",
      "Front-End Development",
    ],
    modules: [
      {
        title: "Introduction to Web Development",
        duration: "4.7 ★★★★☆ (35,000 ratings)",
        description: "Learn the basics of HTML, CSS, and JavaScript.",
        weeks: 4,
        hours: 20,
        projects: 2,
        quizzes: 3,
        videoId:"NQJvZnBzD6U?si=xG0fTYvXtNUv3ZBJ"
      },
      {
        title: "Responsive Web Design",
        duration: "4.8 ★★★★★ (28,000 ratings)",
        description: "Master responsive design principles and frameworks like Bootstrap.",
        weeks: 3,
        hours: 15,
        projects: 1,
        quizzes: 2,
        videoId:"468OiiWxzjQ?si=tCMOFHgIZ2LrZ-3S"
      },
      {
        title: "JavaScript DOM Manipulation",
        duration: "4.6 ★★★★☆ (32,000 ratings)",
        description: "Learn how to interact with the Document Object Model (DOM) using JavaScript.",
        weeks: 2,
        hours: 10,
        projects: 2,
        quizzes: 3,
        videoId:"jyOH3L_RG2Q?si=RhnUu6yiwWdXdVEP"
      },
    ],
    testimonials: [
      {
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
        quote:
          "This course gave me the confidence to build and deploy my first web app!",
        author: "John Doe",
        role: "Front-End Developer",
        company: "Google",
        impact: "Landed my first tech job",
      },
      {
        image:
          "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
        quote:
          "The practical approach and industry-relevant curriculum helped me transition from marketing to data analytics. The support from mentors and the community was invaluable.",
        author: "Sarah Johnson",
        role: "Analytics Lead",
        company: "Netflix",
        impact: "Career transition success",
      },
    ],
    careerOutcomes: [
      {
        title: "Average Salary",
        value: "$85,000/year",
      },
      {
        title: "Job Growth",
        value: "+27% (2020-2030)",
      },
    ],
  },
  {
    id: "microsoft-backend",
    title: "Microsoft Back-End Developer",
    provider: "Microsoft",
    type: "Professional Certificate",
    image:
      "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800&h=600",
    rating: "4.8",
    students: "900K+ learners",
    level: "Intermediate level",
    timeline: "7 months at 12 hrs/week",
    lastUpdated: "April 2024",
    languages: ["English", "French"],
    price: {
      monthly: "$55/month",
      fullCourse: "$275 one-time",
    },
    description: `Master back-end development with Microsoft. Learn Node.js, Express, databases, and RESTful APIs.`,
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "SQL",
      "API Development",
      "Authentication & Security",
      "Cloud Deployment",
    ],
    modules: [
      {
        title: "Introduction to Back-End Development",
        duration: "4.8 ★★★★★ (40,000 ratings)",
        description: "Learn how to build and deploy server-side applications.",
        weeks: 6,
        hours: 24,
        projects: 4,
        quizzes: 5,
        videoId:"https://youtu.be/NQJvZnBzD6U?si=Sq4RmiTnuzqBAezu"
      },
      {
        title: "Database Management and MongoDB",
        duration: "4.7 ★★★★☆ (33,000 ratings)",
        description: "Master database design and interactions with MongoDB.",
        weeks: 5,
        hours: 22,
        projects: 3,
        quizzes: 4,
        videoId:"https://youtu.be/NQJvZnBzD6U?si=Sq4RmiTnuzqBAezu"
      },
      {
        title: "Authentication and Security",
        duration: "4.9 ★★★★★ (45,000 ratings)",
        description: "Learn how to implement authentication and ensure API security.",
        weeks: 4,
        hours: 20,
        projects: 3,
        quizzes: 4,
        videoId:"https://youtu.be/NQJvZnBzD6U?si=Sq4RmiTnuzqBAezu"
      },
    ],
    testimonials: [
      {
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
        quote: "This course helped me land a role as a back-end engineer!",
        author: "Jane Smith",
        role: "Back-End Engineer",
        company: "Amazon",
        impact: "Switched from a non-tech role",
      },
    ],
    careerOutcomes: [
      {
        title: "Average Salary",
        value: "$90,000/year",
      },
      {
        title: "Job Growth",
        value: "+30% (2020-2030)",
      },
    ],
  },
  {
    id: "microsoft-fullstack",
    title: "Microsoft Full-Stack Developer",
    provider: "Microsoft",
    type: "Professional Certificate",
    image:
      "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800&h=600",
    rating: "4.9",
    students: "1M+ learners",
    level: "Advanced level",
    timeline: "8 months at 15 hrs/week",
    lastUpdated: "April 2024",
    languages: ["English", "German"],
    price: {
      monthly: "$60/month",
      fullCourse: "$300 one-time",
    },
    description: `Become a Full-Stack Developer with Microsoft. Learn front-end, back-end, and DevOps to build complete applications.`,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloud Deployment",
    ],
    modules: [
      {
        title: "Full-Stack Development Basics",
        duration: "4.9 ★★★★★ (50,000 ratings)",
        description: "Learn how to build and deploy full-stack applications.",
        weeks: 10,
        hours: 40,
        projects: 5,
        quizzes: 6,
        videoId:"https://youtu.be/NQJvZnBzD6U?si=Sq4RmiTnuzqBAezu"
      },
      {
        title: "Building RESTful APIs",
        duration: "4.8 ★★★★★ (42,000 ratings)",
        description: "Master API design, development, and consumption.",
        weeks: 6,
        hours: 30,
        projects: 4,
        quizzes: 5,
        videoId:"https://youtu.be/NQJvZnBzD6U?si=Sq4RmiTnuzqBAezu"
      },
      {
        title: "DevOps and Cloud Deployment",
        duration: "4.9 ★★★★★ (48,000 ratings)",
        description: "Learn how to deploy applications using cloud technologies and DevOps practices.",
        weeks: 8,
        hours: 35,
        projects: 4,
        quizzes: 6,
        videoId:"https://youtu.be/NQJvZnBzD6U?si=Sq4RmiTnuzqBAezu"
      },
    ],
    testimonials: [
      {
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
        quote: "One of the best structured courses on full-stack development!",
        author: "Emily Brown",
        role: "Software Engineer",
        company: "Microsoft",
        impact: "Promoted to senior developer",
      },
    ],
    careerOutcomes: [
      {
        title: "Average Salary",
        value: "$100,000/year",
      },
      {
        title: "Job Growth",
        value: "+35% (2020-2030)",
      },
    ],
  },
  {
    id: "microsoft-project-management",
    title: "Microsoft Project Management",
    provider: "Microsoft",
    type: "Professional Certificate",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800&h=600",
    rating: "4.7",
    students: "600K+ learners",
    level: "Beginner level",
    timeline: "5 months at 8 hrs/week",
    lastUpdated: "April 2024",
    languages: ["English", "Spanish"],
    price: {
      monthly: "$40/month",
      fullCourse: "$200 one-time",
    },
    description: `Learn project management with Microsoft. Develop skills in Agile, Scrum, and leadership to excel as a project manager.`,
    skills: [
      "Project Planning",
      "Agile & Scrum",
      "Leadership",
      "Risk Management",
      "Stakeholder Communication",
      "Budgeting",
      "Scheduling",
    ],
    modules: [
      {
        title: "Introduction to Project Management",
        duration: "4.7 ★★★★☆ (28,000 ratings)",
        description:
          "Learn the fundamentals of project management and Agile methodologies.",
        weeks: 6,
        hours: 20,
        projects: 3,
        quizzes: 4,
        videoId:"https://youtu.be/NQJvZnBzD6U?si=Sq4RmiTnuzqBAezu"
      },
      {
        title: "Agile and Scrum Methodology",
        duration: "4.8 ★★★★★ (30,000 ratings)",
        description: "Deep dive into Agile principles and Scrum practices.",
        weeks: 4,
        hours: 18,
        projects: 2,
        quizzes: 3,
        videoId:"https://youtu.be/NQJvZnBzD6U?si=Sq4RmiTnuzqBAezu"
      },
      {
        title: "Risk and Stakeholder Management",
        duration: "4.6 ★★★★☆ (25,000 ratings)",
        description: "Learn to manage risks and communicate effectively with stakeholders.",
        weeks: 5,
        hours: 22,
        projects: 3,
        quizzes: 4,
        videoId:"https://youtu.be/NQJvZnBzD6U?si=Sq4RmiTnuzqBAezu"
      },
    ],
    testimonials: [
      {
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
        quote:
          "The perfect course for anyone looking to get into project management.",
        author: "Michael Green",
        role: "Project Manager",
        company: "IBM",
        impact: "Earned a project management certification",
      },
    ],
    careerOutcomes: [
      {
        title: "Average Salary",
        value: "$95,000/year",
      },
      {
        title: "Job Growth",
        value: "+20% (2020-2030)",
      },
    ],
  },
  {
    id: "ibm-back-end-development",
    title: "IBM Back-End Development",
    provider: "IBM",
    type: "Professional Certificate",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
    rating: "4.6",
    students: "500K+ learners",
    level: "Beginner level",
    timeline: "6 months at 8 hrs/week",
    lastUpdated: "April 2024",
    languages: ["English"],
    price: {
      monthly: "$45/month",
      fullCourse: "$220 one-time",
    },
    description: `Learn back-end development with IBM. Master server-side technologies and databases to build robust applications.`,
    skills: [
      "Node.js",
      "Express.js",
      "Databases",
      "API Development",
      "Back-End Development",
    ],
    modules: [
      {
        title: "Intro to Back-End",
        duration: "4.6 ★★★★☆ (20,000 ratings)",
        description: "Basics of server-side programming.",
        weeks: 4,
        hours: 16,
        projects: 2,
        quizzes: 2,
        videoId: "",
      },
    ],
    testimonials: [],
    careerOutcomes: [],
  },
  {
    id: "ibm-full-stack-software-developer",
    title: "IBM Full Stack Software Developer",
    provider: "IBM",
    type: "Professional Certificate",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
    rating: "4.7",
    students: "600K+ learners",
    level: "Intermediate level",
    timeline: "7 months at 10 hrs/week",
    lastUpdated: "April 2024",
    languages: ["English"],
    price: {
      monthly: "$50/month",
      fullCourse: "$250 one-time",
    },
    description: `Become a full stack developer with IBM. Learn both front-end and back-end technologies.`,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "React",
      "Full Stack Development",
    ],
    modules: [
      {
        title: "Full Stack Basics",
        duration: "4.7 ★★★★☆ (25,000 ratings)",
        description: "Overview of full stack development.",
        weeks: 5,
        hours: 20,
        projects: 3,
        quizzes: 2,
        videoId: "",
      },
    ],
    testimonials: [],
    careerOutcomes: [],
  },
  {
    id: "ibm-devops-and-software-engineering",
    title: "IBM DevOps and Software Engineering",
    provider: "IBM",
    type: "Professional Certificate",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80",
    rating: "4.8",
    students: "550K+ learners",
    level: "Intermediate level",
    timeline: "6 months at 9 hrs/week",
    lastUpdated: "April 2024",
    languages: ["English"],
    price: {
      monthly: "$48/month",
      fullCourse: "$230 one-time",
    },
    description: `Master DevOps and software engineering with IBM. Learn CI/CD, automation, and cloud deployment.`,
    skills: [
      "DevOps",
      "CI/CD",
      "Cloud Deployment",
      "Software Engineering",
    ],
    modules: [
      {
        title: "DevOps Basics",
        duration: "4.8 ★★★★★ (18,000 ratings)",
        description: "Introduction to DevOps principles.",
        weeks: 4,
        hours: 16,
        projects: 2,
        quizzes: 2,
        videoId: "",
      },
    ],
    testimonials: [],
    careerOutcomes: [],
  },
];

// Tag options for filtering
const courseTags = [
  { label: "All", value: "all" },
  { label: "Programming", value: "Programming" },
  { label: "Design", value: "Design" },
  { label: "Marketing", value: "Marketing" },
  { label: "AI & ML", value: "AI & ML" },
  { label: "Business", value: "Business" },
  { label: "Personal Development", value: "Personal Development" },
  { label: "Data Science", value: "Data Science" },
];

// Tag assignment logic (customize as needed)
export function getCourseTag(course: { title: string; type: string }): string {
  if (course.title.match(/AI|ML|Artificial Intelligence|Machine Learning/i) || course.type.match(/AI|ML/i)) return "AI & ML";
  if (course.title.match(/Design/i) || course.type.match(/Design/i)) return "Design";
  if (course.title.match(/Marketing/i) || course.type.match(/Marketing/i)) return "Marketing";
  if (course.title.match(/Business|Management/i) || course.type.match(/Business/i)) return "Business";
  if (course.title.match(/Personal Development/i) || course.type.match(/Personal Development/i)) return "Personal Development";
  if (course.title.match(/Data Science/i) || course.type.match(/Data Science/i)) return "Data Science";
  return "Programming";
}

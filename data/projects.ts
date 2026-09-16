export interface Project {
  slug: string;
  title: string;
  year: string;
  type: string;
  role: string;
  description: string;
  thumbnail: string;
  hoverImage: string;
  tags: string[];
  github?: string;
}

export const projects: Project[] = [
  {
    slug: "dalx",
    title: "DALX",
    year: "2025",
    type: "iOS App",
    role: "UI/UX Designer & Software Engineer",
    description:
      "A digital medical imaging experience designed to support interaction with DICOM files and annotations.",
    thumbnail: "/window.svg",
    hoverImage: "/next.svg",
    tags: ["SwiftUI", "RT-DETR", "MedGemma"],
    github: "",
  },

  {
    slug: "feelo",
    title: "Feelo",
    year: "2025",
    type: "iPad App",
    role: "Project & Product Manager",
    description:
      "An interactive scenario-based app that helps parents and children practice social-emotional skills together.",
    thumbnail: "/window.svg",
    hoverImage: "/globe.svg",
    tags: ["SwiftUI", "Vision", "LottieLab"],
    github: "",
  },

  {
    slug: "shootboard",
    title: "Shootboard",
    year: "2025",
    type: "HiFi Prototype",
    role: "Solo UI/UX Designer",
    description:
      "A visual reference tool that helps photographers discover and organize inspiration for their next shoot.",
    thumbnail: "/next.svg",
    hoverImage: "/file.svg",
    tags: ["Figma"],
    github: "",
  },

  {
    slug: "cekrec",
    title: "Cekrec!",
    year: "2025",
    type: "iOS App",
    role: "Software Engineer",
    description:
      "A photography companion that helps beginners compose better portraits through real-time visual guidance.",
    thumbnail: "/globe.svg",
    hoverImage: "/window.svg",
    tags: ["SwiftUI", "Vision", "UIKit"],
    github: "",
  },

  {
    slug: "mimsy",
    title: "Mimsy",
    year: "2025",
    type: "iOS App",
    role: "Solo Developer",
    description:
      "A playful social experience where users create their own villager persona and discover others through shared vibes.",
    thumbnail: "/file.svg",
    hoverImage: "/next.svg",
    tags: ["SwiftUI", "SpriteKit", "MultipeerConnectivity"],
    github: "",
  },

  {
    slug: "planaway",
    title: "PlanAway",
    year: "2025",
    type: "iOS App",
    role: "UI/UX Designer & Software Engineer",
    description:
      "A travel bucket list application that combines destination discovery with AI-powered personalized itinerary planning.",
    thumbnail: "/file.svg",
    hoverImage: "/globe.svg",
    tags: ["SwiftUI", "Firebase", "Groq API"],
    github: "",
  },

  {
    slug: "thalafish",
    title: "ThalaFish",
    year: "2025",
    type: "iOS App",
    role: "UI/UX Designer & Software Engineer",
    description:
      "A marketplace application designed to simplify buying and selling fish through a structured native iOS experience.",
    thumbnail: "/globe.svg",
    hoverImage: "/window.svg",
    tags: ["UIKit", "Swift", "Core Data"],
    github: "",
  },
];

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
    slug: "on-her-own",
    title: "On Her Own",
    year: "2026",
    type: "Research Report",
    role: "Product Researcher",
    description:
      "A research project exploring how women navigate higher-education choices amid social expectations, and how digital products can better support their journey.",
    thumbnail: "/window.svg",
    hoverImage: "/next.svg",
    tags: ["Notion", "Figma"],
    github: "",
  },

  {
    slug: "dalx",
    title: "DALX",
    year: "2026",
    type: "iOS App",
    role: "UI/UX Designer & Software Engineer",
    description:
      "An AI/ML-powered application designed to support radiologists in interpreting chest X-rays by identifying potentially relevant areas and provides findings from X-ray analysis for review and validation.",
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
      "An interactive emotion-learning app that helps children aged 3-6 recognize emotions through movement based scenarios with parental guidance, designed for short play sessions that fit busy family routines.",
    thumbnail: "/window.svg",
    hoverImage: "/globe.svg",
    tags: ["SwiftUI", "Vision", "LottieLab"],
    github: "https://github.com/olynsn15/feelo",
  },

  {
    slug: "shootboard",
    title: "Shootboard",
    year: "2025",
    type: "HiFi Prototype",
    role: "Solo UI/UX Designer",
    description:
      "Shootboard is a photography-focused moodboard app that helps users discover, curate, and organize visual references for photoshoots.",
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
    github: "https://github.com/olynsn15/Cekrec-CompVis",
  },

  {
    slug: "mimsy",
    title: "Mimsy",
    year: "2025",
    type: "iOS App",
    role: "Solo Developer",
    description:
      "A playful social app that lets users create their own villager persona and discover their “vibe similarity” with nearby users through playful animations and seamless connectivity.",
    thumbnail: "/file.svg",
    hoverImage: "/next.svg",
    tags: ["SwiftUI", "SpriteKit", "MultipeerConnectivity"],
    github: "https://github.com/olynsn15/Mimsy",
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
    github: "https://github.com/olynsn15/PlanAway",
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

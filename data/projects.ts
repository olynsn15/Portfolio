export interface Project {
  slug: string;
  title: string;
  year: string;
  category: string;
  description: string;
  thumbnail: string;
  hoverImage: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    slug: "feelo",
    title: "Feelo",
    year: "2025",
    category: "iOS · UX/UI",
    description:
      "An interactive scenario-based app that helps parents and children practice social-emotional skills together.",
    thumbnail: "/window.svg",
    hoverImage: "/globe.svg",
    tags: ["SwiftUI", "Swift", "Lottie", "UX/UI"],
  },

  {
    slug: "mimsy",
    title: "Mimsy",
    year: "2025",
    category: "iOS · Social",
    description:
      "A playful social experience where users create their own villager persona and discover others through shared vibes.",
    thumbnail: "/file.svg",
    hoverImage: "/next.svg",
    tags: ["SwiftUI", "SpriteKit", "MultipeerConnectivity"],
  },

  {
    slug: "cekrec",
    title: "Cekrec!",
    year: "2025",
    category: "iOS · Photography",
    description:
      "A photography companion that helps beginners compose better portraits through real-time visual guidance.",
    thumbnail: "/globe.svg",
    hoverImage: "/window.svg",
    tags: ["SwiftUI", "Vision", "iOS"],
  },

  {
    slug: "shootboard",
    title: "Shootboard",
    year: "2025",
    category: "iOS · Design",
    description:
      "A visual reference tool that helps photographers discover and organize inspiration for their next shoot.",
    thumbnail: "/next.svg",
    hoverImage: "/file.svg",
    tags: ["SwiftUI", "Vision", "UX/UI"],
  },

  {
    slug: "dalx",
    title: "DALX",
    year: "2025",
    category: "iOS · Healthcare",
    description:
      "A digital medical imaging experience designed to support interaction with DICOM files and annotations.",
    thumbnail: "/window.svg",
    hoverImage: "/next.svg",
    tags: ["SwiftUI", "DICOM", "iOS"],
  },

  {
    slug: "planaway",
    title: "PlanAway",
    year: "2025",
    category: "iOS · Travel",
    description:
      "A travel bucket list application that combines destination discovery with AI-powered personalized itinerary planning.",
    thumbnail: "/file.svg",
    hoverImage: "/globe.svg",
    tags: ["SwiftUI", "Firebase", "Groq API"],
  },

  {
    slug: "thalafish",
    title: "ThalaFish",
    year: "2025",
    category: "iOS · Marketplace",
    description:
      "A marketplace application designed to simplify buying and selling fish through a structured native iOS experience.",
    thumbnail: "/globe.svg",
    hoverImage: "/window.svg",
    tags: ["Swift", "Core Data", "iOS"],
  },
];

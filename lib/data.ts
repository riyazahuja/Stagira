export interface Project {
  id: string
  title: string
  status: "In Research" | "Completed"
  category: "Math" | "Physics" | "Bio" | "Chem" | "Interface"
  href: string
  lastUpdated: string
  description?: string
  startDate?: string
  leadScientist?: string
  heroImage?: string
  images?: string[]
  links?: {
    github?: string
    paper?: string
  }
  relatedStories?: {
    title: string
    category: string
    href: string
  }[]
}

export interface Story {
  id: string
  title: string
  category: "News" | "Essay"
  field?: string
  href: string
  publishDate: string
  author?: string
  content?: string
  relatedStories?: {
    title: string
    category: string
    href: string
  }[]
}

export interface TeamMember {
  id: string
  name: string
  role: string
  href: string
  category: "Leadership" | "Research" | "Design" | "Engineering"
}

// ----------------  Stagira Project & Story Data  ----------------
export const projects: Project[] = [
  {
    id: "improver",
    title: "ImProver",
    status: "Completed",
    category: "Math",
    href: "/projects/improver",
    lastUpdated: "2024-10-07",
    description:
      "Proof-optimization framework for Lean 4 providing context extraction, auto-premise retrieval and RL/SFT pipelines to shorten or synthesise proofs.",
    startDate: "2024-03-01",
    leadScientist: "Riyaz Ahuja",
    heroImage: "/images/improver-hero.png",
    links: {
      paper: "/papers/improver-iclr.pdf",
      github: "https://github.com/stagira/improver"
    },
    relatedStories: [
      { title: "ImProver @ ICLR 2025", category: "News", href: "/stories/improver-iclr-2025" }
    ]
  },
  {
    id: "metaprover",
    title: "MetaProver",
    status: "In Research",
    category: "Math",
    href: "/projects/metaprover",
    lastUpdated: "2025-02-06",
    description:
      "Unified SDK that lets small open-weight models beat GPT-4o on Lean by combining proof optimisation, generation, auto-/informal-isation, tree-search and RLHF/DPO in a single library.",
    startDate: "2025-02-01",
    leadScientist: "Riyaz Ahuja",
    heroImage: "/images/metaprover-hero.png",
    links: {
      github: "https://github.com/stagira/metaprover"
    }
  },
  {
    id: "compass",
    title: "Compass",
    status: "In Research",
    category: "Math",
    href: "/projects/compass",
    lastUpdated: "2025-05-22",
    description:
      "Conjecturer-prover system trained on a live Lean knowledge-graph; GRPO loop rewards difficulty, novelty and relatedness to autonomously explore new mathematical territory.",
    startDate: "2025-05-22",
    leadScientist: "Riyaz Ahuja",
    heroImage: "/images/compass-hero.png",
    links: {
      paper: "/papers/compass-proposal.pdf"
    }
  },
  {
    id: "agora",
    title: "Agora",
    status: "In Research",
    category: "Math",
    href: "/projects/agora",
    lastUpdated: "2025-06-13",
    description:
      "Market-based multi-agent layer where investors price theorem shares and freelancer agents earn by increasing library value, turning proof search into a competitive economy.",
    startDate: "2025-06-13",
    leadScientist: "Riyaz Ahuja",
    heroImage: "/images/agora-hero.png",
    links: {
      paper: "/papers/lean-market.pdf"
    }
  }
]

export const stories: Story[] = [
  {
    id: "improver-iclr-2025",
    title: "ImProver @ ICLR 2025",
    category: "News",
    field: "Mathematics",
    href: "/stories/improver-iclr-2025",
    publishDate: "2025-03-01",
    author: "Stagira Research Team",
    content:
      "Stagira’s ImProver took centre stage at ICLR 2025 in Singapore, showcasing automated proof-optimisation that shortens Lean proofs by up to 60 % while preserving correctness. The demo highlighted context-aware premise retrieval and real-time infoview integration, drawing interest from formal-methods researchers and industry verification teams alike."
  }
]


// Team Database
export const teamMembers: TeamMember[] = [
  {
    id: "riyaz-ahuja",
    name: "Riyaz Ahuja",
    role: "Cofounder",
    href: "https://riyazahuja.com",
    category: "Leadership",
  },
/*  {
    id: "alexander-heckett",
    name: "Alexander Heckett",
    role: "Cofounder",
    href: "https://scholar.google.com/citations?user=24WaeFcAAAAJ&hl=en",
    category: "Leadership",
  },*/
  {
    id: "jeremy-avigad",
    name: "Dr. Jeremy Avigad",
    role: "Advisor",
    href: "https://www.andrew.cmu.edu/user/avigad/",
    category: "Leadership",
  },
  {
    id: "sean-welleck",
    name: "Dr. Sean Welleck",
    role: "Advisor",
    href: "https://wellecks.com/",
    category: "Leadership",
  },
  {
    id: "prasad-tetali",
    name: "Dr. Prasad Tetali",
    role: "Advisor",
    href: "https://www.cmu.edu/math/people/faculty/tetali.html",
    category: "Leadership",
  },
]

// Helper functions for data access
export const getProjectById = (id: string): Project | null => {
  return projects.find((project) => project.id === id) || null
}

export const getStoryById = (id: string): Story | null => {
  return stories.find((story) => story.id === id) || null
}

export const getTeamMemberById = (id: string): TeamMember | null => {
  return teamMembers.find((member) => member.id === id) || null
}

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter((project) => project.category === category)
}

export const getStoriesByCategory = (category: string): Story[] => {
  return stories.filter((story) => story.category === category)
}

export const getRecentProjects = (limit = 8): Project[] => {
  return projects.sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()).slice(0, limit)
}

export const getRecentStories = (limit = 8): Story[] => {
  return stories.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()).slice(0, limit)
}

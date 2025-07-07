export default function Research() {
  const projects = [
    {
      title: "ImProver",
      status: "Completed",
      year: "2024",
      description: "Agentic Proof Optimization Framework for Lean 4",
      details: "(ICLR 2025) Context extraction, automatic premise retrieval, formal chain-of-states prompting",
    },
    {
      title: "MetaProver",
      status: "Completed",
      year: "2025",
      description: "Unified SDK for neural theorem proving development",
      details: "Combines optimization, generation, and autoformalization into a single library to enable SLM’s to outperform LLM's.",
    },
    {
      title: "Compass",
      status: "Current",
      year: "2025",
      description: "Autonomous mathematical discovery platform",
      details: "Actively discovers novel and useful mathematics at a research level using dynamic knowledge graphs.",
    },
    {
      title: "Zermelian",
      status: "Future",
      year: "2025",
      description: "Multiagent automated mathematics researchers",
      details: "Automatically research, discover, and prove long-horizon mathematical conjectures via multiagent swarms.",
    },
    {
      title: "Agora",
      status: "Future",
      year: "2026",
      description: "Multiagent automated researchers",
      details: "Automatically hypothesize, experiment, analyze, and implement long-horizon research goals.",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-sage-green text-papyrus-white"
      case "Current":
        return "bg-aureate-gold text-stagira-indigo"
      case "Future":
        return "bg-graphite-gray text-papyrus-white"
      default:
        return "bg-graphite-gray text-papyrus-white"
    }
  }

  return (
    <section id="research">
      <h3 className="text-3xl font-normal mb-16 mt-5 min-h-40 pt-32">research.</h3>

      <p className="text-base mb-5 leading-relaxed">
        Every science is ultimately written in the syntax of mathematics, and as such, our research starts at the deepest root: formal mathematics. On a groundwork of Lean infrastructure, cultivate a proving ground for autonomous agents to roam the mathematical wilderness on their own, discovering lemmas no human has ever named. And with the syntax as a seed, we continue to grow and generalize these learned patterns of rigor, self‑verification, and composability from traversing the infinite space of proofs to map the stars at astronomical scales, analyze a biochemical pathway, or steer a robot. In short: from pure thought to living matter, we’re automating R&D one layer of infrastructure at a time.
      </p>

      {/* Timeline */}
      <div className="relative mb-16">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-graphite-gray opacity-30"></div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="relative flex items-start">
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-stagira-indigo rounded-full z-10 border-2 border-papyrus-white"></div>

              {/* Content */}
              <div className="ml-16 pb-8">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-xl font-semibold text-stagira-indigo">{project.title}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  <span className="text-sm text-graphite-gray font-mono">{project.year}</span>
                </div>

                <p className="text-base text-stagira-indigo mb-2 font-medium">{project.description}</p>
                <p className="text-sm text-graphite-gray leading-relaxed">{project.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-base mb-5 leading-relaxed">
        These milestones are only the first rings in our tree of knowledge. New branches sprout quarterly; join the waitlist to watch them grow.
      </p>
    </section>
  )
}

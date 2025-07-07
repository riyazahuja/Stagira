export default function AboutPage() {
  const timelineEvents = [
    {
      year: "2024",
      title: "Stagira Founded",
      description: "Established with the vision of creating billions of aligned ASI systems for scientific discovery.",
    },
    {
      year: "2024",
      title: "Mathematics Research Begins",
      description: "Launched automated theorem discovery project in number theory as our foundational research area.",
    },
    {
      year: "2024",
      title: "Physics Simulation Framework",
      description: "Completed multi-agent physics simulation framework, demonstrating collaborative AI research.",
    },
    {
      year: "2025",
      title: "Expanding to Biology",
      description: "Initiated protein folding prediction networks and chemical reaction pathway optimization.",
    },
  ]

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-lora text-h1 text-stagira-indigo mb-8">About Stagira</h1>

        {/* Mission */}
        <section className="mb-16">
          <h2 className="font-lora text-h3 text-stagira-indigo mb-6">Mission</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-body-1 font-inter mb-4 text-graphite-gray">
              The world faces a critical juncture in AI development. If only a handful of ASI models exist, most people
              risk becoming slaves to those who control them. Our solution: create billions of aligned ASI systems, each
              paired with human users, fostering competition and preventing monopolization.
            </p>
            <p className="text-body-1 font-inter mb-4 text-graphite-gray">
              We believe the path to beneficial ASI lies through scientific discovery. By teaching AI to conduct genuine
              research—forming hypotheses, designing experiments, evaluating results, and iterating—we create systems
              that augment rather than replace human intelligence.
            </p>
            <p className="text-body-1 font-inter text-graphite-gray">
              Starting with pure mathematics, where verification is perfect and evaluation is clear, we're building
              toward a future where every researcher has an AI partner capable of breakthrough discoveries.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="font-lora text-h3 text-stagira-indigo mb-8">Timeline</h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-aureate-gold"></div>
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="absolute left-0 w-8 h-8 bg-aureate-gold rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-stagira-indigo rounded-full"></div>
                  </div>
                  <div className="ml-12">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="font-jetbrains text-caption font-bold text-aureate-gold">{event.year}</span>
                      <h3 className="font-lora text-xl font-semibold text-stagira-indigo">{event.title}</h3>
                    </div>
                    <p className="text-body-2 font-inter text-graphite-gray">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Governance */}
        <section className="mb-16">
          <h2 className="font-lora text-h3 text-stagira-indigo mb-6">Governance</h2>
          <p className="text-body-1 font-inter mb-4 text-graphite-gray">
            Stagira operates as a research-first organization committed to open science and responsible AI development.
            Our governance structure ensures that breakthrough discoveries benefit the broader scientific community
            while maintaining competitive advantages in our core technologies.
          </p>
          <p className="text-body-1 font-inter text-graphite-gray">
            We believe in radical transparency in our research methodologies and findings, publishing our work in
            peer-reviewed journals and open-source repositories whenever possible.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="font-lora text-h3 text-stagira-indigo mb-6">Contact</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-body-1 font-inter mb-4 text-graphite-gray">
              Interested in collaborating, joining our team, or learning more about our research?
            </p>
            <div className="space-y-2">
              <p className="text-body-2 font-inter text-graphite-gray">
                <strong>General Inquiries:</strong>{" "}
                <a href="mailto:contact@stagira.ai" className="text-aureate-gold hover:underline">
                  contact@stagira.ai
                </a>
              </p>
              <p className="text-body-2 font-inter text-graphite-gray">
                <strong>Research Partnerships:</strong>{" "}
                <a href="mailto:research@stagira.ai" className="text-aureate-gold hover:underline">
                  research@stagira.ai
                </a>
              </p>
              <p className="text-body-2 font-inter text-graphite-gray">
                <strong>Careers:</strong>{" "}
                <a href="mailto:careers@stagira.ai" className="text-aureate-gold hover:underline">
                  careers@stagira.ai
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

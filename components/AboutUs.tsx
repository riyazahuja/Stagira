export default function AboutUs() {
  const team = [
    {
      name: "Riyaz Ahuja",
      role: "Cofounder",
      href: "https://www.linkedin.com/in/riyaz-ahuja/",
      initials: "RA",
    },
    {
      name: "Xander Heckett",
      role: "Cofounder",
      href: "https://www.linkedin.com/in/alexander-heckett-547a9b228/",
      initials: "XH",
    },
    // {
    //   name: "Dr. Jeremy Avigad",
    //   role: "Advisory",
    //   href: "https://www.andrew.cmu.edu/user/avigad/",
    //   initials: "JA",
    // },
    // {
    //   name: "Dr. Sean Welleck",
    //   role: "Advisory",
    //   href: "https://wellecks.com/",
    //   initials: "SW",
    // },
    // {
    //   name: "Dr. Prasad Tetali",
    //   role: "Advisory",
    //   href: "https://www.cmu.edu/math/people/faculty/tetali.html",
    //   initials: "PT",
    // },
    {
      name: "Shivansh Gour",
      role: "Cofounder",
      href: "https://s-os.dev",
      initials: "SG",
    },
    {
      name: "Tate Rowney",
      role: "Cofounder",
      href: "https://taterowney.com/",
      initials: "TR",
    },
    
  ]

  return (
    <section id="about">
      <h3 className="text-3xl font-normal mb-16 mt-5 min-h-40 pt-32">about.</h3>

      <p className="text-base mb-5 leading-relaxed">
        We are researchers and engineers building the future of human-AI collaboration in scientific discovery. Our team
        combines expertise in formal methods, machine learning, and mathematical reasoning to create systems that
        augment human intelligence rather than replace it.
      </p>

  

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {team.map((member, index) => (
          <a
            key={index}
            href={member.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded transition-colors group cursor-hover"
          >
            <div className="w-12 h-12 bg-stagira-indigo rounded-full flex items-center justify-center">
              <span className="text-papyrus-white font-mono text-sm font-bold">{member.initials}</span>
            </div>
            <div>
              <h4 className="font-medium text-stagira-indigo group-hover:underline">{member.name}</h4>
              <p className="text-graphite-gray text-sm">{member.role}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

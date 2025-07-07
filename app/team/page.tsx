import Card from "@/components/Card"
import { teamMembers } from "@/lib/data"

export default function TeamPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-content mx-auto">
        <h1 className="font-lora text-h1 text-stagira-indigo mb-4">Team</h1>
        <p className="text-body-1 font-inter mb-16 max-w-2xl text-graphite-gray">
          Meet the researchers and engineers building the future of human-AI collaboration in scientific discovery.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamMembers.map((member) => (
            <Card
              key={member.id}
              title={member.name}
              role={member.role}
              type="team"
              category={member.category}
              href={member.href}
              name={member.name}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

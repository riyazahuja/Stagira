import Card from "./Card"
import { getRecentProjects, getRecentStories } from "@/lib/data"

export default function ContentGrid() {
  // Get 4 recent projects and 4 recent stories for a total of 8 items
  const recentProjects = getRecentProjects(4)
  const recentStories = getRecentStories(4)

  // Combine and ensure we have exactly 8 items
  const allContent = [...recentProjects, ...recentStories].slice(0, 8)

  return (
    <section className="py-16 px-4">
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allContent.map((item, index) => (
            <Card
              key={item.id}
              title={item.title}
              type={"status" in item ? "project" : "story"}
              status={"status" in item ? item.status : undefined}
              category={item.category}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

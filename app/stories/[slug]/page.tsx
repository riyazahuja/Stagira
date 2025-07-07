import { notFound } from "next/navigation"
import { Calendar } from "lucide-react"
import Card from "@/components/Card"
import { getStoryById } from "@/lib/data"

export default function StoryDetailPage({ params }: { params: { slug: string } }) {
  const story = getStoryById(params.slug)

  if (!story) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Reading Progress Bar */}
      <div className="fixed top-16 left-0 right-0 h-1 bg-gray-200 z-50">
        <div className="h-full bg-stagira-indigo w-0" id="reading-progress"></div>
      </div>

      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-stagira-indigo text-papyrus-white px-3 py-1 rounded-full text-sm font-medium">
                {story.category}
              </span>
              {story.field && (
                <span className="bg-graphite-gray text-papyrus-white px-3 py-1 rounded-full text-sm font-medium">
                  {story.field}
                </span>
              )}
            </div>

            <h1 className="font-lora text-h1 text-stagira-indigo mb-6">{story.title}</h1>

            <div className="flex items-center gap-6 text-graphite-gray text-sm">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{new Date(story.publishDate).toLocaleDateString()}</span>
              </div>
              {story.author && <span>By {story.author}</span>}
            </div>
          </header>

          {/* Article Content */}
          {story.content && (
            <article className="prose prose-lg max-w-none">
              <div
                className="text-body-1 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: story.content
                    .split("\n")
                    .map((line) => {
                      if (line.startsWith("# ")) {
                        return `<h1 class="font-lora text-h2 text-stagira-indigo mt-12 mb-6">${line.slice(2)}</h1>`
                      }
                      if (line.startsWith("## ")) {
                        return `<h2 class="font-lora text-h3 text-stagira-indigo mt-10 mb-4">${line.slice(3)}</h2>`
                      }
                      if (line.startsWith("### ")) {
                        return `<h3 class="font-lora text-xl text-stagira-indigo mt-8 mb-3">${line.slice(4)}</h3>`
                      }
                      if (line.startsWith("> ")) {
                        return `<blockquote class="border-l-4 border-aureate-gold pl-6 my-6 font-lora text-xl italic text-graphite-gray">${line.slice(2)}</blockquote>`
                      }
                      if (line.trim() === "") {
                        return "<br>"
                      }
                      return `<p class="mb-4">${line}</p>`
                    })
                    .join(""),
                }}
              />
            </article>
          )}

          {/* Related Stories */}
          {story.relatedStories && story.relatedStories.length > 0 && (
            <section className="mt-16 pt-16 border-t border-gray-200">
              <h2 className="font-lora text-h2 text-stagira-indigo mb-8">Related Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {story.relatedStories.map((relatedStory, index) => (
                  <Card
                    key={index}
                    title={relatedStory.title}
                    type="story"
                    category={relatedStory.category}
                    href={relatedStory.href}
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}

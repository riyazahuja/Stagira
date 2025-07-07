import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ExternalLink, Github } from "lucide-react"
import Card from "@/components/Card"
import { getProjectById } from "@/lib/data"

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectById(params.slug)

  if (!project) {
    notFound()
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Research":
        return "text-sage-green border-sage-green bg-papyrus-white"
      case "Completed":
        return "text-stagira-indigo bg-aureate-gold border-aureate-gold"
      default:
        return "text-graphite-gray border-graphite-gray bg-papyrus-white"
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-stagira-indigo to-midnight-fade-end">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <div className="mb-4">
              <span
                className={`inline-block text-sm px-3 py-1 rounded-full border font-medium ${getStatusColor(project.status)}`}
              >
                {project.status}
              </span>
            </div>
            <h1 className="font-lora text-h1 text-papyrus-white mb-4">{project.title}</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="font-lora text-h3 text-stagira-indigo mb-6">Synopsis</h2>
                <p className="text-body-1 text-graphite-gray leading-relaxed mb-8">{project.description}</p>

                {/* Image Gallery */}
                {project.images && project.images.length > 0 && (
                  <>
                    <h3 className="font-lora text-h3 text-stagira-indigo mb-6">Gallery</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                      {project.images.map((image, index) => (
                        <div key={index} className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${project.title} image ${index + 1}`}
                            width={400}
                            height={300}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="font-lora text-xl font-semibold mb-4 text-stagira-indigo">Project Details</h3>
                <div className="space-y-4">
                  {project.startDate && (
                    <div className="flex items-center gap-3">
                      <Calendar size={20} className="text-graphite-gray" />
                      <div>
                        <p className="text-sm text-graphite-gray">Start Date</p>
                        <p className="font-medium">{new Date(project.startDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                  )}
                  {project.leadScientist && (
                    <div className="flex items-center gap-3">
                      <User size={20} className="text-graphite-gray" />
                      <div>
                        <p className="text-sm text-graphite-gray">Lead Scientist</p>
                        <p className="font-medium">{project.leadScientist}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Links */}
                {project.links && (project.links.github || project.links.paper) && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold mb-3">Links</h4>
                    <div className="space-y-2">
                      {project.links.github && (
                        <Link
                          href={project.links.github}
                          className="flex items-center gap-2 text-aureate-gold hover:text-stagira-indigo transition-colors"
                        >
                          <Github size={16} />
                          <span>GitHub Repository</span>
                          <ExternalLink size={14} />
                        </Link>
                      )}
                      {project.links.paper && (
                        <Link
                          href={project.links.paper}
                          className="flex items-center gap-2 text-aureate-gold hover:text-stagira-indigo transition-colors"
                        >
                          <ExternalLink size={16} />
                          <span>Research Paper</span>
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Related Stories */}
          {project.relatedStories && project.relatedStories.length > 0 && (
            <section className="mt-16 pt-16 border-t border-gray-200">
              <h2 className="font-lora text-h2 text-stagira-indigo mb-8">Related Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {project.relatedStories.map((story, index) => (
                  <Card key={index} title={story.title} type="story" category={story.category} href={story.href} />
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="mt-16 text-center">
            <div className="bg-gradient-to-r from-stagira-indigo to-midnight-fade-end p-8 rounded-lg">
              <h3 className="font-lora text-h3 text-papyrus-white mb-4">Interested in this research?</h3>
              <p className="text-body-1 text-papyrus-white mb-6">Request pilot access to this module.</p>
              <button className="bg-aureate-gold text-stagira-indigo px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                Request Access
              </button>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}

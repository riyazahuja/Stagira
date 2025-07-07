"use client"

import { useState, useEffect, useRef } from "react"
import Card from "@/components/Card"
import FilterDropdown from "@/components/FilterDropdown"
import { projects } from "@/lib/data"

export default function ProjectsPage() {
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [displayCount, setDisplayCount] = useState(12) // Show 12 initially
  const [isLoading, setIsLoading] = useState(false)
  const loadingRef = useRef<HTMLDivElement>(null)

  const statusOptions = ["In Research", "Completed"]
  const categoryOptions = ["Math", "Physics", "Bio", "Chem", "Interface"]

  const filteredProjects = projects.filter((project) => {
    const statusMatch = selectedStatuses.length === 0 || selectedStatuses.includes(project.status)
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(project.category)
    return statusMatch && categoryMatch
  })

  // Sort by lastUpdated (most recent first)
  const sortedProjects = filteredProjects.sort(
    (a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime(),
  )

  const displayedProjects = sortedProjects.slice(0, displayCount)
  const hasMore = sortedProjects.length > displayCount

  const loadMore = () => {
    if (isLoading || !hasMore) return

    setIsLoading(true)
    // Simulate loading delay
    setTimeout(() => {
      setDisplayCount((prev) => prev + 12)
      setIsLoading(false)
    }, 500)
  }

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMore()
        }
      },
      {
        threshold: 0.1,
        rootMargin: "100px", // Start loading 100px before the element comes into view
      },
    )

    if (loadingRef.current) {
      observer.observe(loadingRef.current)
    }

    return () => {
      if (loadingRef.current) {
        observer.unobserve(loadingRef.current)
      }
    }
  }, [hasMore, isLoading])

  // Reset display count when filters change
  useEffect(() => {
    setDisplayCount(12)
  }, [selectedStatuses, selectedCategories])

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-content mx-auto">
        <h1 className="font-lora text-h1 text-stagira-indigo mb-8">Projects</h1>

        {/* Filters */}
        <div className="bg-papyrus-white py-4 mb-8 border-b border-gray-200">
          <div className="flex flex-wrap gap-4 items-center">
            <FilterDropdown
              label="Status"
              options={statusOptions}
              selectedOptions={selectedStatuses}
              onSelectionChange={setSelectedStatuses}
            />
            <FilterDropdown
              label="Categories"
              options={categoryOptions}
              selectedOptions={selectedCategories}
              onSelectionChange={setSelectedCategories}
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedProjects.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              type="project"
              status={project.status}
              category={project.category}
              href={project.href}
            />
          ))}
        </div>

        {/* Loading indicator and intersection observer target */}
        {hasMore && (
          <div ref={loadingRef} className="text-center mt-12 py-8">
            {isLoading && (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-stagira-indigo rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-stagira-indigo rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-stagira-indigo rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            )}
          </div>
        )}

        {displayedProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-graphite-gray text-body-1 font-inter">No projects match your current filters.</p>
          </div>
        )}
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { BookOpen, Leaf, ArrowRight } from "lucide-react"

interface CardProps {
  title: string
  type: "project" | "story" | "team"
  status?: string
  category?: string
  href: string
  image?: string
  role?: string
  name?: string
}

export default function Card({ title, type, status, category, href, image, role, name }: CardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getStatusColor = (status?: string) => {
    switch (status) {
      case "In Research":
        return "text-sage-green border-sage-green bg-papyrus-white"
      case "Completed":
        return "text-stagira-indigo bg-aureate-gold border-aureate-gold"
      default:
        return "text-graphite-gray border-graphite-gray bg-papyrus-white"
    }
  }

  const getCategoryColor = (category?: string) => {
    switch (category) {
      case "Math":
        return "bg-stagira-indigo text-papyrus-white"
      case "Physics":
        return "bg-crimson-red text-papyrus-white"
      case "Bio":
        return "bg-sage-green text-papyrus-white"
      case "Chem":
        return "bg-aureate-gold text-stagira-indigo"
      case "Interface":
        return "bg-graphite-gray text-papyrus-white"
      case "News":
        return "bg-crimson-red text-papyrus-white"
      case "Essay":
        return "bg-stagira-indigo text-papyrus-white"
      case "Leadership":
        return "bg-aureate-gold text-stagira-indigo"
      case "Research":
        return "bg-sage-green text-papyrus-white"
      case "Design":
        return "bg-crimson-red text-papyrus-white"
      case "Engineering":
        return "bg-graphite-gray text-papyrus-white"
      default:
        return "bg-graphite-gray text-papyrus-white"
    }
  }

  const renderIcon = () => {
    if (type === "project") return <Leaf size={48} className="text-sage-green" />
    if (type === "story") return <BookOpen size={48} className="text-stagira-indigo" />
    if (type === "team" && name) {
      return (
        <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center">
          <div className="w-24 h-24 bg-stagira-indigo rounded-full flex items-center justify-center">
            <span className="text-papyrus-white font-lora text-2xl font-bold">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
        </div>
      )
    }
    return <BookOpen size={48} className="text-stagira-indigo" />
  }

  const CardContent = () => (
    <div
      className="aspect-square bg-papyrus-white border-2 border-transparent rounded-lg overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-full flex flex-col relative">
        {/* Plain arrow icon on hover - no background */}
        <div
          className={`absolute top-3 right-3 z-10 transition-all duration-300 ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
        >
          <ArrowRight size={20} className="text-stagira-indigo" />
        </div>

        {/* Image/Background */}
        <div className="flex-1 bg-gradient-to-br from-papyrus-white to-gray-100 flex items-center justify-center relative overflow-hidden">
          <div>{renderIcon()}</div>

          {/* Top-left chips */}
          <div className="absolute top-3 left-3 flex flex-col gap-1">
            {status && (
              <span className={`text-xs px-2 py-1 rounded-full border font-medium ${getStatusColor(status)}`}>
                {status}
              </span>
            )}
            {category && (
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${getCategoryColor(category)}`}>
                {category}
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 text-center">
          <h3 className="font-lora text-lg font-semibold leading-tight text-stagira-indigo mb-1">{title}</h3>
          {role && <p className="text-body-2 font-inter text-graphite-gray">{role}</p>}
        </div>
      </div>
    </div>
  )

  if (type === "team") {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <CardContent />
      </a>
    )
  }

  return (
    <Link href={href}>
      <CardContent />
    </Link>
  )
}

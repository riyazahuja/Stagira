"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const fullText = "hi, we're stagira."

  useEffect(() => {
    let index = 0
    const typingSpeed = 100
    const pauseBeforeTyping = 500
    const pauseAfterTyping = 1000

    // Initial pause
    const initialTimer = setTimeout(() => {
      const typingTimer = setInterval(() => {
        if (index <= fullText.length) {
          setDisplayText(fullText.slice(0, index))
          index++
        } else {
          clearInterval(typingTimer)
          // Start blinking cursor after typing is complete
          setTimeout(() => {
            setShowCursor(true)
          }, pauseAfterTyping)
        }
      }, typingSpeed)

      return () => clearInterval(typingTimer)
    }, pauseBeforeTyping)

    return () => clearTimeout(initialTimer)
  }, [])

  // Named scroll handler for reuse
  const handleScrollUpdate = () => {
    const y = window.scrollY
    const navigation = document.getElementById("navigation")

    if (navigation) {
      if (y > 1 && window.innerWidth >= 1160) {
        navigation.classList.add("moved-navigation")
      } else {
        navigation.classList.remove("moved-navigation")
      }
    }

    // Determine active section based on scroll position
    const sections = [
      { id: "research", element: document.getElementById("research") },
      { id: "demo", element: document.getElementById("demo") },
      { id: "about", element: document.getElementById("about") },
      { id: "contact", element: document.getElementById("contact") },
    ]

    const anchor = y + window.innerHeight / 3 // sampling point in viewport

    let currentSection = ""

    // Prefer the section whose bounds contain the anchor
    for (const section of sections) {
      if (section.element) {
        const rect = section.element.getBoundingClientRect()
        const top = rect.top + y
        const bottom = top + rect.height
        if (anchor >= top && anchor < bottom) {
          currentSection = section.id
          break
        }
      }
    }

    // If at the very bottom of the page, force "contact" as active
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
      currentSection = "contact"
    }

    // Fallback: last section that started before the anchor
    if (!currentSection) {
      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect()
          const top = rect.top + y
          if (anchor >= top) {
            currentSection = section.id
          }
        }
      }
    }

    setActiveSection(currentSection)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollUpdate)
    // Call once to set initial state
    handleScrollUpdate()
    return () => window.removeEventListener("scroll", handleScrollUpdate)
  }, [])

  const handleScrollToContent = () => {
    const element = document.getElementById("research")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      // After smooth scroll, force scroll handler to update active section
      setTimeout(() => {
        handleScrollUpdate()
      }, 400) // Wait for scroll animation
    }
  }

  const navItems = [
    // { id: "who-we-are", label: "who we are" },
    { id: "research", label: "research" },
    // { id: "how-it-works", label: "how it works" },
    { id: "demo", label: "demo" },
    { id: "about", label: "about" },
    { id: "contact", label: "contact" },
  ]

  return (
    <div id="hero" className="w-full h-screen relative">
      {/* Logo */}
      <div
        id="logo"
        className="absolute top-12 left-12 w-15 h-15 border-stagira-indigo flex items-center justify-center cursor-hover"
      >
        <Image src="/images/logo.svg" alt="S" width={65} height={65} className="object-contain" />
      </div>

      {/* Navigation */}
      <nav id="navigation" className="fixed top-12 right-12 text-right text-xl transition-all duration-1000 z-50">
        <ul className="space-y-5">
          {navItems.map((item) => (
            <li key={item.id} className="relative">
              <button
                onClick={() => handleNavClick(`#${item.id}`)}
                className={`text-stagira-indigo hover:text-aureate-gold transition-colors duration-300 font-light cursor-hover ${
                  activeSection === item.id ? "text-aureate-gold" : ""
                }`}
              >
                {item.label}
              </button>
              {/* Active indicator dot */}
              <div
                className={`absolute -right-4 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-stagira-indigo rounded-full transition-all duration-300 ${
                  activeSection === item.id ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}
              />
            </li>
          ))}
        </ul>
      </nav>

      {/* Welcome */}
      <div id="welcome" className="absolute bottom-1/4 left-12">
        <div className="relative">
          <h1 className="text-4xl font-mono mb-3 text-stagira-indigo">
            <span>{displayText}</span>
            <span
              className={`inline-block w-0.5 h-10 bg-stagira-indigo ml-1 ${
                showCursor && displayText === fullText ? "animate-blink" : ""
              }`}
            />
          </h1>
        </div>
        <h2 className="text-xl text-graphite-gray mt-3 font-light">We're building automated mathematicians for collaborative discovery.</h2>
      </div>

      {/* Scroll indicator */}
      <div id="to-bottom" className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center">
        <button onClick={handleScrollToContent} className="hover:opacity-70 transition-opacity cursor-hover">
          <ChevronDown size={32} className="text-graphite-gray" />
        </button>
      </div>
    </div>
  )
}

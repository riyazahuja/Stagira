"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    setIsSubmitted(true)
    setEmail("")

    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact">
      <h3 className="text-3xl font-normal mb-16 mt-5 min-h-40 pt-32">contact.</h3>

      <p className="text-base mb-8 leading-relaxed">
        Let us know if you have any questions about our work or are interested in learning more. We would love to hear from you.
      </p>

      {/*<p className="text-base mb-12 leading-relaxed">
        Join our waitlist to be the first to know about new releases and pilot access to our research
        systems.
      </p>*/}

      {/* Waitlist Form */}
      {/*<div className="bg-gray-50 p-8 rounded-lg border border-gray-200 mb-12">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-stagira-indigo mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stagira-indigo focus:border-transparent text-base cursor-hover"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-stagira-indigo text-papyrus-white py-3 rounded-lg font-medium text-base hover:bg-midnight-fade-end transition-colors duration-300 shadow-lg cursor-hover"
          >
            Join Waitlist
          </button>

          {isSubmitted && (
            <div className="mt-4 p-3 bg-sage-green/10 border border-sage-green/30 rounded-lg">
              <p className="text-sage-green text-sm text-center">Thank you! You've been added to our waitlist.</p>
            </div>
          )}
        </form>
      </div>*/}

      {/* Contact Info */}
      <div className="text-center mb-12">
        <p className="text-base mb-3 leading-relaxed">
          <strong>Email:</strong>{" "}
          <a
            href="mailto:contact@stagiralabs.com"
            className="text-stagira-indigo hover:text-aureate-gold transition-colors cursor-hover"
          >
            contact@stagiralabs.com
          </a>
        </p>
        <p className="text-base leading-relaxed">
          <strong>Phone:</strong>{" "}
          <a
            href="tel:+14047191661"
            className="text-stagira-indigo hover:text-aureate-gold transition-colors cursor-hover"
          >
            +1 (404) 719-1661
          </a>
        </p>
      </div>

      {/* CTA Button 
      <div className="flex justify-center mt-16 mb-40">
        <button className="bg-stagira-indigo text-papyrus-white px-12 py-4 rounded-full text-lg uppercase shadow-lg hover:bg-midnight-fade-end transition-colors duration-300 font-medium tracking-wide cursor-hover">
          <a href="mailto:contact@stagira.ai">Contact Us</a>
        </button>
      </div>*/}
    </section>
  )
}

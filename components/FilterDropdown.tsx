"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"

interface FilterDropdownProps {
  label: string
  options: string[]
  selectedOptions: string[]
  onSelectionChange: (selected: string[]) => void
}

export default function FilterDropdown({ label, options, selectedOptions, onSelectionChange }: FilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleOptionToggle = (option: string) => {
    if (selectedOptions.includes(option)) {
      onSelectionChange(selectedOptions.filter((item) => item !== option))
    } else {
      onSelectionChange([...selectedOptions, option])
    }
  }

  const displayText =
    selectedOptions.length === 0
      ? `All ${label}`
      : selectedOptions.length === 1
        ? selectedOptions[0]
        : `${selectedOptions.length} selected`

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 border border-graphite-gray rounded-full text-sm font-inter bg-papyrus-white"
      >
        <span className="font-semibold">{label}:</span>
        <span>{displayText}</span>
        <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-papyrus-white border border-graphite-gray rounded-lg shadow-lg z-50 min-w-48 animate-fade-up">
          <div className="p-2 max-h-64 overflow-y-auto">
            {options.map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded cursor-pointer transition-colors duration-200"
              >
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleOptionToggle(option)}
                  className="w-4 h-4 text-aureate-gold border-graphite-gray rounded focus:ring-aureate-gold focus:ring-2"
                />
                <span className="text-sm">{option}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

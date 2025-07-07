import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "stagira-indigo": "#1A1B3E",
        "aureate-gold": "#F3B23E",
        "papyrus-white": "#FAF7F2",
        "sage-green": "#5FA07A",
        "sage-green-accessible": "#4e8766", // For text on papyrus background
        "crimson-red": "#C44545",
        "graphite-gray": "#646473",
        "midnight-fade-start": "#0B0C1F",
        "midnight-fade-end": "#1A1B3E",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        lora: ["Lora", "serif"],
        inter: ["Inter", "sans-serif"],
        jetbrains: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        // Exact specifications from brand document
        h1: ["64px", { lineHeight: "110%", fontWeight: "700" }],
        h2: ["48px", { lineHeight: "115%", fontWeight: "600" }],
        h3: ["36px", { lineHeight: "120%", fontWeight: "600" }],
        "body-1": ["18px", { lineHeight: "160%", fontWeight: "400" }],
        "body-2": ["16px", { lineHeight: "160%", fontWeight: "400" }],
        caption: ["14px", { lineHeight: "150%", fontWeight: "400" }],
      },
      maxWidth: {
        content: "1176px",
      },
      spacing: {
        "18": "4.5rem", // 72px
        "22": "5.5rem", // 88px
      },
      animation: {
        "fade-up": "fadeUp 0.25s cubic-bezier(0.25, 0.8, 0.5, 1)",
        "pulse-gold": "pulseGold 0.3s cubic-bezier(0.25, 0.8, 0.5, 1)",
        grow: "grow 0.3s cubic-bezier(0.25, 0.8, 0.5, 1)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGold: {
          "0%": { boxShadow: "0 0 0 0 rgba(243, 178, 62, 0.4)" },
          "100%": { boxShadow: "0 0 0 12px rgba(243, 178, 62, 0)" },
        },
        grow: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config

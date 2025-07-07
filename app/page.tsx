import Hero from "@/components/Hero"
import WhoWeAre from "@/components/WhoWeAre"
import Research from "@/components/Research"
import HowItWorks from "@/components/HowItWorks"
import AboutUs from "@/components/AboutUs"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div id="site-content" className="max-w-3xl mx-auto px-12">
        <WhoWeAre />
        <Research />
        <HowItWorks />
        {/*<AboutUs />*/}
        <Contact />
      </div>
    </main>
  )
}

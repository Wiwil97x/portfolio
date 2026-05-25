import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import Method from '@/components/sections/Method'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Projects />
      <Method />
      <About />
      <Skills />
      <Contact />
    </main>
  )
}

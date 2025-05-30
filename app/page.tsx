'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import Home from './components/Home'
import Certifications from './components/Certifications'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Interests from './components/Interests'
import Skills from './components/Skills'
import { Inter } from 'next/font/google';
import useAOS from './plugins/useAOS'

const inter = Inter({
  subsets: ["latin"],
});

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('intro')
  const router = useRouter()
  const sections = ['skills', 'experience', 'certifications', 'projects', 'interests']
  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    experience: useRef<HTMLElement>(null),
    certifications: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    interests: useRef<HTMLElement>(null),
  }
  const sectionDescs = ['A few things I\'m good at','Work and education','Tech tokens','My creative playground','Passions and hobbies'];

  // Update URL based on active section
  useEffect(() => {
    router.push(`#${activeSection}`, { scroll: false })
  }, [activeSection, router])

  // Set up intersection observer to detect active section
  useEffect(() => {
    const observers = sections.map(section => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveSection(section)
            }
          })
        },
        { threshold: 0.5 }
      )
      
      if (sectionRefs[section as keyof typeof sectionRefs]?.current) {
        observer.observe(sectionRefs[section as keyof typeof sectionRefs].current!)
      }
      
      return observer
    })

    return () => {
      observers.forEach(observer => observer.disconnect())
    }
  }, [])

  // Scroll to section
  const scrollToSection = (section: string) => {
    sectionRefs[section as keyof typeof sectionRefs]?.current?.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  useAOS();

  return (    
    <>
    <nav className="fixed top-0 z-10 flex w-100 md:w-1/3 justify-end">

      <div id="nav_ribbon" className="hidden lg:block p-3 mr-12">
        <div id="pc_logo" className="rounded-full" title="Portfolio of Philip Cowles"></div>
        <ul>
          {sections.map((section, index) => (
            <li
              key={section}
              onClick={() => scrollToSection(section)}
              className={`transition-colors cursor-pointer border-b border-gray-200 p-3`}
            >
              <div className={`${inter.className} antialiased capitalize tracking-tight text-2xl font-extrabold`}>{section}</div>
              <span className="text-gray-400">{sectionDescs[index]}</span>
              <div className="bar"></div><div className="bar_faded"></div>
            </li>
          ))}

        </ul>
        <div id="nav_down" className="mr-12"></div>
      </div>
    </nav>

    <section ref={sectionRefs.home} className="content_section pt-10" id="home">
        <Home />
    </section>

    <section ref={sectionRefs.skills} className="content_section pt-8" id="skills">
        <Skills />
    </section>

      <section ref={sectionRefs.experience} className="content_section pt-8" id="experience">
        <Experience />
      </section>

      <section ref={sectionRefs.certifications} className="content_section pt-8" id="certifications">
        <Certifications />
      </section>

      <section ref={sectionRefs.projects} className="content_section pt-8" id="projects">
        <Projects />
      </section>
      
      <section ref={sectionRefs.interests} className="content_section pt-8 max-sm:pb-48 pb-36" id="interests">
        <Interests />
      </section>

      

    <footer>
      <div id="footer_content">

        <div id="back_top" className="block cursor-pointer" onClick={() => scrollToSection('home')}></div>

        <ul className="my-4 max-sm:mt-0 max-sm:flex max-sm:flex-wrap">
          <li className="cursor-pointer" onClick={() => scrollToSection('skills')}>Skills</li>
          <li className="cursor-pointer" onClick={() => scrollToSection('experience')}>Experience</li>
          <li className="cursor-pointer" onClick={() => scrollToSection('certifications')}>Certs</li>
          <li className="cursor-pointer" onClick={() => scrollToSection('projects')}>Projects</li>
          <li className="cursor-pointer" onClick={() => scrollToSection('interests')}>Interests</li>
        </ul>
        
      </div>
    </footer>

    <div>{new Date().getFullYear()} <span>Philip Cowles</span></div>
  </>
  )
}

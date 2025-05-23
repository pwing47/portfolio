'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Home from './components/Home'
import Certifications from './components/Certifications'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Interests from './components/Interests'
import Skills from './components/Skills'
import { Inter } from 'next/font/google';

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
  const sectionDescs = ['A few things I\'m good at','Adventures in the real world','Proven knowledge','My creative playground','Passions and hobbies'];

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

  function cn(arg0: string, arg1: string): string | undefined {
    throw new Error('Function not implemented.')
  }

  return (    
    <>
    <nav className="fixed z-10 hidden md:flex t-0 w-100 md:w-1/3 justify-end">
      <div id="nav_ribbon" className="p-3 mr-10">
        <div id="pc_logo" title="Portfolio of Philip Cowles"></div>
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
        <div id="nav_down"></div>
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
      
      <section ref={sectionRefs.interests} className="content_section pt-8" id="interests">
        <Interests />
      </section>

      

    <footer>
      <div id="footer_content">
        <ul>
          <li><a href="#home">Home</a></li><li><a href="#portfolio">Portfolio</a></li><li><a href="#relics">Relics</a></li><li><a href="#aboutme">About Me</a></li><li><a href="#contact">Contact</a></li>
        </ul>
        <div id="footer_social">
          <a id="nav_facebook" target="_blank" href="http://www.facebook.com/pcowles">
            <img src="http://philipcowles.com.s3-website.us-east-2.amazonaws.com/images/footer_social_facebook.png" alt="Facebook" title="Facebook" />
          </a>
          <a id="nav_googleplus" target="_blank" href="http://www.google.com/+PhilipCowles">
            <img src="http://philipcowles.com.s3-website.us-east-2.amazonaws.com/images/footer_social_googleplus.png" alt="Google Plus" title="Google+" />
          </a>
          <a id="nav_linkedin" target="_blank" href="http://www.linkedin.com/in/cowles">
            <img src="http://philipcowles.com.s3-website.us-east-2.amazonaws.com/images/footer_social_linkedin.png" alt="LinkedIn" title="LinkedIn" />
          </a>
          <a id="nav_email" href="mailto:philip.cowles@gmail.com">
            <img src="http://philipcowles.com.s3-website.us-east-2.amazonaws.com/images/footer_social_email.png" alt="Email Me" title="Email Me" />
          </a>
        </div>
        <div id="footer_name">{new Date().getFullYear()} <span>Philip Cowles</span></div>
        <div id="back_top"><a href="#home"></a></div>
      </div>
    </footer>
  </>
  )
}

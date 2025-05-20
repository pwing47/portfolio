'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import { useRouter } from 'next/navigation'
import Interests from './components/Interests'
import Contact from './components/Contact'
import Home from './components/Home'
import Relics from './components/Relics'
import Experience from './components/Experience'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('intro')
  const router = useRouter()
  const sections = ['home', 'experience', 'relic', 'interests', 'contact']
  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    experience: useRef<HTMLElement>(null),
    relic: useRef<HTMLElement>(null),
    interests: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  }

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
    <nav>
      <div id="nav_ribbon">
        <div id="pc_logo" title="Portfolio of Philip Cowles"></div>
        <ul>
          {/* <li id="nav_home" title="Home" className="active">
            <a href="#home"><p className="nav-title">Home</p><span className="description">Hello there!</span></a>
            <div className="bar"></div><div className="bar_faded"></div>
          </li>
          <li id="nav_portfolio" title="Portfolio">
            <a href="#portfolio"><p className="nav-title">Portfolio</p><span className="description">Things I've made</span></a>
            <div className="bar"></div><div className="bar_faded"></div>
          </li>
          <li id="nav_relics" title="Relics">
            <a href="#relics"><p className="nav-title">Relics</p><span className="description">Old, but not forgotten</span></a>
            <div className="bar"></div><div className="bar_faded"></div>
          </li>
          <li id="nav_aboutme" title="About Me">
            <a href="#aboutme"><p className="nav-title">About Me</p><span className="description">Other stuff I like</span></a>
            <div className="bar"></div><div className="bar_faded"></div>
          </li>
          <li id="nav_contact" title="Contact">
            <a href="#contact"><p className="nav-title">Contact</p><span className="description">Track me down</span></a>
            <div className="bar"></div><div className="bar_faded"></div>
          </li> */}

          {sections.map((section) => (
            <li
              key={section}
              onClick={() => scrollToSection(section)}
              className="nav-title capitalize text-sm transition-colors font-medium"
            >
              <div className="nav-title">{section}</div>
              <span className="description">Description text</span>
              <div className="bar"></div><div className="bar_faded"></div>
            </li>
          ))}

        </ul>
        <div id="nav_down"></div>
      </div>
    </nav>

    <section ref={sectionRefs.home} className="content_section" id="home">
        <Home />
    </section>

      <section ref={sectionRefs.experience} className="content_section" id="experience">
        <Experience />
      </section>

      <section ref={sectionRefs.relic} className="content_section" id="relic">
        <Relics />
      </section>
      
      <section ref={sectionRefs.interests} className="content_section" id="aboutme">
        <Interests />
      </section>

      <section ref={sectionRefs.contact} className="content_section" id="contact">
        <Contact />
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

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import CodingProfiles from './components/CodingProfiles.jsx'
import Blog from './components/Blog.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <CodingProfiles />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

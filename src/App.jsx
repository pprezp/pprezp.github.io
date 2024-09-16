import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/navigation/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero/Hero';
import SocialMedia from './components/socialmedia/Social';
import SmoothScroll from './components/utils/smoothscroll';
import About from './components/about/About';
import ScrollSpy from './components/utils/ScrollSpy';
import SkillsSection from './components/skills/SkillsSection';
import Footer from './components/Footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SmoothScroll/>
      <ScrollSpy/>
      <NavBar/>
      <Hero/>
      <About/>
      <SkillsSection/>
      <Footer/>
    </> 
  )
}

export default App

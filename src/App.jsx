 import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar'
import Project from './Components/Project'
import Skill from './Components/Skill'
import About from './Components/About'
import Contact from './Components/Contact'


const App = () => {
  return (
    <div>
      <Navbar/>
     <HeroSection/> 
    <Project/>
     <Skill/>
     <About/>
     <Contact/>
    </div>
  )
}

export default App
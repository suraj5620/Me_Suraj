 import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar'
import Project from './Components/Project'
import Skill from './Components/Skill'
import About from './Components/About'
import Contact from './Components/Contact'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'



const App = () => {
    useEffect(()=>{
      AOS.init({
        duration:1000,
        offset:100,
        easing:"ease-in-out",
        once:true,
      });
    },[]);

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
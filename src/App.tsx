import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import ring from './assets/pattern-rings.svg'

 

function App() {
  return (
    <main className="bg-black font-Space-Grotesk min-h-screen overflow-hidden flex flex-col gap-10 pt-9" >
      <Hero/>
      <Skills/>
      <Projects/>
      <div className="bg-darkGrey px-4 relative md:px-7.5 lg:px-41 py-10">
        <Contact/>
      <Footer/>
      <img src={ring} alt="" className="w-[530px] h-[129px] -translate-x-1/2 top-[420px] absolute md:top-[500px] lg:top-72"/>
      </div>
     
    </main>
  )
}

export default App